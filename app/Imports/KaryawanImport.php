<?php

namespace App\Imports;

use App\Models\Admin\m_Karyawan;
use App\Models\Admin\m_Detail_Karyawan;
use Maatwebsite\Excel\Concerns\ToModel;
use Carbon\Carbon;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\DB;
use Log;

class KaryawanImport implements ToModel
{
    private $isFirstRow = true;

    public function model(array $row)
    {
        // Skip header row
        if ($this->isFirstRow) {
            $this->isFirstRow = false;
            return null;
        }

        // Logging received data for debugging purposes
        Log::info('Received Row Data: ', [
            'tanggal_lahir' => $row[3],
            'tanggal_masuk' => $row[11],
            'tanggal_kontrak' => $row[12],
            'tanggal_akhir_kontrak' => $row[13]
        ]);

        // Validate and clean row data
        $validatedData = $this->validateRow($row);
        if (!$validatedData) {
            Log::warning('Row failed validation and was skipped: ', $row);
            return null;
        }

        // Clean up the NIK field
        $cleanNik = str_replace("'", "", $row[2]);

        // Check for existing data with the same NIK
        if (m_Karyawan::where('nik', $cleanNik)->exists()) {
            Log::info('Data with NIK ' . $cleanNik . ' already exists. Skipping row.');
            return null;
        }

        // Generate UUID for id_karyawan
        $id_karyawan = Uuid::uuid4()->toString();

        // Using a transaction to ensure both inserts succeed together
        DB::beginTransaction();
        try {
            // Insert into m_Karyawan
            $karyawan = new m_Karyawan([
                'id_karyawan'            => $id_karyawan,
                'nomor'                  => $row[0],
                'nama_lengkap'           => $row[1],
                'nik'                    => $cleanNik,
                'tanggal_lahir'          => $this->formatTanggal($row[3]),
                'tempat_lahir'           => $row[4],
                'alamat_domisili'        => $row[5],
                'email'                  => $row[6],
                'nomor_hp'               => $row[7],
                'npwp'                   => $row[8],
                'jabatan'                => $row[9],
                'departemen'             => $row[10],
                'tanggal_masuk'          => $this->formatTanggal($row[11]),
                'tanggal_kontrak'        => $this->formatTanggal($row[12]),
                'tanggal_akhir_kontrak'  => $this->formatTanggal($row[13]),  // From the Excel row
                'status'                 => $row[14],
                'agama'                  => $row[15],
                'pendidikan'             => $row[16],
                'aktif_pensiun'          => $row[17],
                'jenis_kelamin'          => $row[18],
            ]);
            $karyawan->save();

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Error inserting row: ', ['error' => $e->getMessage(), 'row' => $row]);
            return null;
        }

        return $karyawan;
    }

    /**
     * Validate required fields in the row.
     * 
     * @param array $row
     * @return bool
     */
    private function validateRow(array $row)
    {
        // Check if essential date fields are present
        return !empty($row[3]) || !empty($row[11]);
    }

    /**
     * Format various date formats to Y-m-d.
     * 
     * @param mixed $tanggal
     * @return string|null
     */
    private function formatTanggal($tanggal)
    {
        if (empty($tanggal)) {
            return null;
        }

        try {
            // Check for dd/mm/yyyy format
            if (is_string($tanggal) && \DateTime::createFromFormat('d/m/Y', $tanggal) !== false) {
                return Carbon::createFromFormat('d/m/Y', $tanggal)->format('Y-m-d');
            }

            // Check for numeric date (Excel serialized date)
            if (is_numeric($tanggal)) {
                return Carbon::createFromDate(1900, 1, 1)->addDays($tanggal - 2)->format('Y-m-d');
            }

            // Check for Y-m-d format
            if (\DateTime::createFromFormat('Y-m-d', $tanggal) !== false) {
                return Carbon::createFromFormat('Y-m-d', $tanggal)->format('Y-m-d');
            }

            // Check for Y/m/d format
            if (\DateTime::createFromFormat('Y/m/d', $tanggal) !== false) {
                return Carbon::createFromFormat('Y/m/d', $tanggal)->format('Y-m-d');
            }

            Log::warning('Date format not recognized, returning null: ', ['date' => $tanggal]);
            return null;
        } catch (\Exception $e) {
            Log::error('Error parsing date: ', ['error' => $e->getMessage(), 'date' => $tanggal]);
            return null;
        }
    }
}

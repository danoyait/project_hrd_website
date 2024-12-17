<?php

namespace App\Exports;

use App\Models\Admin\m_Karyawan;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class KaryawanExport implements FromCollection, WithHeadings
{
    /**
     * Mengambil koleksi data dari model m_Karyawan.
     *
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return m_Karyawan::select([
            'nomor', 
            'nama_lengkap', 
            'nik', 
            'tanggal_lahir', 
            'tempat_lahir', 
            'alamat_domisili', 
            'email', 
            'nomor_hp', 
            'npwp', 
            'jabatan', 
            'departemen', 
            'tanggal_masuk', 
            'tanggal_kontrak', 
            'tanggal_akhir_kontrak', 
            'status', 
            'agama', 
            'pendidikan', 
            'aktif_pensiun', 
            'jenis_kelamin',
        ])->get()->map(function ($karyawan) {
            return [
                $karyawan->nomor, 
                $karyawan->nama_lengkap, 
                "'" . $karyawan->nik, // Tambahkan tanda kutip di depan NIK agar diperlakukan sebagai teks
                $karyawan->tanggal_lahir, 
                $karyawan->tempat_lahir, 
                $karyawan->alamat_domisili, 
                $karyawan->email, 
                $karyawan->nomor_hp, 
                $karyawan->npwp, 
                $karyawan->jabatan, 
                $karyawan->departemen, 
                $karyawan->tanggal_masuk, 
                $karyawan->tanggal_kontrak, 
                $karyawan->tanggal_akhir_kontrak, 
                $karyawan->status, 
                $karyawan->agama, 
                $karyawan->pendidikan, 
                $karyawan->aktif_pensiun, 
                $karyawan->jenis_kelamin,
            ];
        });
    }

    /**
     * Mendefinisikan judul kolom untuk file Excel.
     *
     * @return array
     */
    public function headings(): array
    {
        return [
            'Nomor',
            'NAMA LENGKAP',
            'NIK', 
            'TANGGAL LAHIR',
            'TEMPAT LAHIR',
            'ALAMAT DOMISILI',
            'E-MAIL',
            'NOMOR HP',
            'NPWP',
            'JABATAN',
            'DEPARTEMEN',
            'TANGGAL MASUK',
            'TANGGAL KONTRAK',
            'TANGGAL AKHIR KONTRAK',
            'STATUS',
            'AGAMA',
            'PENDIDIKAN',
            'AKTIF/PENSIUN',
            'JENIS KELAMIN',
        ];
    }
}

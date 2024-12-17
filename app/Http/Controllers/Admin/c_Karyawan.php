<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_Detail_Karyawan;
use App\Models\Admin\m_Karyawan;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Carbon;
use App\StatusEnum;
use App\PendidikanEnum;
use App\JenisKelaminEnum;
use App\JabatanEnum;
use App\DepartemenEnum;
use App\AktifPensiunEnum;
use App\AgamaEnum;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\KaryawanImport;
use App\Exports\KaryawanExport;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;


class c_Karyawan extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
            $data = m_Karyawan::orderBy('nama_lengkap', 'asc')->get();
            $statusOptions = StatusEnum::values();
            $PendidikanOptions = PendidikanEnum::values();
            $JenisKelaminOptions = JenisKelaminEnum::values();
            $JabatanOptions = JabatanEnum::values();
            $DepartemenOptions = DepartemenEnum::values();
            $AktifPensiunOptions = AktifPensiunEnum::values();
            $AgamaOptions = AgamaEnum::values();
            $jenisKelamin = m_Karyawan::select('jenis_kelamin', \DB::raw('count(*) as total'))
            ->groupBy('jenis_kelamin')
            ->get();

            return response()->json([
                'data'                => $data,
                'statusOptions'       => $statusOptions,
                'pendidikanOptions'   => $PendidikanOptions,
                'jeniskelaminOptions' => $JenisKelaminOptions,
                'jabatanOptions'      => $JabatanOptions,
                'departemenOptions'   => $DepartemenOptions,
                'aktifpensiunOptions' => $AktifPensiunOptions,
                'agamaOptions'        => $AgamaOptions,
                'jenisKelamin'        => $jenisKelamin,
            ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

            $request->validate([
                'nama_lengkap'      => 'required',
                'nik'               => 'required',
                'tanggal_lahir'     => 'required',
                'tempat_lahir'      => 'required',
                'alamat_domisili'   => 'required',
                'email'             => 'required',
                'nomor_hp'          => 'required',
                'jabatan'           => 'required',
                'status'            => 'required',
                'agama'             => 'required',
                'pendidikan'        => 'required',
                'jenis_kelamin'     => 'required',
            ]);

            m_Karyawan::create([
                'id_karyawan'             => Uuid::uuid4(),
                'nama_lengkap'            => $request->nama_lengkap,
                'nik'                     => $request->nik,
                'tanggal_lahir'           => $request->tanggal_lahir,
                'tempat_lahir'            => $request->tempat_lahir,
                'alamat_domisili'         => $request->alamat_domisili,
                'email'                   => $request->email, 
                'nomor_hp'                => $request->nomor_hp, 
                'npwp'                    => $request->npwp,  
                'jabatan'                 => $request->jabatan,  
                'departemen'              => $request->departemen,
                'tanggal_masuk'           => $request->tanggal_masuk,
                'tanggal_kontrak'         => $request->tanggal_kontrak,
                'tanggal_akhir_kontrak'   => $request->tanggal_akhir_kontrak,
                'status'                  => $request->status,
                'agama'                   => $request->agama, 
                'pendidikan'              => $request->pendidikan, 
                'aktif_pensiun'           => $request->aktif_pensiun, 
                'jenis_kelamin'           => $request->jenis_kelamin,
                'created_at'              => date('Y-m-d H:i:s'),
                'updated_at'              => date('Y-m-d H:i:s'),
            ]);

            $msg = [
                'success'          => true,
                'message'          => 'Data Berhasil Disimpan!'
            ];

            return response()->json($msg);
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function showDetail($id)
    {
        $data = m_Detail_Karyawan::where('karyawan_id', $id)
        ->get();

        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
            $data = m_Karyawan::where('id_karyawan', $id)->first();

            return $data;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
            $request->validate([
                'nama_lengkap'      => 'required',
                'nik'               => 'required',
                'tanggal_lahir'     => 'required',
                'tempat_lahir'      => 'required',
                'alamat_domisili'   => 'required',
                'email'             => 'required',
                'nomor_hp'          => 'required',
                'status'            => 'required',
                'agama'             => 'required',
                'pendidikan'        => 'required',
                'jenis_kelamin'     => 'required',
            ]);

             m_Karyawan::where('id_karyawan', $id)->update([
                'nama_lengkap'            => $request->nama_lengkap,
                'nik'                     => $request->nik,
                'tanggal_lahir'           => $request->tanggal_lahir,
                'tempat_lahir'            => $request->tempat_lahir,
                'alamat_domisili'         => $request->alamat_domisili,
                'email'                   => $request->email, 
                'nomor_hp'                => $request->nomor_hp, 
                'npwp'                    => $request->npwp,  
                'jabatan'                 => $request->jabatan,  
                'departemen'              => $request->departemen,
                'tanggal_masuk'           => $request->tanggal_masuk,
                'tanggal_kontrak'         => $request->tanggal_kontrak,
                'tanggal_akhir_kontrak'   => $request->tanggal_akhir_kontrak,
                'status'                  => $request->status,
                'agama'                   => $request->agama, 
                'pendidikan'              => $request->pendidikan, 
                'aktif_pensiun'           => $request->aktif_pensiun, 
                'jenis_kelamin'           => $request->jenis_kelamin,
                'updated_at'              => date('Y-m-d H:i:s'),
            ]);

            $msg = [
                'success'         => true,
                'message'         => 'Data Berhasil Diperbarui !'
            ];

            return response()->json($msg);
    }

    

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
{
    // Cari data karyawan berdasarkan ID
    $karyawan = m_Karyawan::where('id_karyawan', $id)->first();

    if (!$karyawan) {
        return response()->json(['success' => false, 'message' => 'Karyawan not found.'], 404);
    }

    // Cari semua detail terkait di tabel m_Detail_Karyawan
    $details = m_Detail_Karyawan::where('karyawan_id', $id)->get();

    foreach ($details as $detail) {
        // Hapus file PDF jika ada
        if ($detail->ktp_path && Storage::exists($detail->ktp_path)) {
            Storage::delete($detail->ktp_path);
        }
        if ($detail->ijazah_path && Storage::exists($detail->ijazah_path)) {
            Storage::delete($detail->ijazah_path);
        }
        if ($detail->surat_perjanjian_path && Storage::exists($detail->surat_perjanjian_path)) {
            Storage::delete($detail->surat_perjanjian_path);
        }

        // Hapus data detail dari database
        $detail->delete();
    }

    // Hapus data utama dari tabel m_Karyawan
    $karyawan->delete();

    return response()->json([
        'success' => true,
        'message' => 'Karyawan dan semua file terkait berhasil dihapus.',
    ]);
}


    public function saveExcelUsers(Request $request)
{
    // Validasi file yang diunggah adalah file Excel (.xlsx, .xls)
    $request->validate([
        'select_users_file' => 'required|file|mimes:xlsx,xls',
    ]);

    try {
        // Menggunakan Maatwebsite Excel untuk mengimpor data dari file
        Excel::import(new KaryawanImport, $request->file('select_users_file'));

        // Jika berhasil, kembalikan respons sukses
        return response()->json(['message' => 'File berhasil diunggah dan diproses.'], 200);
    } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
        // Menangani kesalahan validasi dari Maatwebsite Excel
        $failures = $e->failures();
        $errorMessages = [];

        // Loop melalui setiap kegagalan validasi dan ambil pesan kesalahan
        foreach ($failures as $failure) {
            $errorMessages[] = 'Baris ' . $failure->row() . ': ' . implode(', ', $failure->errors());
        }

        // Kembalikan pesan kesalahan validasi
        return response()->json(['error' => 'Kesalahan validasi: ' . implode("; ", $errorMessages)], 422);
    } catch (\Exception $e) {
        // Menangani kesalahan umum lainnya
        return response()->json(['error' => 'Terjadi kesalahan: ' . $e->getMessage()], 500);
    }
}

public function exportExcelUsers(Request $request)
    {
        return Excel::download(new KaryawanExport, 'employees.xlsx');
    }

    public function storeData(Request $request)
    {
        // Initialize variables for file paths
        $ktpPath = $ijazahPath = $suratPerjanjianPath = null;
        $ktpName = $ijazahName = $suratPerjanjianName = null;
    
        // Get the current date to use in the file name (Indonesian format)
        $date = now()->locale('id')->format('d-m-Y');  // Format date as dd-mm-yyyy
    
        // Get the ID of the karyawan
        $karyawanId = $request->id_karyawan;
    
        // Retrieve the karyawan's full name (nama_lengkap) from m_Karyawan model
        $karyawan = m_Karyawan::select('nama_lengkap')->where('id_karyawan', $karyawanId)->first();
    
        // Check if the karyawan exists
        if (!$karyawan) {
            return response()->json(['success' => false, 'message' => 'Karyawan not found.']);
        }
    
        // Helper function to generate a unique filename
        $generateFileName = function($documentType) use ($date, $karyawan) {
            $counter = 1;
            $karyawanName = $karyawan->nama_lengkap; // Get the employee's full name
    
            // Check if a file with the same name already exists and increment the counter
            while (Storage::exists("public/{$documentType}/{$date}-{$documentType}-{$counter}-{$karyawanName}.pdf")) {
                $counter++;
            }
            // Return the unique filename with the employee's name, excluding karyawanId
            return "{$date}-{$documentType}-{$counter}-{$karyawanName}.pdf";
        };
    
        // Check if 'ktp' file exists and store it
        if ($request->hasFile('ktp')) {
            // Ensure the file is a PDF
            if ($request->file('ktp')->getClientOriginalExtension() == 'pdf') {
                // Generate a unique name using the helper function
                $ktpName = $generateFileName('ktp');
                $ktpPath = $request->file('ktp')->storeAs('public/ktp', $ktpName);  // Save with generated name
            } else {
                return response()->json(['success' => false, 'message' => 'KTP file must be a PDF.']);
            }
        }
    
        // Check if 'ijazah' file exists and store it
        if ($request->hasFile('ijazah')) {
            // Ensure the file is a PDF
            if ($request->file('ijazah')->getClientOriginalExtension() == 'pdf') {
                // Generate a unique name using the helper function
                $ijazahName = $generateFileName('ijazah');
                $ijazahPath = $request->file('ijazah')->storeAs('public/ijazah', $ijazahName);  // Save with generated name
            } else {
                return response()->json(['success' => false, 'message' => 'Ijazah file must be a PDF.']);
            }
        }
    
        // Check if 'surat_perjanjian' file exists and store it
        if ($request->hasFile('surat_perjanjian')) {
            // Ensure the file is a PDF
            if ($request->file('surat_perjanjian')->getClientOriginalExtension() == 'pdf') {
                // Generate a unique name using the helper function
                $suratPerjanjianName = $generateFileName('surat_perjanjian');
                $suratPerjanjianPath = $request->file('surat_perjanjian')->storeAs('public/surat_perjanjian', $suratPerjanjianName);  // Save with generated name
            } else {
                return response()->json(['success' => false, 'message' => 'Surat Perjanjian file must be a PDF.']);
            }
        }
    
        // Save data to the database without including karyawanId in paths or filenames
        m_Detail_Karyawan::create([
            'karyawan_id'              => $request->id_karyawan,
            'ktp_path'                 => $ktpPath,
            'ktp'                      => $ktpName,
            'ijazah_path'              => $ijazahPath,
            'ijazah'                   => $ijazahName,
            'surat_perjanjian_path'    => $suratPerjanjianPath,
            'surat_perjanjian'         => $suratPerjanjianName,
            'created_at'               => now(),
            'updated_at'               => now(),
        ]);
    
        // Return success response
        $msg = [
            'success' => true,
            'message' => 'Data created successfully!'
        ];
    
        return response()->json($msg);
    }

    public function hapusBerkas(Request $request, $id)
    {
      // Validasi input
    $request->validate([
        'type' => 'required|string|in:ktp,ijazah,surat_perjanjian',
    ]);

    // Cari data karyawan berdasarkan ID
    $karyawan = m_Detail_Karyawan::where('id', $id)->first();

    if (!$karyawan) {
        return response()->json(['success' => false, 'message' => 'Karyawan not found.'], 404);
    }

    // Tentukan jenis file yang ingin dihapus
    $filePath = null;
    $column = null;
    switch ($request->type) {
        case 'ktp':
            $filePath = $karyawan->ktp_path;
            $column = ['ktp_path' => null, 'ktp' => null];
            break;
        case 'ijazah':
            $filePath = $karyawan->ijazah_path;
            $column = ['ijazah_path' => null, 'ijazah' => null];
            break;
        case 'surat_perjanjian':
            $filePath = $karyawan->surat_perjanjian_path;
            $column = ['surat_perjanjian_path' => null, 'surat_perjanjian' => null];
            break;
    }

    // Hapus file dari storage
    if ($filePath && Storage::exists($filePath)) {
        Storage::delete($filePath);
    }

    // Perbarui database dengan menghapus jalur file
    if ($column) {
        $karyawan->update($column);
    }

    // Cek jika semua file sudah terhapus (grup kosong)
    if (
        !$karyawan->ktp_path &&
        !$karyawan->ijazah_path &&
        !$karyawan->surat_perjanjian_path
    ) {
        // Hapus data karyawan dari database jika grup kosong
        $karyawan->delete();

        return response()->json([
            'success' => true,
            'message' => 'Semua file dalam grup telah dihapus, data karyawan juga dihapus.',
        ]);
    }

    return response()->json([
        'success' => true,
        'message' => 'File berhasil dihapus.',
    ]);
    }


    public function totalAkhirKontrak(Request $request)
    {
       // Atur zona waktu ke Asia/Jakarta (Waktu Indonesia)
       $currentMonth = Carbon::now('Asia/Jakarta')->format('m'); // Format bulan 2 digit
       $currentYear = Carbon::now('Asia/Jakarta')->format('Y');  // Format tahun 4 digit


        // Hitung total karyawan dengan bulan dan tahun kontrak yang sesuai
        $total = m_Karyawan::whereMonth('tanggal_akhir_kontrak', $currentMonth)
            ->whereYear('tanggal_akhir_kontrak', $currentYear)
            ->count();

        return response()->json([
            'status' => 'success',
            'message' => 'Data berhasil diambil.',
            'total' => $total,
            'bulan' => $currentMonth,  // Menyertakan bulan yang digunakan untuk informasi tambahan
            'tahun' => $currentYear,  // Menyertakan tahun yang digunakan untuk informasi tambahan
        ]);
    }

    // Menampilkan status karyawan (Aktif vs Pensiun)
    public function getStatusKaryawan()
    {
        $aktif = m_Karyawan::where('aktif_pensiun', 'Aktif')->count();
        $pensiun = m_Karyawan::where('aktif_pensiun', 'Pensiun')->count();
        $nonaktif = m_Karyawan::where('aktif_pensiun', 'non-aktif')->count();

        return response()->json([
            'status' => 'success',
            'aktif' => $aktif,
            'nonaktif' => $nonaktif,
            'pensiun' => $pensiun,
        ]);
    }

    // Menampilkan distribusi jabatan
    public function getJabatan()
    {
        $jabatan = m_Karyawan::selectRaw('jabatan, count(*) as count')
                           ->groupBy('jabatan')
                           ->get()
                           ->pluck('count', 'jabatan')
                           ->toArray();

        return response()->json([
            'status' => 'success',
            'jabatan' => $jabatan,
        ]);
    }

    // Menampilkan distribusi departemen
    public function getDepartemen()
    {
        $departemen = m_Karyawan::selectRaw('departemen, count(*) as count')
                              ->groupBy('departemen')
                              ->get()
                              ->pluck('count', 'departemen')
                              ->toArray();

        return response()->json([
            'status' => 'success',
            'departemen' => $departemen,
        ]);
    }

    // Menampilkan distribusi pendidikan
    public function getPendidikan()
    {
        $pendidikan = m_Karyawan::selectRaw('pendidikan, count(*) as count')
                              ->groupBy('pendidikan')
                              ->get()
                              ->pluck('count', 'pendidikan')
                              ->toArray();

        return response()->json([
            'status' => 'success',
            'pendidikan' => $pendidikan,
        ]);
    }
    
    

}

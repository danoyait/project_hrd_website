<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Karyawan extends Model
{
    public $incrementing = false;

    public  $table = "karyawan";

    protected $primaryKey = 'id_karyawan';

    public $casts = [
        'id_karyawan' => 'string',
    ];

    public $timestamps = true;

    protected $fillable = ['id_karyawan','nomor', 'nama_lengkap', 'nik', 'tanggal_lahir', 'tempat_lahir', 'alamat_domisili', 'email', 'nomor_hp', 'npwp', 'jabatan', 'departemen', 'tanggal_masuk', 'tanggal_kontrak', 'tanggal_akhir_kontrak', 'status', 'agama', 'pendidikan', 'aktif_pensiun', 'jenis_kelamin'];

}

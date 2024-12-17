<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Detail_Karyawan extends Model
{
    public $incrementing = true;

    public  $table = "detail_karyawan";

    protected $primaryKey = 'id';

    public $casts = [
        'id' => 'integer',
    ];

    public $timestamps = true;

    protected $fillable = ['karyawan_id','ktp_path', 'ktp', 'ijazah_path', 'ijazah', 'surat_perjanjian_path', 'surat_perjanjian'];

}

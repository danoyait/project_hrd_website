<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_JadwalUsaha extends Model
{
    
    public  $table = "jadwal_usaha";

    protected $primaryKey = 'id_jadwal_usaha';

    public $casts = [
        'id_jadwal_usaha' => 'integer',
    ];


    protected $fillable = ['id_jadwal_usaha', 'hari', 'dari_jam', 'sampai_jam'];
}

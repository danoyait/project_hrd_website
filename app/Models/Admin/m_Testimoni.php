<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class m_Testimoni extends Model
{
    public  $table = "testimoni";

    protected $primaryKey = 'id_testimoni';

    public $casts = [
        'id_testimoni' => 'integer',
    ];

    public $timestamps = true;
    
    protected $fillable = ['id_testimoni', 'nama_pengunjung_salon', 'testimoni_yangdirasakan'];

}

<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RestoranModel extends Model
{
    use HasFactory;
    public $incrementing = false;

    public  $table = "restoran";

    protected $primaryKey = 'id_restoran';

    public $casts = [
        'id_restoran' => 'string',
    ];

    protected $fillable = [
        'id_restoran',
        'nama_restoran',
        'alamat_restoran',
        'notelp_restoran',
    ];
}

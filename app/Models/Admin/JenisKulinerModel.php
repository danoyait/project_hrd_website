<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisKulinerModel extends Model
{
    use HasFactory;

    public $incrementing = false;

    public  $table = "jeniskuliner";

    protected $primaryKey = 'id_jeniskuliner';

    public $casts = [
        'id_jeniskuliner' => 'string',
    ];

    protected $fillable = [
        'id_jeniskuliner',
        'nama_jeniskuliner',
    ];
}

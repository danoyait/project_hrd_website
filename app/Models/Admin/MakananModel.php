<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MakananModel extends Model
{
    use HasFactory;
    public $incrementing = false;

    public  $table = "makanan";

    protected $primaryKey = 'id_makanan';

    public $casts = [
        'id_makanan' => 'string',
    ];

    protected $fillable = [
        'id_makanan',
        'nama_makanan',
        'harga_makanan',
        'jeniskuliner_id',
        'restoran_id',
    ];
}

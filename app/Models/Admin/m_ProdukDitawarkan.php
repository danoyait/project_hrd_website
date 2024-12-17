<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_ProdukDitawarkan extends Model
{
    public  $table = "produk_ditawarkan";

    protected $primaryKey = 'id_produk';

    public $casts = [
        'id_produk' => 'string',
    ];

    public $timestamps = true;
    
    protected $fillable = ['id_produk','nama_produk', 'deskripsi_produk', 'photo', 'photo_crop'];
}

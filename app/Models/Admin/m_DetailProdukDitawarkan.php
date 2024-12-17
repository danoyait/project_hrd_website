<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_DetailProdukDitawarkan extends Model
{
    public  $table = "detail_produk_ditawarkan";

    protected $primaryKey = 'id_detail_produk_ditawarkan';

    public $casts = [
        'id_detail_produk_ditawarkan' => 'integer',
    ];

    public $timestamps = false;
    
    protected $fillable = ['durasi_waktu', 'harga', 'produk_id', 'rating_bintang', 'email'];
}

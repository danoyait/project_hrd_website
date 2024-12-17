<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_SosialMedia extends Model
{
    public  $table = "sosial_media";

    protected $primaryKey = 'id_sosial_media';

    public $casts = [
        'id_sosial_media' => 'integer',
    ];

    public $timestamps = true;
    
    protected $fillable = ['id_sosial_media', 'nama_sosial_media', 'link_sosial_media'];
}

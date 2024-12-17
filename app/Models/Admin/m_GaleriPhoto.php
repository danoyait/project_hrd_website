<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_GaleriPhoto extends Model
{
    public  $table = "galeryphoto";

    protected $primaryKey = 'id_galeryphoto';

    public $casts = [
        'id_galeryphoto' => 'string',
    ];

    public $timestamps = true;
    
    protected $fillable = ['id_galeryphoto','photo', 'photo_crop'];
}

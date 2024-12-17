<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Galery_Photo_Travel extends Model
{
    public  $table = "photo_travel";

    protected $primaryKey = 'id_photo_travel';

    public $casts = [
        'id_photo_travel' => 'string',
    ];

    public $timestamps = true;
    
    protected $fillable = ['id_photo_travel','photo_travel', 'photo_crop_travel'];
}

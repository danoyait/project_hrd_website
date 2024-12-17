<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_HeaderVideo extends Model
{
    public  $table = "header_video";

    protected $primaryKey = 'id_header_video';

    public $casts = [
        'id_header_video' => 'integer',
    ];

    public $timestamps = true;

    protected $fillable = ['id_header_video','video'];

}

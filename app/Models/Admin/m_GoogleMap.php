<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class m_GoogleMap extends Model
{
    public  $table = "google_map";

    protected $primaryKey = 'id_google_map';

    public $casts = [
        'id_google_map' => 'integer',
    ];

    public $timestamps = true;
    
    protected $fillable = ['id_google_map', 'lat_google_map', 'long_gmap', 'link_gmap'];
}

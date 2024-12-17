<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Tour_Destination extends Model
{
    public  $table = "tour_destination";

    protected $primaryKey = 'id_tour_destination';

    public $casts = [
        'id_tour_destination' => 'string',
    ];

    public $timestamps = true;
    
    protected $fillable = ['id_tour_destination','name_tour_destination', 'description_tour_destination',  'includes_tour_destination', 'limit_persons', 'what_to_brings', 'photo_tour_destination', 'photo_crop_tour_destination', 'show_content_highlight_tour_destination_id'];
}

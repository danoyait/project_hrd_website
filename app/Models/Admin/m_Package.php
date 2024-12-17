<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Package extends Model
{
    public  $table = "package";

    protected $primaryKey = 'id_package';

    public $casts = [
        'id_package' => 'string',
    ];

    public $timestamps = true;
    
    protected $fillable = ['id_package','name_package', 'category_package_id', 'description_package', 'tour_destination_id', 'price', 'photo_package', 'photo_crop_package', 'show_content_highlight_package_id'];
}

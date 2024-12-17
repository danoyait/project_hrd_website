<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Package_Category extends Model
{
    public  $table = "package_category";

    protected $primaryKey = 'id_package_category';

    public $casts = [
        'id_package_category' => 'string',
    ];

    public $timestamps = false;
    
    protected $fillable = ['id_package_category','name_package_category'];
}

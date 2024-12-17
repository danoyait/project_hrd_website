<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Testimonials extends Model
{
    public  $table = "testimonials";

    protected $primaryKey = 'id';

    public $casts = [
        'id' => 'integer',
    ];

    public $timestamps = false;
    
    protected $fillable = ['name','message'];
}

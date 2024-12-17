<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Home_Content extends Model
{
    public  $table = "home_content";

    protected $primaryKey = 'id_home_content';

    public $timestamps = false;
    
    protected $fillable = ['title','description'];
}

<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Header extends Model
{
    public  $table = "header";

    protected $primaryKey = 'id_header';


    public $timestamps = true;

    protected $fillable = ['id_header','nama_header', 'icon_header', 'link_url'];


}

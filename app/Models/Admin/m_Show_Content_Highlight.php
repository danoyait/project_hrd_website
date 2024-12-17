<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Show_Content_Highlight extends Model
{
    public  $table = "show_content_highlight";

    protected $primaryKey = 'id_show_content_highlight';

    public $casts = [
        'id_show_content_highlight' => 'string',
    ];

    public $timestamps = false;
    
    protected $fillable = ['id_show_content_highlight','name_show_content_highlight'];
}

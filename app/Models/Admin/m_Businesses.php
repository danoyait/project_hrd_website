<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class m_Businesses extends Model
{
    public $incrementing = false;

    public  $table = "businesses";

    protected $primaryKey = 'id_businesses';

    public $casts = [
        'id_businesses' => 'string',
    ];

    public $timestamps = true;

    protected $fillable = ['id_businesses','business_name', 'whatsapp_number', 'address', 'website_url'];

}

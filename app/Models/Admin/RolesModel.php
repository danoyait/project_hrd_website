<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RolesModel extends Model
{
    use HasFactory;

    public $incrementing = false;

    public  $table = "roles";

    protected $primaryKey = 'id_role';

    public $casts = [
        'id_role' => 'string',
    ];

    protected $fillable = [
        'id_role',
        'nama_role',
    ];
}

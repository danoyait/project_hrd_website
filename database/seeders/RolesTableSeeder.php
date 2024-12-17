<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin\RolesModel;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      
        $roles = [
            [
                'id_role'       => '4caba456-56d5-4195-97ab-2d38c661ec90',
                'nama_role'     => 'admin',
                'created_at'    => date('Y-m-d H:i:s'),
                'updated_at'    => date('Y-m-d H:i:s')
            ],
        ];

        RolesModel::insert($roles);
    }
}

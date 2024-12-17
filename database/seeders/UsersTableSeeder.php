<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Ramsey\Uuid\Uuid;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $User = [
            [
                'id_user'      => Uuid::uuid4(),
                'roles_id'     => '4caba456-56d5-4195-97ab-2d38c661ec90',
                'email'        => 'admin@gmail.com',
                'password'     => Hash::make('admin'),
                'blokir'       => 'T',
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],
        ];

        User::insert($User);
    }
}

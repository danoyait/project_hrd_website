<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('id_user')->primary();
            $table->string('roles_id');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('remember_token', 100)->nullable();
            $table->enum('blokir', ['Y', 'T'])->default('T');
            $table->timestamps();

            $table->foreign('roles_id')->references('id_role')->on('roles');
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}

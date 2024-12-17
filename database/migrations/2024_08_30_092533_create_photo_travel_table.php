<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhotoTravelTable extends Migration
{
    public function up()
    {
        Schema::create('photo_travel', function (Blueprint $table) {
            $table->string('id_photo_travel')->primary();
            $table->string('photo_travel');
            $table->string('photo_crop_travel');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('photo_travel');
    }
}
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHomeContentTable extends Migration
{
    public function up()
    {
        Schema::create('home_content', function (Blueprint $table) {
            $table->increments('id_home_content');
            $table->string('title');
            $table->text('description');
        });
    }

    public function down()
    {
        Schema::dropIfExists('home_content');
    }
}

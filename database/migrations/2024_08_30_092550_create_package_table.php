<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackageTable extends Migration
{
    public function up()
    {
        Schema::create('package', function (Blueprint $table) {
            $table->string('id_package')->primary();
            $table->string('name_package');
            $table->string('category_package_id')->nullable();
            $table->text('description_package')->nullable();
            $table->string('tour_destination_id')->nullable();
            $table->integer('price')->nullable();
            $table->string('photo_package')->nullable();
            $table->string('photo_crop_package')->nullable();
            $table->string('show_content_highlight_package_id')->nullable();
            $table->timestamps();

            $table->foreign('category_package_id')->references('id_package_category')->on('package_category');
            $table->foreign('tour_destination_id')->references('id_tour_destination')->on('tour_destination');
            $table->foreign('show_content_highlight_package_id')->references('id_show_content_highlight')->on('show_content_highlight');
        });
    }

    public function down()
    {
        Schema::dropIfExists('package');
    }
}

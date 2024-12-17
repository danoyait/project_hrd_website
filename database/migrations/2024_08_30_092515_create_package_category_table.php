<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackageCategoryTable extends Migration
{
    public function up()
    {
        Schema::create('package_category', function (Blueprint $table) {
            $table->string('id_package_category')->primary();
            $table->string('name_package_category');
        });
    }

    public function down()
    {
        Schema::dropIfExists('package_category');
    }
}
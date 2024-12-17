<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShowContentHighlightTable extends Migration
{
    public function up()
    {
        Schema::create('show_content_highlight', function (Blueprint $table) {
            $table->string('id_show_content_highlight')->primary();
            $table->string('name_show_content_highlight');
        });
    }

    public function down()
    {
        Schema::dropIfExists('show_content_highlight');
    }
}

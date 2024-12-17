<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTourDestinationTable extends Migration
{
    public function up()
    {
        Schema::create('tour_destination', function (Blueprint $table) {
            $table->string('id_tour_destination', 255)->primary();
            $table->string('name_tour_destination', 255);
            $table->longText('description_tour_destination')->nullable();
            $table->longText('includes_tour_destination')->nullable();
            $table->text('limit_persons')->nullable();
            $table->longText('what_to_brings')->nullable();
            $table->string('photo_tour_destination', 255)->nullable();
            $table->string('photo_crop_tour_destination', 255)->nullable();
            $table->string('show_content_highlight_tour_destination_id', 255)->nullable();
        
            // Define a shorter name for the foreign key constraint
            $table->foreign('show_content_highlight_tour_destination_id', 'tour_dest_highlight_fk')
                  ->references('id_show_content_highlight')->on('show_content_highlight')
                  ->onDelete('set null');
        
            $table->timestamps();
        });
        
    }

    public function down()
    {
        Schema::dropIfExists('tour_destination');
    }
}
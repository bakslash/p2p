<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReqsTable extends Migration
{
    public function up()
    {
        Schema::create('reqs', function (Blueprint $table) {
            $table->id();
            // $table->foreignId('department_id')->constrained(); // Assuming you have a departments table
            $table->string('urgency');
            $table->string('purpose_of_purchase');
            $table->string('location');
            $table->string('subcompany');
            $table->string('vessel');
            $table->string('voyage');
            $table->string('dac_number');
            $table->string('currency');
            $table->string('office');
            $table->string('file_number');
            $table->string('vat');
            $table->string('req_attachment')->nullable();
            $table->string('purchase_category');
            $table->string('point_of_delivery');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('reqs');
    }
}

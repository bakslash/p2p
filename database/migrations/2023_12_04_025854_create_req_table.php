<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('req', function (Blueprint $table) {
            $table->id();
            $table->string('subcompany')->nullable();
            $table->string('department');
            
            $table->string('purpose_of_purchase')->nullable();
            $table->string('urgency');
            $table->string('point_of_delivery');
            $table->string('location');
            $table->string('file_number');
            $table->string('vessel');
            $table->string('voyage');
            $table->string('dac_number');
            $table->string('currency');
            $table->string('office');
            $table->string('purchase_catergory');
           
            $table->string('vat');
            $table->string('req_attachemnt');
           
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('req');
    }
};

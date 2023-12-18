<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('suppliers', function (Blueprint $table) {
            $table->string('tel_number_1')->nullable();
            $table->string('tel_number_2')->nullable();
            $table->string('postal_address')->nullable();
            $table->string('recognition')->nullable();
            $table->string('supplier_code')->nullable();
            $table->string('supplier_pin')->nullable();
        });
    }
   
  
    public function down()
    {
        Schema::table('suppliers', function (Blueprint $table) {
            $table->string('tel_number_1')->nullable();
            $table->string('tel_number_2')->nullable();
            $table->string('postal_address')->nullable();
            $table->string('recognition')->nullable();
            $table->string('supplier_code')->nullable();
            $table->string('supplier_pin')->nullable();
        });
    }
};

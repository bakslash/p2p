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
        Schema::create('supplier', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('capacity');
            $table->string('company_name');
            $table->string('compliance');
            $table->string('contact_person');
            $table->string('designation');
            $table->string('documentation');
            $table->string('email');
            $table->string('physical_location');
            $table->string('postal_address');
            $table->string('supplier_code');
            $table->string('recognition');
            $table->string('supplier_pin');
            $table->string('tel_number_1');
            $table->string('tel_number_2');
            $table->timestamps();
            





        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('supplier');
    }
};

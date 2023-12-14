<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuppliersTable extends Migration
{
    public function up()
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('account_name');
            $table->string('supplier_name');
            $table->text('address');
            $table->string('phone_number'); // Changed to string assuming it can contain non-integer characters
            $table->string('email');
            $table->string('contact_person');
            $table->string('nature_of_supplies');
            $table->boolean('supplier_active');
            $table->boolean('due_diligence_received');
            $table->boolean('certificate_of_commitment');
            $table->boolean('certificate_of_corporation');
            $table->boolean('bank_letter');
            $table->string('status_of_turnover');
            // Add more columns as needed
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('suppliers');
    }
}

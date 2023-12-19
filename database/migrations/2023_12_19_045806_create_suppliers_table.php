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
        Schema::create('suppliers', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('email');
            $table->string('contact_person');
            $table->string('phone_number');
            $table->string('supplier_pin');
            $table->string('postal_address');
            $table->string('physical_location');
            $table->string('nature_of_supplies');
            $table->boolean('supplier_active')->default(true);
            $table->string('due_diligence_certificate')->nullable();
            $table->string('certificate_of_commitment')->nullable();
            $table->string('certificate_of_incorporation')->nullable();
            $table->string('bank_letter')->nullable();
            $table->string('turn_over_status')->nullable();
            $table->integer('interger_field')->nullable(); // Replace 'interger_field' with your actual field name
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('suppliers');
    }
};




            
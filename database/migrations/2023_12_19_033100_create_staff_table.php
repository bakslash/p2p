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
    Schema::create('staff', function (Blueprint $table) {
        $table->id();
        $table->string('username');
        $table->string('staffNames')->nullable();

        $table->string('title');
        $table->string('email')->unique();
        $table->string('lineManager');
        $table->string('office');
        $table->boolean('isActive')->default(true);
        $table->boolean('isAdmin')->default(false);
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};

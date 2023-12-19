<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class suppliers extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_name',
        'email',
        'contact_person',
        'phone_number',
        'supplier_pin',
        'postal_address',
        'physical_location',
        'nature_of_supplies',
        'supplier_active',
        'due_diligence_certificate',
        'certificate_of_commitment',
        'certificate_of_incorporation',
        'bank_letter',
        'turn_over_status',
        // Add the rest of the fields here
    ];
}

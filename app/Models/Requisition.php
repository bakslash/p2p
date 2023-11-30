<?php

// app/Models/Requisition.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Requisition extends Model
{
    protected $fillable = [
        'department_id',
        'department',
        'urgency',
        'purpose_of_purchase',
        'location',
        'subcompany',
        'vessel',
        'voyage',
        'dac_number',
        'currency',
        'office',
        'file_number',
        'vat',
        'req_attachment', // Corrected attribute name
        'purchase_catergory',
        'point_of_delivery',
        'req_attachment',
        // Add other fields here
    ];

    // Your model code here
}

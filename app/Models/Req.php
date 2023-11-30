<?php

// app/Models/Req.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Req extends Model
{
    use HasFactory;

    protected $fillable = [
        'department_id',
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
        'req_attachment',
        'purchase_category',
        'point_of_delivery',
        // Add other fields here
    ];

    // You can define relationships or other model-specific logic here
}

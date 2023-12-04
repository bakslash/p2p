<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReqDetails extends Model
{
    // Define the table associated with the model
    protected $table = 'req_details';

    // Specify the fields that are fillable
    use HasFactory;

    protected $fillable = [
        
        'req_item',
        'quantity',
        'measure',
        
        // Add other fields here
    ];



    // Add your custom methods, relationships, etc.

    // Example of a relationship method
    public function relatedModel()
    {
        return $this->belongsTo(RelatedModel::class);
    }
}
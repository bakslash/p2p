<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Req extends Model
{
    use HasFactory;
    // Inside the Req.php model
protected $fillable = ['purchase_category','purpose_of_purchase','subcompany','department','location', 'vat', 'currency', 'file_number', 'vessel', 'voyage', 'dac_number', 'urgency', 'point_of_delivery', 'office'];

}

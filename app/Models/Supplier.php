<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;
    protected $fillable = ['category','capacity','company_name','compliance',
    'contact_person','designation','documentation','email','physical_location',
    'postal_address','supplier_code','recognition','supplier_pin','tel_number_1','tel_number_2'];
    
   

}

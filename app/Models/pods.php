<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pods extends Model
{
    use HasFactory;
    protected $fillable = ['point_of_delivery','isDepActive'];

}

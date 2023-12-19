<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class depts extends Model
{
    use HasFactory;
    protected $fillable = ['depCode','depHod','depName','parentCompany','isDepActive'];
}

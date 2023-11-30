<?php

namespace App\Http\Controllers\form_layouts;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SuppliersForm extends Controller
{
  public function index()
  {
    return view('content.form-layout.form-layouts-suppliers');
  }
}

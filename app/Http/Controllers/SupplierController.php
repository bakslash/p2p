<?php
// app/Http/Controllers/SupplierController.php

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function create()
    {
        // Assuming you have a SupplierCategory and Country model
        $supplierCategories = SupplierCategory::pluck('name', 'id');
        $countries = Country::pluck('name', 'id');

        return view('supplier.form', compact('supplierCategories', 'countries'));
    }

    public function store(Request $request)
    {
        // Validate the form data and save to the database
    }
}

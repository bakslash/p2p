<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\suppliers;

class SupplierController extends Controller
{
    // Fetch all suppliers
    public function index()
{
    try {
        $suppliers = suppliers::all();
        return response()->json($suppliers, 200);
    } catch (\Exception $e) {
        return response()->json(['error' => 'Internal Server Error'], 500);
    }
}

public function store(Request $request)
{
    try {
        $request->validate([
            // Add validation rules for all fields
        ]);

        $newSupplier = suppliers::create($request->all());

        // Log specific information if needed
        \Log::info('Request received. Supplier data: ' . json_encode($request->only(['category', 'capacity', 'company_name', /* other fields */])));
        \Log::info('Created Supplier: ' . json_encode($newSupplier->toArray()));

        return response()->json(['message' => 'Supplier added successfully', 'data' => $newSupplier], 201);
    } catch (\Exception $e) {
        // Log the actual error for debugging purposes
        \Log::error($e);

        return response()->json(['error' => $e->getMessage()], 500);

    }
}

    
}

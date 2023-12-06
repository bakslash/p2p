<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Supplier;

class SupplierController extends Controller
{
    // Fetch all suppliers
    public function index()
    {
        try {
            $suppliers = Supplier::all();
            return response()->json($suppliers);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    // Add a new supplier
    public function store(Request $request)
    {
        try {
            // Log the request data for debugging
            \Log::info('Request data:', $request->all());
    
            $request->validate([
                
                // Add other validation rules for the remaining fields
            ]);
    
            $newSupplier = Supplier::create($request->all());
    
            // Log the created supplier data for debugging
            \Log::info('Created Supplier:', $newSupplier);
    
            return response()->json(['message' => 'Supplier added successfully', 'data' => $newSupplier]);
        } catch (\Exception $e) {
            // Log the actual error for debugging purposes
            \Log::error($e);
    
            return response()->json(['error' => $e], 500);
        }
    }
    
}

<?php
// app/Http/Controllers/StaffController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\staff;
use Illuminate\Database\QueryException;

class StaffController extends Controller
{
    // Fetch all staff
    public function index()
    {
        try {
            $staff = staff::all();
            return response()->json(['staff' => $staff], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    // Add new staff
    public function store(Request $request)
    {
        try {
            $request->validate([
                'username' => 'required|string',
                'staffNames' => 'required|string',
                'title' => 'required|string',
                'email' => 'required|email',
                'lineManager' => 'required|string',
                'office' => 'required|string',
                'isActive' => 'boolean',
                'isAdmin' => 'boolean',
            ]);

            $staff = staff::create($request->all());

            return response()->json(['message' => 'Staff added successfully', 'staff' => $staff], 201);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Duplicate entry or invalid data', 'details' => $e->getMessage()], 422);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}

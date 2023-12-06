<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Staff;

class StaffController extends Controller
{
    // Fetch all staff
    public function index()
    {
        $staff = Staff::all();

        return response()->json(['staff' => $staff], 200);
    }

    // Add new staff
    public function store(Request $request)
    {
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

        $staff = Staff::create($request->all());

        return response()->json(['staff' => $staff], 201);
    }
}

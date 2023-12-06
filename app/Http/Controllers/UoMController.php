<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UoM;

class UoMController extends Controller
{
    // Fetch all UoMs
    public function index()
    {
        $uoms = UoM::all();

        return response()->json($uoms);
    }

    // Add a new UoM
    public function store(Request $request)
    {
        $request->validate([
            'uom' => 'required|string|max:255',
            'UoM_code' => 'required|string|max:50',
            // Add more validation rules as needed
        ]);

        $uom = UoM::create([
            'uom' => $request->input('uom'),
            'UoM_code' => $request->input('UoM_code'),
            // Add more fields as needed
        ]);

        return response()->json($uom, 201);
    }
}

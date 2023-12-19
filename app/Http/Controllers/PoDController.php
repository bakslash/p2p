<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\pods; // Assuming you have a PoD model

class PoDController extends Controller
{
    // Fetch all PoDs
    public function index()
    {
        $pods = pods::all();

        return response()->json($pods);
    }

    // Add a new PoD
    public function store(Request $request)
    {
        $request->validate([
            'point_of_delivery' => 'required|string|max:255',
           
            'isDepActive' => 'required|boolean',
        ]);

        $pod = pods::create($request->all());

        return response()->json($pod, 201);
    }
}

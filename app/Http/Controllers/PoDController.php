<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PoD; // Assuming you have a PoD model

class PoDController extends Controller
{
    // Fetch all PoDs
    public function index()
    {
        $pods = PoD::all();

        return response()->json($pods);
    }

    // Add a new PoD
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'isActive' => 'required|boolean',
        ]);

        $pod = PoD::create($request->all());

        return response()->json($pod, 201);
    }
}

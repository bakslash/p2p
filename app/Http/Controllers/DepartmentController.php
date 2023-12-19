<?php

// app/Http/Controllers/deptsController.php

namespace App\Http\Controllers;

use App\Models\depts;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    // Fetch all depts
    public function index()
    {
        $depts = depts::all();
        return response()->json($depts);
    }

    // Add a new depts
    public function store(Request $request)
    {
       

        $depts = depts::create([
            
            'dep_name' => $request->input('depName'),
            'dep_code' => $request->input('depCode'),
            'dep_hod' => $request->input('depHod'),
            'dep_hbu' => $request->input('depHbu'),
            'is_active' => $request->input('isDepActive', true),
        ]);

        return response()->json($depts, 201);
    }
}

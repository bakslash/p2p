<?php

// app/Http/Controllers/DepartmentController.php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    // Fetch all departments
    public function index()
    {
        $departments = Department::all();
        return response()->json($departments);
    }

    // Add a new department
    public function store(Request $request)
    {
        $request->validate([
            'parentCompany' => 'required',
            'depName' => 'required',
            'depCode' => 'required',
            'depHod' => 'required',
            'depHbu' => 'required',
            'isDepActive' => 'boolean',
        ]);

        $department = Department::create([
            'parent_company' => $request->input('parentCompany'),
            'dep_name' => $request->input('depName'),
            'dep_code' => $request->input('depCode'),
            'dep_hod' => $request->input('depHod'),
            'dep_hbu' => $request->input('depHbu'),
            'is_active' => $request->input('isDepActive', true),
        ]);

        return response()->json($department, 201);
    }
}

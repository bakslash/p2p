<?php

// app/Http/Controllers/ReqController.php

namespace App\Http\Controllers;

use App\Models\Req;
use App\Models\Department;
use Illuminate\Http\Request;

class ReqController extends Controller
{
    public function create()
    {
        $departments = Department::all();

        return view('reqs.create', compact('departments'));
    }

    public function getAllReqs()
    {
        // Retrieve all reqs from the database
        $reqs = Req::all();

        return response()->json(['message' => 'Successfully retrieved all reqs', 'reqs' => $reqs], 200);
    }

    public function store(Request $request)
    {
       

        $request->validate([
            // Add validation rules for your fields here
        ]);

        Req::create([
            'department_id' => $request->input('department_id' ,1),
            'urgency' => $request->input('urgency'),
            'purpose_of_purchase' => $request->input('purpose_of_purchase','it'),
            'location' => $request->input('location'),
            'subcompany' => $request->input('subcompany'),
            'vessel' => $request->input('vessel'),
            'voyage' => $request->input('voyage'),
            'dac_number' => $request->input('dac_number'),
            'currency' => $request->input('currency'),
            'office' => $request->input('office'),
            'file_number' => $request->input('file_number'),
            'vat' => $request->input('vat'),
            'req_attachment' => $request->input('req_attachment'),
            'purchase_category' => $request->input('purchase_category'),
            'point_of_delivery' => $request->input('point_of_delivery'),
            // Add other fields here
        ]);

        return response()->json(['message' => 'Req created successfully', 'req' => $request], 201);
    }
    public function show($id)
    {
        // Fetch the req by its ID from the database
        $req = Req::findOrFail($id);

        // Pass the req data to the view
        return view('req.show', compact('req'));
    }

    public function edit($id)
    {
        // Fetch the req by its ID from the database
        $req = Req::findOrFail($id);

        // Pass the req data to the view for editing
        return view('req.edit', compact('req'));
    }

    public function update(Request $request, $id)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
           // 'field1' => 'required',
            //'field2' => 'required',
            // Add validation rules for other fields as needed
        ]);

        // Update the req in the database
        $req = Req::findOrFail($id);
        $req->update($validatedData);

        // Redirect back to the req details page or wherever is appropriate
        return redirect()->route('req.show', ['id' => $id])->with('success', 'Req updated successfully',$req);
    }
}
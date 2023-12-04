<?php
namespace App\Http\Controllers;

use App\Models\Req;

use Illuminate\Http\Request;

class ReqController extends Controller
{
   
//get all reqs controller
    public function getAllReqs()
    {
        $reqs = Req::all();

        return response()->json(['message' => 'Successfully retrieved all reqs', 'reqs' => $reqs], 200);
    }
//add req controller
    public function store(Request $request)
    {
        $request->validate([
            // Add validation rules for your fields here
            'urgency' => 'required|string|max:255',
            'vessel' => 'required|string|max:255',
            'voyage' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'dac_number' => 'required|string|max:255',
            'currency' => 'required|string|max:255',
            'office' => 'required|string|max:255',
            'vat' => 'required|string|max:255',
            'file_number' => 'required|string|max:255',
        'department' => 'required|string|max:255',

            
        ]);

        $req = Req::create($request->all());

        return response()->json(['message' => 'Req created successfully', 'req' => $req], 201);
    }

    public function show($id)
    {
        $req = Req::findOrFail($id);

        return response()->json(['message' => 'Successfully retrieved req', 'req' => $req], 200);
    }

    public function edit($id)
    {
        $req = Req::findOrFail($id);

        return response()->json(['message' => 'Successfully retrieved req for editing', 'req' => $req], 200);
    }

    public function update(Request $request, $id)
{
    $validatedData = $request->validate([
        'urgency' => 'required|string|max:255',
        'vessel' => 'required|string|max:255',
        'voyage' => 'required|string|max:255',
        'location' => 'required|string|max:255',
        'dac_number' => 'required|string|max:255',
        'currency' => 'required|string|max:255',
        'office' => 'required|string|max:255',
        'vat' => 'required|string|max:255',
        'subcompany' => 'required|string|max:255',
        'purchase_category' => 'required|string|max:255',
        'purpose_of_purchase' => 'required|string|max:255',
        'point_of_delivery' => 'required|string|max:255',
        'file_number' => 'required|string|max:255',
        'department' => 'required|string|max:255',
        // Add validation rules for any other fields
    ]);

    $req = Req::findOrFail($id);
    $req->update($validatedData);

    return response()->json(['message' => 'Req updated successfully', 'req' => $req], 200);
}

}

<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Requisition;

class RequisitionController extends Controller
{
    public function create()
    {
        // $departments = Department::all(); // Assuming you have a Department model

        return view('requisition.create', compact('departments'));
    }

    public function store(Request $request)
{
    $request->validate([
        // Add validation rules for your fields here
    ]);

    Requisition::create([
        'department_id' => $request->input('department_id'),
        'department' => $request->input('department'),
        'urgency' => $request->input('urgency'),
        'purpose_of_purchase' => $request->input('purpose_of_purchase'),
        'location' => $request->input('location'),
        'subcompany' => $request->input('subcompany'),
        'vessel' => $request->input('vessel'),
        'voyage' => $request->input('voyage'),
        'dac_number' => $request->input('dac_number'),
        'currency' => $request->input('currency'),
        'office'  => $request->input('office'),
        'file_number'  => $request->input('file_number'),
        'vat'  => $request->input('vat'),
        'req_attachment'  => $request->input('req_attachment'), // Corrected attribute name
        'purchase_catergory'  => $request->input('purchase_catergory'),
        'point_of_delivery'  => $request->input('point_of_delivery'),
        
        
        // Add other fields here
    ]);

    return redirect()->route('requisitions.index')->with('success', 'Requisition created successfully.');
}

}

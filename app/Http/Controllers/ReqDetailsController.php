<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\reqs_details; // Assuming you have a reqs_details model

class ReqDetailsController extends Controller
{
    public function AllReqDetails()
    {
        $reqDetails = reqs_details::all();

        return response()->json(['message' => 'Successfully retrieved all reqs', 'reqs' => $reqDetails], 200);
    }
    public function add(Request $request)
    {
        // Validate the request data
        $request->validate([
         // Assuming reqs table has an 'id' column
            'item' => 'required|string',
            'measure' => 'required|string',
            'quantity' => 'required|string',
            // Add other validation rules for your reqs_details fields
        ]);

        // Create a new reqs_details instance
        $reqDetails = reqs_details::create([
            
            'item' => $request->input('item'),
            'quantity' => $request->input('quantity'),
            'measure' => $request->input('measure'),
            'status' => $request->input('status'),
            // Add other fields from your reqs_details table
        ]);

        return response()->json(['message' => 'reqs_details added successfully', 'data' => $reqDetails], 201);
    }

    public function fetch($reqId)
    {
        // Fetch reqs_details for a specific req_id
        $reqDetails = reqs_details::where('req_id', $reqId)->get();

        return response()->json(['data' => $reqDetails]);
    }
}

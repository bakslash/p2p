<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\reqs_details;

class ReqDetailsController extends Controller
{
    public function AllReqItems()
    {
        $reqItems = reqs_details::all();

        return response()->json(['message' => 'Successfully retrieved all reqs', 'data' => $reqItems], 200);
    }

    public function add(Request $request)
    {
        // Validate the request data
        $request->validate([
            'item' => 'required|string',
            'measure' => 'required|string',
            'quantity' => 'required|string',
            // Add other validation rules for your reqs_details fields
        ]);

        // Create a new reqs_details instance
        $reqItem = reqs_details::create([
            'item' => $request->input('item'),
            'quantity' => $request->input('quantity'),
            'measure' => $request->input('measure'),
            'status' => $request->input('status'),
            // Add other fields from your reqs_details table
        ]);

        return response()->json(['message' => 'Reqs item added successfully', 'data' => $reqItem], 201);
    }

    public function fetch($id)
    {
        // Fetch reqs_details for a specific req_id
        $reqItem = reqs_details::where('id', $id)->get();

        return response()->json(['message' => 'Reqs item fetched successfully', 'data' => $reqItem], 200);
    }

    public function update(Request $request, $id)
    {
        // Validate the request data
        $request->validate([
            'item' => 'required|string',
            'quantity' => 'required|string',
            // Add other validation rules for your reqs_details fields
        ]);

        // Find the reqs_details item by its ID
        $reqItem = reqs_details::find($id);

        // Check if the item exists
        if (!$reqItem) {
            return response()->json(['message' => 'Reqs item not found'], 404);
        }

        // Update the reqs_details item with the new data
        $reqItem->update([
            'item' => $request->input('item'),
            'quantity' => $request->input('quantity'),
            'measure' => $request->input('measure'),
            'status' => $request->input('status'),
            // Add other fields from your reqs_details table
        ]);

        return response()->json(['message' => 'Reqs item updated successfully', 'data' => $reqItem], 200);
    }
}

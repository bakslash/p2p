<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\invoice;

class InvoiceController extends Controller
{
    // ... existing methods

    public function update(Request $request, $id)
    {
        $request->validate([
            // Add validation rules for your fields here
            'invoice_date' => 'required|string|max:255',
            'date_received' => 'required|string|max:255',
            'invoice_number' => 'required|string|max:255',
            'tracking_number' => 'required|string|max:255',
            'receipt_number' => 'required|string|max:255',
            'invoice_amount' => 'required|string|max:255',
            'upload_doc' => 'required|string|max:255',
            'comments' => 'required|string|max:255',
            'approver_type' => 'required|string|max:255',
            'uncancel_invoice' => 'required|string|max:255',
            'uncancel_reason' => 'required|string|max:255',
        ]);

        $invoice = invoice::findOrFail($id);

        $invoice->update($request->all());

        return response()->json(['message' => 'Invoice updated successfully', 'invoice' => $invoice], 200);
    }

    public function show($id)
    {
        $invoice = invoice::findOrFail($id);

        return response()->json(['message' => 'Invoice retrieved successfully', 'invoice' => $invoice], 200);
    }
}

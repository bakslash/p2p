<?php
// routes/web.php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReqController;
use App\Http\Controllers\ReqDetailsController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\staffController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\PoDController;
use App\Http\Controllers\UoMController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



// Other routes...
Route::redirect('/', '/login');

// Middleware group for authenticated and verified users
Route::middleware(['auth', 'verified'])->group(function () {
    // Home dashboard
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');
    // Add req
    Route::get('/add_req', fn () => Inertia::render('AddReqForm'))->name('add_req');
    Route::post('/reqs', [ReqController::class, 'store'])->name('reqs.store');

    // Get all req details
    Route::get('/reqs', [ReqController::class, 'getAllReqs'])->name('reqs.getAllReqs');

    // Edit req detail
    Route::get('/edit_req/{id}', [ReqController::class, 'edit'])->name('req.edit');

    // Get single req
    Route::get('/req/{id}', [ReqController::class, 'show'])->name('req.show');

    // Req view
    Route::get('/view_req/{id}', fn () => Inertia::render('ViewReqForm'))->name('req.show');

    // Edit req view
    Route::get('/edit_req/{id}', fn ($id) => Inertia::render('EditReqForm'))->name('edit_req');

    // Update req
    Route::patch('/req/{id}/edit', [ReqController::class, 'update'])->name('req.update');

    //req_items
    Route::get('/req_items/{id}', fn () => Inertia::render('ReqDetails'))->name('req_items');
    Route::post('/req_item/add', [ReqDetailsController::class, 'add']);
    Route::get('/api/req_items', [ReqDetailsController::class, 'AllReqItems']);
    Route::get('/req_item/{id}', [ReqDetailsController::class, 'fetch']);
    Route::put('/reqs_item/{id}', [ReqDetailsController::class, 'update']);
    Route::get('/edit_item/{id}', fn ($id) => Inertia::render('EditReqItem'))->name('edit_req_item');

    // Success view
    Route::get('/success', fn () => Inertia::render('Success'))->name('success');

    // Supplier routes
    Route::get('/suppliers_list',  fn () => Inertia::render('ViewSuppliers'))->name('suppliers_list');
    Route::get('/suppliers', [SupplierController::class, 'index']);
    Route::post('/suppliers', [SupplierController::class, 'store']);
    Route::get('/add_suppliers', fn () => Inertia::render('AddSupForm'))->name('add_suppliers');

    // Profile routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Additional routes...

    Route::get('/staff', [staffController::class, 'index']);
    Route::post('/staff', [staffController::class, 'store']);
    Route::get('/staff_list',  fn () => Inertia::render('ViewStaff'))->name('staff_list');
    Route::get('/add_staff', fn () => Inertia::render('AddStaffForm'))->name('add_staff');

    // UOM routes
Route::get('/uoms', [UoMController::class, 'index']);
Route::post('/uoms', [UoMController::class, 'store']);
Route::get('/add_uom', fn () => Inertia::render('AddUoMForm'))->name('add_uom');

// POD routes
Route::get('/pod', [PoDController::class, 'index']);
Route::post('/pod', [PoDController::class, 'store']);
Route::get('/add_pod', fn () => Inertia::render('AddPoDForm'))->name('add_pod');

// Department routes
Route::get('/dep', [DepartmentController::class, 'index']);
Route::post('/dep', [DepartmentController::class, 'store']);
Route::get('/add_departments', fn () => Inertia::render('AddDepForm'))->name('add_departments');

// Staff routes


// Invoice routes
Route::get('/add_invoice', fn () => Inertia::render('AddInvoice'))->name('add_invoice');
Route::post('/invoices', [invoiceController::class, 'store'])->name('invoices.store');

Route::get('/add_quote/{id}', fn () => Inertia::render('Quote'))->name('quote');
Route::get('/quotations', fn () => Inertia::render('Quotations'))->name('quotations');

});

require __DIR__.'/auth.php';

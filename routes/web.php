<?php
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReqController;
use App\Http\Controllers\ReqDetailsController;
use App\Http\Controllers\SupplierController;
//use App\Http\Controllers\StaffController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\PoDController;
use App\Http\Controllers\UoMController;
use App\Http\Controllers\SupplierCategoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/supplier_category', [UoMController::class, 'index']);
Route::post('/supplier_category', [UoMController::class, 'store']);
Route::get('/add_supplier_category', fn () => Inertia::render('AddSupCatForm'))->name('supplier_category');
//uom routes
Route::get('/uoms', [UoMController::class, 'index']);
Route::post('/uoms', [UoMController::class, 'store']);
Route::get('/add_uom', fn () => Inertia::render('AddUoMForm'))->name('add_uom');
//department routes
Route::get('/pod', [PoDController::class, 'index']);
Route::post('/pod', [PoDController::class, 'store']);
Route::get('/add_pod', fn () => Inertia::render('AddPoDForm'))->name('add_pod');
//department routes
Route::get('/dep', [DepartmentController::class, 'index']);
Route::post('/dep', [DepartmentController::class, 'store']);
Route::get('/add_departments', fn () => Inertia::render('AddDepForm'))->name('add_departments');
//staff routes
//Route::get('/staff', [StaffController::class, 'index']);
//Route::post('/staff', [StaffController::class, 'store']);
//Route::get('/add_staff', fn () => Inertia::render('AddStaffForm'))->name('add_staff');

// routes/web.php

use App\Http\Controllers\InvoiceController;

Route::get('/add_invoice' ,fn () => Inertia::render('AddInvoice'))->name('add_invoice');
Route::post('/invoices', [InvoiceController::class, 'store'])->name('invoices.store');


// Redirect root to the login route
Route::redirect('/', '/login');


Route::middleware(['auth', 'verified'])->group(function () {
    //home dashboard
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');
    //req routes 
    Route::get('/req_details', fn () => Inertia::render('ReqDetails'))->name('req_details');
    //add req
    Route::get('/add_req', fn () => Inertia::render('AddReqForm'))->name('add_req');
    Route::post('/reqs', [ReqController::class, 'store'])->name('reqs.store');
    
    //get all reqs details
    Route::get('/reqs', [ReqController::class, 'getAllReqs'])->name('reqs.getAllReqs');
    //get single req detail
    Route::get('/req/{id}', [ReqController::class, 'edit'])->name('req.edit');
    
    //edit req render
    Route::get('/edit_req/{id}', fn ($id) => Inertia::render('EditReqForm'))->name('edit_req');
    //
    Route::patch('/req/{id}/edit',  [ReqController::class, 'update'])->name('req.update');
//req items

    Route::get('/req_items', [ReqDetailsController::class, 'AllReqItems']);

    //update req items

    Route::put('/reqs_items/{id}', [ReqDetailsController::class, 'update']);


    Route::post('/req_items/add', [ReqDetailsController::class, 'add']);

// Fetch Req items for a req_id
    Route::get('/req_items/{id}/edit', [ReqDetailsController::class, 'fetch']);

    Route::get('/req_items/{id}', fn ($id) => Inertia::render('EditReqItem'))->name('edit_req_item');

    Route::get('/success', fn () => Inertia::render('Success'))->name('success');

    //supplier routes
Route::get('/suppliers', [SupplierController::class, 'index']);
Route::post('/suppliers', [SupplierController::class, 'store']);
Route::get('/add_suppliers', fn () => Inertia::render('AddSupForm'))->name('add_suppliers');
    

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/reqs/create', [ReqController::class, 'create'])->name('reqs.create');
   
   
    
   

    
});

require __DIR__.'/auth.php';

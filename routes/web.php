<?php
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReqController;
use App\Http\Controllers\ReqDetailsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    
    //get all reqs
    Route::get('/reqs', [ReqController::class, 'getAllReqs'])->name('reqs.getAllReqs');
    //get single req
    Route::get('/req/{id}', [ReqController::class, 'edit'])->name('req.edit');
    
    //edit req render
    Route::get('/edit_req/{id}', fn ($id) => Inertia::render('EditReqForm'))->name('edit_req');
    //
    Route::patch('/req/{id}/edit',  [ReqController::class, 'update'])->name('req.update');


    Route::get('/allreq_details', [ReqDetailsController::class, 'AllReqDetails']);

    Route::post('/req_details/add', [ReqDetailsController::class, 'add']);

// Fetch ReqDetails for a req_id
    Route::get('/req_details/fetch/{req_id}', [ReqDetailsController::class, 'fetch']);
    

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/reqs/create', [ReqController::class, 'create'])->name('reqs.create');
   
   
    
   

    
});

require __DIR__.'/auth.php';

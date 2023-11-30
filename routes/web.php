<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReqController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
   // Route::get('/reqs/create', [ReqController::class, 'create'])->name('reqs.create');
   // Route::post('/reqs', [ReqController::class, 'store'])->name('reqs.store');
});



//Route::get('/requisitions/create', [ReqController::class, 'create'])->name('requisitions.create');
//Route::post('/requisitions', [ReqController::class, 'store'])->name('requisitions.store');

Route::get('/reqs/create', [ReqController::class, 'create'])->name('reqs.create');
Route::post('/reqs', [ReqController::class, 'store'])->name('reqs.store');
Route::get('/reqs', [ReqController::class, 'getAllReqs'])->name('reqs.getAllReqs');




require __DIR__.'/auth.php';

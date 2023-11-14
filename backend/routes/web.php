<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\staffController;
use App\Http\Controllers\StaffTimeController;
use App\Http\Controllers\CreateShiftController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get("/people",[staffController::class, "index"]);

Route::get("/time_table", [StaffTimeController::class, "time_table"]);
Route::get("/add_time", [StaffTimeController::class, "add"]);
# Route::post("/add_time", [StaffTimeController::class, "add_time"]);

//Route::get("/time_table", [StaffTimeController::class, "time_table"]);
Route::get("/add_shift", [CreateShiftController::class, "shift_table"]);
<?php

use Illuminate\Http\Request;
use App\Http\Controllers\StaffTimeController;
//use App\Http\Controllers\staffController;
use App\Http\Controllers\CreateShiftController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/people", [staffController::class, "index"]);

Route::get("/add_time", [StaffTimeController::class, "upload"]);
Route::post("/add_time", [StaffTimeController::class, "add_time"]);
Route::get('/add_time/{user_id}/{status}', [StaffTimeController::class, 'add_time']);

Route::get('/add_shift/{user_id}/{date}/{time}', [CreateShiftController::class, 'add_shift']);
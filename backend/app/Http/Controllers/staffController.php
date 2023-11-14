<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class staffController extends Controller
{
    public function index(){
        $items = DB::select('select * from staffname');
        return $items;
    }
}

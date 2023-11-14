<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\add_shift;

class CreateShiftController extends Controller
{
    public function shift_table(Request $request) {
        $items = DB::select('select * from shifttable');
        return $items;
    }

    public function add_shift($user_id, $Date, $Time){
        add_shift::create([
            'number' =>$user_id ,
            'date' =>$Date ,
            'time' =>$Time,
        ]);
        return redirect('/time_table');
    }
}
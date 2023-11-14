<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\add_time;

class StaffTimeController extends Controller
{
    public function add(Request $request) {
        return view('welcome');
    }
    
    // public function add_time(Request $request) {
    //     $user = $request->input('name');
    //     $text= $request->input('text');
    //     $date = $request->input('date');
    //     $time = $request->input('time');
    //     $data = array(
    //         'name' => $user,
    //         'text' => $text,
    //         'date' => $date,
    //         'time' => $time,
    //     );
    //     add_time::create($data);

    //     return response()->json([
    //         "message" => "Time record created"
    //     ], 201);
    // }


    // public function add_time(Request $request) {
    //     $param = [
    //         'name' => $request->name,
    //         'text' => $request->text,
    //         'date' => $request->date,
    //         'time' => $request->time,
    //     ];
    //     DB::insert('insert into add_time(name, text, date, time) values(:name, :text, :date, :time)', $param);

    //     return redirect('/time_table');
    // }

    // public function add_time(Request $request) {
    //     $staffTime = new add_time;
    //     $staffTime->name = $request->name;
    //     $staffTime->text = $request->text;
    //     $staffTime->date = $request->date;
    //     $staffTime->time = $request->time;
    //     $staffTime->save(
    //     [
    //         'touch' => false
    //     ]
    // );
        //return redirect('/time_table');

    //     return response()->json([
    //         "message" => "Time record created"
    //     ], 201);
    // }

    // public function add_time(Request $request) {
    //     $name = $request->name;
    //     $text = $request->text;
    //     $date = $request->date;
    //     $time = $request->time;
    //     Add_time::create([
    //         'name' =>$name ,
    //         'text' =>$text ,
    //         'date' =>$date ,
    //         'time' =>$time,
    //     ]);
    //     return redirect('/time_table');
    // }

    public function add_time($user_id, $status){
        date_default_timezone_set('Asia/Tokyo');
        $Date = date('Y-m-d');
        $Time = date('H:i:s');
        Add_time::create([
            'name' =>$user_id ,
            'text' =>$status ,
            'date' =>$Date ,
            'time' =>$Time,
        ]);
        return redirect('/time_table');
    }

    public function time_table(Request $request) {
        $items = DB::select('select * from add_time');
        return $items;
    }

    // public function upload() {
    //     $items = DB::select('select * from staffname');
    //     return $items;
    // }
// }
}
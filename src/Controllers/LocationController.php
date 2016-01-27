<?php

namespace Solarcms\UserManager\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Solarcms\UserManager\UserManager;


class LocationController extends Controller {

    public function index() {
        return view('UserManager::index');
    }

    public function getAimag(){
        $data = DB::table('aimag')->get();
        return response()->json(['status' => true, 'data' => $data]);
    }

    public function getSum($id){
        $data = DB::table('sum')->where('aimagid', $id)->get();
        return response()->json(['status' => true, 'data' => $data]);
    }

    public function getBag($id, $sid){
        $data = DB::table('bag')->where('aimagid', $id)->where('sumid', $sid)->get();
        return response()->json(['status' => true, 'data' => $data]);
    }



}
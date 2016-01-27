<?php

namespace Solarcms\UserManager\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Solarcms\UserManager\UserManager;


class UserController extends Controller {

    public function index() {
        return view('UserManager::index');
    }

    public function getUsers(){
        $users = DB::table('users')->join('roles', 'users.role_id', '=', 'roles.id')->select('users.*', 'roles.role')->orderBy('id', 'desc')->get();
        return response()->json(['status' => true, 'data' => $users]);
    }

    public function store(Request $request){
        $data = $request->input('data');
        $r = DB::table('users')->insert([
            'role_id' => $data['type'],
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'aimag_id' => $data['aimag_id'],
            'sum_id' => $data['sum_id'],
            'bag_id' => $data['bag_id']
        ]);
        if($r){
            return response()->json(['status' => true]);
        }else{
            return response()->json(['status' => false]);
        }
    }

    public function send(){

    }

}
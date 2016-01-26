<?php

namespace Solarcms\UserManager\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Solarcms\UserManager\UserManager;

class UserController extends Controller {

    public function index() {
        return view('UserManager::index');
    }

    public function getUsers(){
        $users = DB::table('users')->join('roles', 'users.role_id', '=', 'roles.id')->select('users.*', 'roles.role')->get();
        return response()->json(['status' => true, 'data' => $users]);
    }

    public function register(){

    }

}
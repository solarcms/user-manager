<?php

namespace Solarcms\UserManager\Http\Controllers;

use App\Http\Controllers\Controller;
use Solarcms\UserManager\UserManager;

class UserController extends Controller
{
    public function index()
    {
        $solar = "Hello Solar";
        return view('UserManager::index', compact('solar'));
    }

}
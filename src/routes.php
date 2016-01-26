<?php

Route::group([
    'namespace' => 'Solarcms\UserManager\Controllers',
    'prefix' =>'solar/usermanager',
    'as' => 'Solar.UserManager::',
    'middleware' => 'auth'], function() {

    Route::get('/', [ 'as' => 'index', 'uses' => 'UserController@index']);

    Route::get('users', [ 'as' => 'users.get', 'uses' => 'UserController@getUsers']);

});
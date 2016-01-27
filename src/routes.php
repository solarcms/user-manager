<?php

Route::group([
    'namespace' => 'Solarcms\UserManager\Controllers',
    'prefix' =>'solar/usermanager',
    'as' => 'Solar.UserManager::',
    'middleware' => 'auth'], function() {

    Route::get('/', [ 'as' => 'index', 'uses' => 'UserController@index']);

    Route::get('users', [ 'as' => 'users.get', 'uses' => 'UserController@getUsers']);
    Route::post('user/store', ['as' => 'user.store', 'uses' => 'UserController@store']);

    //location
    Route::get('aimag', ['as' => 'location.aimag', 'uses' => 'LocationController@getAimag']);
    Route::get('sum/{id}', ['as' => 'location.sum', 'uses' => 'LocationController@getSum']);
    Route::get('bag/{id}/{sid}', ['as' => 'location.bag', 'uses' => 'LocationController@getBag']);
});
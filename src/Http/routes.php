<?php

Route::group([
    'namespace' => 'Solarcms\UserManager\Http\Controllers',
    'prefix' => 'solar/usermanager',
    'as' => 'Solar.usermanager::'], function () {

    Route::get('/', [
            'as' => 'users',
            'uses' => 'UserController@index']
    );
});
<?php

Route::group(['namespace' => 'Solarcms\UserManager\Controllers', 'prefix'=>'solar'], function() {
    Route::get('user', 'UserController@index');
});
<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
#Routes for FrontEnd
Route::get('/', "Frontend\DefaultController@index");

Auth::routes();


#Routes for Backend
Route::get('/dashboard', "Backend\DashboardController@index");

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

Route::prefix('ytc')->group(function() {
    Route::get('/{path?}', 'YTCController@index')->where('path', '(.*)')->name('ytc.index');
});

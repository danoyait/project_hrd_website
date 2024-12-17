<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () {
    return redirect('form-karyawan');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/form-karyawan', function () {
    return view('form-karyawan.index');
})->where('any', '.*')->name('form-karyawan');

Route::get('/form-karyawan/{any}', function () {
    return view('form-karyawan.index');
})->where('any', '.*');


Route::group(['namespace' => 'Admin', 'middleware' => 'admin', 'prefix' => '/admin'], function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    })->where('any', '.*')->name('admin.dashboard');

    Route::get('/users', function () {
        return view('admin.dashboard');
    })->where('any', '.*')->name('admin.users');

    Route::get('/karyawan', function () {
        return view('admin.dashboard');
    })->where('any', '.*')->name('admin.karyawan');

    Route::get('{any}', function () {
        return view('admin.dashboard');
    })->where('any', '.*');
});

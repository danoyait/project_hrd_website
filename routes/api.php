<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// routes/api.php

Route::get('/check-auth', [App\Http\Controllers\AuthController::class, 'checkAuthStatus']);


// admin
Route::group(['namespace' => 'Admin', 'prefix' => 'admin'], function () {
    // dashboard
    Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index']);

    // Roles
    Route::get('/roles', [App\Http\Controllers\Admin\RolesController::class, 'index']);
    Route::post('/roles/store', [App\Http\Controllers\Admin\RolesController::class, 'store']);
    Route::get('/roles/{id}/edit', [App\Http\Controllers\Admin\RolesController::class, 'edit']);
    Route::put('/roles/update/{id}', [App\Http\Controllers\Admin\RolesController::class, 'update']);
    Route::delete('/roles/destroy/{id}', [App\Http\Controllers\Admin\RolesController::class, 'destroy']);

    // Users
    Route::get('/users', [App\Http\Controllers\Admin\UsersController::class, 'index']);
    Route::post('/users/store', [App\Http\Controllers\Admin\UsersController::class, 'store']);
    Route::get('/users/{id}/edit', [App\Http\Controllers\Admin\UsersController::class, 'edit']);
    Route::put('/users/update/{id}', [App\Http\Controllers\Admin\UsersController::class, 'update']);
    Route::delete('/users/destroy/{id}', [App\Http\Controllers\Admin\UsersController::class, 'destroy']);

    // Karyawan
    Route::get('/karyawan', [App\Http\Controllers\Admin\c_Karyawan::class, 'index']);
    Route::post('/karyawan/simpan', [App\Http\Controllers\Admin\c_Karyawan::class, 'store']);
    Route::get('/karyawan/{id}/ubah', [App\Http\Controllers\Admin\c_Karyawan::class, 'edit']);
    Route::put('/karyawan/perbarui/{id}', [App\Http\Controllers\Admin\c_Karyawan::class, 'update']);
    Route::delete('/karyawan/hapus/{id}', [App\Http\Controllers\Admin\c_Karyawan::class, 'destroy']);
    Route::post('/karyawan/unggah_excel', [App\Http\Controllers\Admin\c_Karyawan::class, 'saveExcelUsers']);
    Route::get('/karyawan/unduh_excel', [App\Http\Controllers\Admin\c_Karyawan::class, 'exportExcelUsers']);
    Route::get('/karyawan/{id}/lihatBerkas', [App\Http\Controllers\Admin\c_Karyawan::class, 'showDetail']);
    Route::post('/karyawan/berkas/simpan', [App\Http\Controllers\Admin\c_Karyawan::class, 'storeData']);
    Route::delete('/karyawan/{id}/berkas/hapus', [App\Http\Controllers\Admin\c_Karyawan::class, 'hapusBerkas']);
    Route::get('/karyawan/totalAkhirKontrak', [App\Http\Controllers\Admin\c_Karyawan::class, 'totalAkhirKontrak']);
    Route::get('/karyawan/status', [App\Http\Controllers\Admin\c_Karyawan::class, 'getStatusKaryawan']);
    Route::get('/karyawan/jabatan', [App\Http\Controllers\Admin\c_Karyawan::class, 'getJabatan']);
    Route::get('/karyawan/departemen', [App\Http\Controllers\Admin\c_Karyawan::class, 'getDepartemen']);
    Route::get('/karyawan/pendidikan', [App\Http\Controllers\Admin\c_Karyawan::class, 'getPendidikan']);
    
    });

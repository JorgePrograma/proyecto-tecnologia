<?php

use App\Http\Controllers\CuentaController;
use App\Http\Controllers\UsuarioController;
use Illuminate\Support\Facades\Route;

Route::post('usuario', [UsuarioController::class, 'create']);
Route::get('usuarios', [UsuarioController::class, 'index']);
Route::put('update/{id}', [UsuarioController::class, 'update']);
Route::delete('usuario/{id}', [UsuarioController::class, 'delete']);
Route::post('cuenta', [CuentaController::class, 'create']);

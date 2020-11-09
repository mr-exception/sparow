<?php

use App\Http\Controllers\Api\Register\Plain;
use Illuminate\Support\Facades\Route;

Route::namespace('Api')->group(function () {
    Route::name('register.')->prefix('register')->namespace('Register')->group(function () {
        Route::post('/plain', [Plain::class, 'register'])->name('plain');
    });
});

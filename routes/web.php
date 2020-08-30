<?php

use Illuminate\Support\Facades\Route;

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
// route example
// GET / account (index)
// GET / account/create (create)
// GET / account/1 (show)
// POST / account (store)
// GET / account/1/edit (edit)
// PATCH / account/1 (update)
// DELETE / account/1 (destroy)

Auth::routes([
    'register' => false,
    'reset'    => false,
    'verify'   => false
]);

Route::get('/', function () {
    return redirect()->route('applicants.create');
});

// エントリーフォーム
Route::prefix('entry')->group(function () {
    Route::get('/', 'ApplicantsController@create')->name('applicants.create');
    Route::get('/confirm', 'ApplicantsController@confirm')->name('applicants.confirm');
});

Route::group(['middleware' => 'auth'], function () {
    // 応募者情報
    Route::prefix('applicants')->group(function () {
        Route::get('/', 'ApplicantsController@index')->name('applicants.index');
        Route::get('{applicant}', 'ApplicantsController@show')->name('applicants.show');
    });

    // アカウント
    Route::resource('accounts', 'AccountsController');
});

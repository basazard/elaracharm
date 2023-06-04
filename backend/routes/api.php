<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;
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

Route::get('users/', [UserController::class, 'login']);

Route::get('categories', [CategoryController::class, 'index']);
Route::get('categories/{category}', [CategoryController::class, 'show']);

Route::get('tags', [TagController::class, 'index']);
Route::get('tags/{tag}', [TagController::class, 'show']);

Route::get('products', [ProductController::class, 'index']);
Route::get('products/{product}', [ProductController::class, 'show']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('carts/', [CartController::class, 'index']);
    Route::get('carts/cart-count', [CartController::class, 'cartCount']);
    Route::post('carts/add-to-chart/{product}', [CartController::class, 'store']);
    Route::put('carts/edit-quantity/{cart}', [CartController::class, 'editQuantity']);
    Route::delete('carts/{cart}', [CartController::class, 'destroy']);

    Route::post('orders/create', [OrderController::class, 'store']);
});

Route::post('orders/notification-handler', [OrderController::class, 'notificationHandler']);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

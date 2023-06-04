<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $carts = Cart::whereBelongsTo($request->user())->get();

        return CartResource::collection($carts);
    }

    public function store(Request $request, Product $product)
    {
        $product->carts()->create([
            'user_id' => $request->user()->id,
            'quantity' => $request->quantity,
            'price' => $request->quantity * $product->price,
        ]);
    }

    public function editQuantity(Request $request, Cart $cart)
    {
        $cart->update([
            'quantity' => $request->quantity,
            'price' => $request->quantity * $cart->product->price,
        ]);
    }

    public function cartCount(Request $request)
    {
        $cartCount = Cart::whereBelongsTo($request->user())->count();

        return $cartCount;
    }

    public function destroy(Cart $cart)
    {
        return $cart->delete();
    }
}

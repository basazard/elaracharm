<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class OrderController extends Controller
{
    public function store()
    {
        $order = Auth::user()->orders()->create([
            'order_identifier' => 'order' . time(),
            'product_ids' => Auth::user()->carts->pluck('product_id'),
            'total' => Auth::user()->carts->sum('price')
        ]);

        $params = [
            'enabled_payments' => [
                "credit_card", "cimb_clicks",
                "bca_klikbca", "bca_klikpay", "bri_epay", "echannel", "permata_va",
                "bca_va", "bni_va", "bri_va", "other_va", "gopay", "indomaret",
                "danamon_online", "akulaku", "shopeepay", "kredivo", "uob_ezpay"
            ],
            'transaction_details' => [
                'order_id' => $order->order_identifier,
                'gross_amount' => $order->total,
            ],
            'customer_details' => Auth::user(),
            'expiry' => [
                'start_time' => now()->format("Y-m-d H:i:s T"),
                'unit' => 'days',
                'duration' => 1,
            ]
        ];

        $headers = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => 'Basic ' . base64_encode(config('payment.server_key')),
        ];

        $url = "https://app.sandbox.midtrans.com/snap/v1/transactions";
        $response = Http::withHeaders($headers)->post($url, $params);

        return $response;
    }

    public function notificationHandler(Request $request)
    {
        // SHA512(order_id . status_code . gross_amount . server_key)
        $signature = hash('sha512', $request->order_id . $request->status_code . $request->gross_amount . config('payment.server_key'));

        if ($signature !== $request->signature_key) {
            abort(403);
        }

        $order = Order::where('order_identifier', $request->order_id)->first();
        $user = User::find($order->user_id);

        foreach ($order->product_ids as $i) {
            $product = Product::find($i);
            $user->buy($product);
        }

        $order->delete();
        $user->carts()->delete();

        return;
    }
}

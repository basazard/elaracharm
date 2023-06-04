<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login()
    {
        if (Auth::attempt([
            'email' => 'bagas123ft@gmail.com',
            'password' => 'bagas123'
        ])) {
            $user = Auth::user();
            $token = $user->createToken('api-token')->plainTextToken;
    
            return response()->json(['token' => $token]);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }
}

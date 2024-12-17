<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Check if the user is authenticated.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkAuthStatus(Request $request)
    {
        if (Auth::check()) {
            // User is authenticated
            return response()->json(['authenticated' => true, 'role' => Auth::user()->roleRel->nama_role], 200);
        } else {
            // User is not authenticated
            return response()->json(['authenticated' => false], 401);
        }
    }
}

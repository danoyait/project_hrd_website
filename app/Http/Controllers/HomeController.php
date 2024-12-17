<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        // Check if the user is authenticated
        if (Auth::check()) {
            if ($request->wantsJson()) {
                // Return JSON response if the request expects JSON
                return response()->json([
                    'authenticated' => true,
                    'role' => Auth::user()->roleRel->nama_role
                ]);
            } else {
                // Redirect to /admin/dashboard 
                return redirect('/admin/dashboard');
            }
        } else {
            return response()->json([
                'authenticated' => false
            ]);
        }
    }
}

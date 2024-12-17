<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Pastikan pengguna terautentikasi
        if (Auth::check()) {
            // Pastikan pengguna memiliki relasi 'roleRel'
            if (Auth::user()->roleRel && Auth::user()->roleRel->nama_role == 'admin') {
                return $next($request);
            }
        }

        // Jika tidak terautentikasi atau tidak admin, redirect ke halaman /travel
        return redirect('/login');
    }
}

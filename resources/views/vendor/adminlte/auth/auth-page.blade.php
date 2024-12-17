@extends('adminlte::master')

@php( $dashboard_url = View::getSection('dashboard_url') ?? config('adminlte.dashboard_url', 'home') )

@if (config('adminlte.use_route_url', false))
    @php( $dashboard_url = $dashboard_url ? route($dashboard_url) : '' )
@else
    @php( $dashboard_url = $dashboard_url ? url($dashboard_url) : '' )
@endif

@section('adminlte_css')
    @stack('css')
    @yield('css')
    <style>
        /* Background */
        body {
            background: #e0f7fa; /* Soft teal background */
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            font-family: 'Roboto', sans-serif;
        }

        /* Login Box */
        .login-box {
            width: 100%;
            max-width: 400px;
            padding: 30px;
            background: #ffffff; /* White background for the card */
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
            border: 2px solid #007bff; /* Bright cyan border */
            border-top-width: 6px;
        }

        /* Header Box */
        .login-box::before {
            content: '';
            position: absolute;
            top: -50px;
            left: -50px;
            width: 250px;
            height: 250px;
            background: rgba(0, 188, 212, 0.15); /* Light cyan with transparency */
            border-radius: 50%;
            z-index: -1;
            transform: rotate(-30deg);
        }

        .login-box .card {
            border: none;
            border-radius: 12px;
            box-shadow: none;
        }

        .login-box .card-header {
            background: transparent; /* Transparent for the header */
            border-bottom: none;
            text-align: center;
            padding: 20px;
        }

        .login-box .card-title {
            font-size: 24px;
            font-weight: 600;
            color: #007bff; /* Bright cyan text */
            margin-bottom: 15px;
        }

        .login-box .card-body {
            padding: 20px;
            font-size: 16px;
            color: #444; /* Dark grey text */
        }

        .login-box .btn-primary {
            background: #007bff; /* Bright cyan for button */
            border: none;
            border-radius: 25px;
            padding: 14px 0;
            font-size: 16px;
            color: #ffffff; /* White text */
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.2s ease;
        }

        .login-box .btn-primary:hover {
            background: #007bff; /* Darker cyan for hover effect */
            transform: scale(1.05);
        }

        .login-box .text-center {
            margin-top: 20px;
        }

        .login-box .text-center a {
            color: #007bff; /* Bright cyan for links */
            font-weight: bold;
            text-decoration: none;
        }

        .login-box .text-center a:hover {
            text-decoration: underline;
        }

        /* Card Footer */
        .login-box .card-footer {
            background: transparent; /* Transparent background for footer */
            border-top: none;
            text-align: center;
            padding: 15px;
        }
    </style>
@stop

@section('classes_body'){{ ($auth_type ?? 'login') . '-page' }}@stop

@section('body')
    <div class="{{ $auth_type ?? 'login' }}-box">

        {{-- Card Box --}}
        <div class="card {{ config('adminlte.classes_auth_card', 'card-outline card-primary') }}">

            {{-- Card Header --}}
            @hasSection('auth_header')
                <div class="card-header {{ config('adminlte.classes_auth_header', '') }}">
                    <h3 class="card-title">
                        @yield('auth_header')
                    </h3>
                </div>
            @endif

            {{-- Card Body --}}
            <div class="card-body {{ $auth_type ?? 'login' }}-card-body {{ config('adminlte.classes_auth_body', '') }}">
                @yield('auth_body')
            </div>

            {{-- Card Footer --}}
            @hasSection('auth_footer')
                <div class="card-footer {{ config('adminlte.classes_auth_footer', '') }}">
                    @yield('auth_footer')
                </div>
            @endif

        </div>

    </div>
@stop

@section('adminlte_js')
    @stack('js')
    @yield('js')
@stop

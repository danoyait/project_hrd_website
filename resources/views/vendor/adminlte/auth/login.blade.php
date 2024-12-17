@extends('adminlte::auth.auth-page', ['auth_type' => 'login'])

@section('adminlte_css_pre')
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        /* General styling */
        body {
            background: linear-gradient(135deg, #2c3e50, #3498db); /* Smooth Blue Gradient */
            font-family: 'Poppins', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            color: #fff;
        }

        /* Login Box */
        .login-box {
            background: #ffffff;
            border-radius: 20px;  /* Further reduced border radius */
            padding: 20px 30px;  /* Even smaller padding */
            width: 280px;  /* Reduced width */
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            position: relative;
            z-index: 2;
            transition: all 0.3s ease;
        }

        .login-box:hover {
            transform: scale(1.02);
        }

        /* Header */
        .login-header {
            font-size: 1.8rem;  /* Smaller font size */
            font-weight: 700;
            text-align: center;
            color: #2980b9; /* Blue color */
            margin-bottom: 15px;  /* Reduced margin */
            text-transform: uppercase;
            letter-spacing: 1.2px;  /* Slightly reduced letter-spacing */
        }

        /* Input fields */
        .form-control {
            background-color: #f9fafb;
            border-radius: 12px;  /* Even smaller border radius */
            padding: 8px 12px;  /* Reduced padding */
            font-size: 0.9rem;  /* Smaller font size */
            border: 1px solid #ddd;
            margin-bottom: 12px;  /* Reduced margin */
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .form-control:focus {
            outline: none;
            background-color: #ffffff;
            border-color: #2980b9; /* Blue border on focus */
            box-shadow: 0 4px 8px rgba(41, 128, 185, 0.3);
        }

        /* Icon inside input */
        .input-group-text {
            background-color: #f0f0f0;
            border: none;
            color: #2980b9; /* Blue icon */
            font-size: 1.2rem;  /* Slightly smaller font size */
            border-radius: 10px;  /* Smaller border radius */
        }

        /* Login Button */
        .btn-login {
            background-color: #2980b9; /* Darker Blue */
            color: white;
            width: 100%;
            padding: 10px;  /* Reduced padding */
            border-radius: 20px;  /* Smaller border radius */
            font-size: 1rem;  /* Smaller font size */
            font-weight: 600;
            text-transform: uppercase;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn-login:hover {
            background-color: #3498db; /* Lighter Blue on hover */
            box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
            transform: translateY(-3px);
        }

        .btn-login:focus {
            box-shadow: 0 0 0 0.2rem rgba(41, 128, 185, 0.5);
        }

        /* Footer */
        .login-footer {
            text-align: center;
            font-size: 0.8rem;  /* Even smaller footer text */
            color: #95a5a6;
            margin-top: 15px;  /* Reduced margin */
        }

        .login-footer a {
            color: #2980b9; /* Footer link in blue */
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .login-footer a:hover {
            text-decoration: underline;
        }

        /* Adjust footer to be always at the bottom */
        .login-page {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            min-height: 100vh;
        }
    </style>
@stop

@php( $login_url = View::getSection('login_url') ?? config('adminlte.login_url', 'login') )

@if (config('adminlte.use_route_url', false))
    @php( $login_url = $login_url ? route($login_url) : '' )
@else
    @php( $login_url = $login_url ? url($login_url) : '' )
@endif

@section('auth_header')
    <div class="login-header">{{ __('Selamat Datang') }}</div>
@stop

@section('auth_body')
    <form action="{{ $login_url }}" method="post">
        @csrf

        {{-- Email Field --}}
        <div class="input-group mb-3">
            <input type="email" name="email" class="form-control @error('email') is-invalid @enderror"
                   value="{{ old('email') }}" placeholder="Email" autofocus>
            <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>  <!-- Font Awesome icon added back -->
            </div>
            @error('email')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>

        {{-- Password Field --}}
        <div class="input-group mb-3">
            <input type="password" name="password" class="form-control @error('password') is-invalid @enderror"
                   placeholder="Password" id="passwordField">
            <div class="input-group-append">
                <span class="input-group-text" onclick="togglePasswordVisibility()">
                    <i id="passwordIcon" class="fas fa-eye"></i>
                </span>
            </div>
            @error('password')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>

        {{-- Login Button --}}
        <button type="submit" class="btn-login">
            <i class="fas fa-sign-in-alt"></i> 
        </button>
    </form>

    <div class="login-footer">
        <p>© <?php echo date('Y'); ?> <a href="https://www.danoya.com/">Danoya Villa</a>.</p>
    </div>
@stop

@section('adminlte_js')
    <script>
        function togglePasswordVisibility() {
            var passwordField = document.getElementById('passwordField');
            var passwordIcon = document.getElementById('passwordIcon');
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                passwordIcon.classList.remove('fa-eye');
                passwordIcon.classList.add('fa-eye-slash');
            } else {
                passwordField.type = 'password';
                passwordIcon.classList.remove('fa-eye-slash');
                passwordIcon.classList.add('fa-eye');
            }
        }
    </script>
@stop

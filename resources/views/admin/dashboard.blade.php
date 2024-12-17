@extends('adminlte::page')

@section('title', '.:: ADMIN ::.')

@section('content_header')

@stop

@section('content')

    <div id="app"></div>
@stop

@section('css')
   {{--  <link rel="stylesheet" href="/css/admin_custom.css"> --}}
    <!-- summernote css -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-lite.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.min.css">
    @stop

@section('js')
    <script src="{{ mix('js/app.js') }}"></script>
    <script>
        console.log('Hi!');
    </script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- Summernote JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.18/summernote-lite.min.js"></script>
    <script src="https://unpkg.com/vue-form-wizard/dist/vue-form-wizard.js"></script>
    @stop

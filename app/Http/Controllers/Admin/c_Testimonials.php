<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_Testimonials;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class c_Testimonials extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = m_Testimonials::get();

        return response()->json([
            'testimonials' => $data,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'      => 'required',
            'message'    => 'required',
        ]);

        m_Testimonials::create([
            'name'     => $request->name,
            'message'  => $request->message,
        ]);

        $msg = [
            'success'      => true,
            'message'      => 'Data created successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin\m_Testimonials  $m_Testimonials
     * @return \Illuminate\Http\Response
     */
    public function show(m_Testimonials $m_Testimonials)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\m_Testimonials  $m_Testimonials
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin\m_Testimonials  $m_Testimonials
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin\m_Testimonials  $m_Testimonials
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_Home_Content;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class c_Home_Content extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = m_Home_Content::get();

        return response()->json([
            'dataHomeContent' => $data,
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
            'title'    => 'required',
        ]);

        m_Home_Content::create([
            'title'          => $request->title,
            'description'    => $request->description,
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
     * @param  \App\Models\Admin\m_Home_Content  $m_Home_Content
     * @return \Illuminate\Http\Response
     */
    public function show(m_Home_Content $m_Home_Content)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\m_Home_Content  $m_Home_Content
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = m_Home_Content::where('id_home_content', $id)->first();

        return $data;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin\m_Home_Content  $m_Home_Content
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title'    => 'required',
        ]);

        m_Home_Content::where('id_home_content', $id)->update([
            'title'            => $request->title,
            'description'      => $request->description,
        ]);

        $msg = [
            'success'      => true,
            'message'      => 'Data updated successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin\m_Home_Content  $m_Home_Content
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = m_Home_Content::where('id_home_content', $id)->delete();
        return $data;
    }
}

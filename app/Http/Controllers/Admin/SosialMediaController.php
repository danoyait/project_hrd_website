<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_SosialMedia;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class SosialMediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $role = m_SosialMedia::orderBy('created_at', 'desc')->get();

        return response()->json([
            'sosialmedia' => $role,
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
       
        m_SosialMedia::create([
            'nama_sosial_media'    => $request->nama_sosial_media,
            'link_sosial_media'    => $request->link_sosial_media,
            'created_at'   => date('Y-m-d H:i:s'),
            'updated_at'   => date('Y-m-d H:i:s'),
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
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function show(RolesModel $rolesModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $editRoles = m_SosialMedia::where('id_sosial_media', $id)->first();

        return $editRoles;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'nama_sosial_media'    => 'required',
        ]);

        m_SosialMedia::where('id_sosial_media', $id)->update([
            'nama_sosial_media'    => $request->nama_sosial_media,
            'link_sosial_media'    => $request->link_sosial_media,
            'updated_at'   => date('Y-m-d H:i:s'),
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
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = m_SosialMedia::where('id_sosial_media', $id)->delete();

        return $delete;
    }
}

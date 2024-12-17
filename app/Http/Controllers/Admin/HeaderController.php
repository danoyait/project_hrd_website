<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_Header;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class HeaderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $role = m_Header::orderBy('created_at', 'desc')->get();

        return response()->json([
            'headers' => $role,
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
       
        m_Header::create([
            'nama_header'    => $request->nama_header,
            'icon_header'    => $request->icon_header,
            'link_url'    => $request->link_url,
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
        $editRoles = m_Header::where('id_header', $id)->first();

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
            'nama_header'    => 'required',
        ]);

        m_Header::where('id_header', $id)->update([
            'nama_header'    => $request->nama_header,
            'icon_header'    => $request->icon_header,
            'link_url'    => $request->link_url,
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
        $delete = m_Header::where('id_header', $id)->delete();

        return $delete;
    }
}

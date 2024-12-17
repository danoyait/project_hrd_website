<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_JadwalUsaha;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class JadwalUsahaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $role = m_JadwalUsaha::orderBy('created_at', 'asc')->get();

        return response()->json([
            'jadwalusaha' => $role,
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
       
        m_JadwalUsaha::create([
            'hari'    => $request->hari,
            'dari_jam'    => $request->dari_jam,
            'sampai_jam'    => $request->sampai_jam,
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
        $editRoles = m_JadwalUsaha::where('id_jadwal_usaha', $id)->first();

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
            'hari'    => 'required',
        ]);

        m_JadwalUsaha::where('id_jadwal_usaha', $id)->update([
            'hari'    => $request->hari,
            'dari_jam'    => $request->dari_jam,
            'sampai_jam'    => $request->sampai_jam,
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
        $delete = m_JadwalUsaha::where('id_jadwal_usaha', $id)->delete();

        return $delete;
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\RestoranModel;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class RestoranController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $restoran = RestoranModel::orderBy('restoran.created_at', 'desc')->get();

        return response()->json([
            'restoran'     => $restoran,
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
        RestoranModel::create([
            'id_restoran'       => Uuid::uuid4(),
            'nama_restoran'     => $request->nama_restoran,
            'alamat_restoran'   => $request->alamat_restoran,
            'notelp_restoran'   => $request->notelp_restoran,
            'created_at'        => date('Y-m-d H:i:s'),
            'updated_at'        => date('Y-m-d H:i:s'),
        ]);


        $msg = [
            'success' => true,
            'message' => 'Restoran created successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin\RestoranModel  $restoranModel
     * @return \Illuminate\Http\Response
     */
    public function show(RestoranModel $restoranModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\RestoranModel  $restoranModel
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit = RestoranModel::where('restoran.id_restoran', $id)->first();
        return $edit;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin\RestoranModel  $restoranModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        RestoranModel::where('id_restoran', $id)->update([
            'nama_restoran'     => $request->nama_restoran,
            'alamat_restoran'   => $request->alamat_restoran,
            'notelp_restoran'   => $request->notelp_restoran,
            'updated_at'               => date('Y-m-d H:i:s'),
        ]);

        $msg = [
            'success' => true,
            'message' => 'Restoran updated successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin\RestoranModel  $restoranModel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        RestoranModel::where('id_restoran', $id)->delete();

        $msg = [
            'success' => true,
            'message' => 'Restoran deleted successfully!'
        ];

        return response()->json($msg);
    }
}

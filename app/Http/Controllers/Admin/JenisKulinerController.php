<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\JenisKulinerModel;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class JenisKulinerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $jeniskuliner = JenisKulinerModel::orderBy('jeniskuliner.created_at', 'desc')->get();

        return response()->json([
            'jeniskuliner'     => $jeniskuliner,
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
        JenisKulinerModel::create([
            'id_jeniskuliner'       => Uuid::uuid4(),
            'nama_jeniskuliner'     => $request->nama_jeniskuliner,
            'created_at'            => date('Y-m-d H:i:s'),
            'updated_at'            => date('Y-m-d H:i:s'),
        ]);


        $msg = [
            'success' => true,
            'message' => 'Jenis Kuliner created successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin\JenisKulinerModel  $jenisKulinerModel
     * @return \Illuminate\Http\Response
     */
    public function show(JenisKulinerModel $jenisKulinerModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\JenisKulinerModel  $jenisKulinerModel
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit = JenisKulinerModel::where('jeniskuliner.id_jeniskuliner', $id)->first();
        return $edit;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin\JenisKulinerModel  $jenisKulinerModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        JenisKulinerModel::where('id_jeniskuliner', $id)->update([
            'nama_jeniskuliner'        => $request->nama_jeniskuliner,
            'updated_at'               => date('Y-m-d H:i:s'),
        ]);

        $msg = [
            'success' => true,
            'message' => 'Jenis Kuliner updated successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin\JenisKulinerModel  $jenisKulinerModel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        JenisKulinerModel::where('id_jeniskuliner', $id)->delete();

        $msg = [
            'success' => true,
            'message' => 'Jenis Kuliner deleted successfully!'
        ];

        return response()->json($msg);
    }
}

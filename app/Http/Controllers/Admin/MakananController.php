<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\MakananModel;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class MakananController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $makanan = MakananModel::join('jeniskuliner', 'makanan.jeniskuliner_id', '=', 'jeniskuliner.id_jeniskuliner')
            ->join('restoran', 'makanan.restoran_id', '=', 'restoran.id_restoran')
            ->orderBy('restoran.created_at', 'desc')->get();

        return response()->json([
            'makanan'     => $makanan,
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
        MakananModel::create([
            'id_makanan'            => Uuid::uuid4(),
            'nama_makanan'          => $request->nama_makanan,
            'harga_makanan'         => $request->harga_makanan,
            'jeniskuliner_id'       => $request->jeniskuliner_id,
            'restoran_id'           => $request->restoran_id,
            'created_at'            => date('Y-m-d H:i:s'),
            'updated_at'            => date('Y-m-d H:i:s'),
        ]);

        $msg = [
            'success' => true,
            'message' => 'Makanan created successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin\MakananModel  $makananModel
     * @return \Illuminate\Http\Response
     */
    public function show(MakananModel $makananModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\MakananModel  $makananModel
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $edit = MakananModel::join('jeniskuliner', 'makanan.jeniskuliner_id', '=', 'jeniskuliner.id_jeniskuliner')
            ->join('restoran', 'makanan.restoran_id', '=', 'restoran.id_restoran')
            ->where('makanan.id_makanan', $id)->first();
        return $edit;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin\MakananModel  $makananModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        MakananModel::where('id_makanan', $id)->update([
            'nama_makanan'          => $request->nama_makanan,
            'harga_makanan'         => $request->harga_makanan,
            'jeniskuliner_id'       => $request->jeniskuliner_id,
            'restoran_id'           => $request->restoran_id,
            'updated_at'            => date('Y-m-d H:i:s'),
        ]);

        $msg = [
            'success' => true,
            'message' => 'Makanan updated successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin\MakananModel  $makananModel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        MakananModel::where('id_makanan', $id)->delete();

        $msg = [
            'success' => true,
            'message' => 'Makanan deleted successfully!'
        ];

        return response()->json($msg);
    }
}

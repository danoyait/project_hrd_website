<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_DetailProdukDitawarkan;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;

class ProdukDitawarkanDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function makeDirectory($createUuid, $mode = 0777, $recursive = false, $force = false)
    {
        $path = public_path() . '/images/produk/' . $createUuid;
        File::makeDirectory($path, $mode = 0777, true, true);
    }

    public function decodePhoto($gambar, $postId)
    {

        $uniqImage = uniqid() . "_" . date('YmdHis');

        if (preg_match("/png;base64/i", $gambar)) {
            $image     = $gambar;
            $image     = str_replace('data:image/png;base64,', '', $image);
            $image     = str_replace(' ', '+', $image);
            $imageName =  'photo_' . $uniqImage . "." . 'png';
        } else if (preg_match("/jpg;base64/i", $gambar)) {
            $image     = $gambar;
            $image     = str_replace('data:image/jpg;base64,', '', $image);
            $image     = str_replace(' ', '+', $image);
            $imageName =  'photo_' . $uniqImage . "." . 'jpg';
        } else if (preg_match("/jpeg;base64/i", $gambar)) {
            $image     = $gambar;
            $image     = str_replace('data:image/jpeg;base64,', '', $image);
            $image     = str_replace(' ', '+', $image);
            $imageName = 'photo_' . $uniqImage . "." . 'jpeg';
        }
        File::put(public_path('images/produk/' . $postId . '/' . $imageName), base64_decode($image));

        return $imageName;
    }

    public function decodePhotoCrops($gambar, $postId)
    {

        $uniqImage = uniqid() . "_" . date('YmdHis');

        if (preg_match("/png;base64/i", $gambar)) {
            $image     = $gambar;
            $image     = str_replace('data:image/png;base64,', '', $image);
            $image     = str_replace(' ', '+', $image);
            $imageName =  'photo_crop_' . $uniqImage . "." . 'png';
        } else if (preg_match("/jpg;base64/i", $gambar)) {
            $image     = $gambar;
            $image     = str_replace('data:image/jpg;base64,', '', $image);
            $image     = str_replace(' ', '+', $image);
            $imageName =  'photo_crop_' . $uniqImage . "." . 'jpg';
        } else if (preg_match("/jpeg;base64/i", $gambar)) {
            $image     = $gambar;
            $image     = str_replace('data:image/jpeg;base64,', '', $image);
            $image     = str_replace(' ', '+', $image);
            $imageName = 'photo_crop_' . $uniqImage . "." . 'jpeg';
        }
        File::put(public_path('images/produk/' . $postId . '/' . $imageName), base64_decode($image));

        return $imageName;
    }

    public function index()
    {
        $index = \DB::table('produk_ditawarkan')
        ->leftJoin('detail_produk_ditawarkan', 'produk_ditawarkan.id_produk', '=', 'detail_produk_ditawarkan.produk_id')
        ->orderBy('produk_ditawarkan.created_at', 'desc')
        ->select('produk_ditawarkan.*', 'detail_produk_ditawarkan.*')
        ->get();

    return response()->json([
        'produkditawarkandetail' => $index,
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

        // Validasi input
    $data = $request->validate([
        'produkditawarkans' => 'required|array',
        'produkditawarkans.*.durasi_waktu' => 'required|string',
        'produkditawarkans.*.harga' => 'required|numeric',
        'produkditawarkans.*.produk_id' => 'required|uuid',
    ]);

    // Iterasi melalui setiap produk dan simpan ke database
    foreach ($data['produkditawarkans'] as $produk) {
        m_DetailProdukDitawarkan::create([
            'id' => Uuid::uuid4()->toString(),
            'durasi_waktu' => $produk['durasi_waktu'],
            'harga' => $produk['harga'],
            'produk_id' => $produk['produk_id'],
        ]);
    }

    // Response success message
    $msg = [
        'success' => true,
        'message' => 'Data created successfully!',
    ];

    return response()->json($msg);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $editRoles = m_DetailProdukDitawarkan::join('produk_ditawarkan', 'detail_produk_ditawarkan.produk_id', '=', 'produk_ditawarkan.id_produk')
        ->where('produk_id', $id)
        ->get();

        return $editRoles;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $editRoles = m_DetailProdukDitawarkan::join('produk_ditawarkan', 'detail_produk_ditawarkan.produk_id', '=', 'produk_ditawarkan.id_produk')
        ->where('id_detail_produk_ditawarkan', $id)
        ->first();

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
            'durasi_waktu'    => 'required',
        ]);

   
       
            m_DetailProdukDitawarkan::where('id_detail_produk_ditawarkan', $id)->update([
                'durasi_waktu'    => $request->durasi_waktu,
                'harga'    => $request->harga,
                'produk_id'    => $request->produk_id,
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
        $delete = m_DetailProdukDitawarkan::where('id_detail_produk_ditawarkan', $id)->delete();

        return $delete;
    }

    public function review(Request $request)
    {
      
        DB::table('testimoni')->insert([
            'nama_pengunjung_salon' => $request->nama_pengunjung_salon,
            'testimoni_yangdirasakan' => $request->testimoni_yangdirasakan,
            'rating_bintang'        => $request->rating_bintang,
            'email'        => $request->email,
            // tambahkan kolom lain sesuai kebutuhan
        ]);

        $msg = [
            'success'      => true,
            'message'      => 'Data created successfully!'
        ];

        return response()->json($msg);
    }

    public function showreview()
    {
        // Mengambil data dari database menggunakan Facades DB
        $testimoni = DB::table('testimoni')->get();

        return response()->json([
            'testimoni' => $testimoni,
        ]);
    }
}

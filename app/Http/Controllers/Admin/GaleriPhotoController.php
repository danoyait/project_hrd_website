<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_GaleriPhoto;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\File;

class GaleriPhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function makeDirectory($createUuid, $mode = 0777, $recursive = false, $force = false)
    {
        $path = public_path() . '/images/galeriphoto/' . $createUuid;
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
        File::put(public_path('images/galeriphoto/' . $postId . '/' . $imageName), base64_decode($image));

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
        File::put(public_path('images/galeriphoto/' . $postId . '/' . $imageName), base64_decode($image));

        return $imageName;
    }

    public function index()
    {
        $data = m_GaleriPhoto::orderBy('created_at', 'desc')->get();

        return response()->json([
            'galeri' => $data,
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

        $id = Uuid::uuid4();

     
            $this->makeDirectory($id);
            m_GaleriPhoto::create([
                'id_galeryphoto' => $id,
                'photo'             => $this->decodePhoto($request->photo, $id),
                'photo_crop'        => $this->decodePhotoCrops($request->img, $id),
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
        $editRoles = m_GaleriPhoto::where('id_galeryphoto', $id)->first();

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
            'photo'    => 'required',
        ]);

        
        $post = m_GaleriPhoto::where('id_galeryphoto', $id)->first();

        $path = public_path() . '/images/galeriphoto/' . $post->id_galeryphoto;

   
            if (!File::exists($path)) {
                $this->makeDirectory($post->id_galeryphoto);
            }

            File::delete(public_path('images/galeriphoto/' . $post->id_galeryphoto . '/' . $post->photo));
            File::delete(public_path('images/galeriphoto/' . $post->id_galeryphoto . '/' . $post->photo_crop));

            $filePhoto      =  $this->decodePhoto($request->photo, $post->id_galeryphoto);
            $filePhotoCrops =  $this->decodePhotoCrops($request->photo_crop, $post->id_galeryphoto);
       
            m_GaleriPhoto::where('id_galeryphoto', $id)->update([
                'photo'             => $filePhoto,
                'photo_crop'        => $filePhotoCrops,
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
        $delete = m_GaleriPhoto::where('id_galeryphoto', $id)->delete();

        $image_path = public_path("images/galeriphoto/" . $id);  //path gambar
        File::deleteDirectory($image_path);

        return $delete;
    }
}

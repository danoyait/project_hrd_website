<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_Galery_Photo_Travel;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\File;

class c_GaleryPhotoTravel extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function makeDirectory($createUuid, $mode = 0777, $recursive = false, $force = false)
    {
        $path = public_path() . '/images/galery_photo_travel/' . $createUuid;
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
        File::put(public_path('images/galery_photo_travel/' . $postId . '/' . $imageName), base64_decode($image));

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
        File::put(public_path('images/galery_photo_travel/' . $postId . '/' . $imageName), base64_decode($image));

        return $imageName;
    }

    public function index()
    {
        $data = m_Galery_Photo_Travel::get();

        return response()->json([
            'galeryphototravel' => $data,
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

        $request->validate([
            'photo_travel'    => 'required',
        ]);

        if (strlen($request->photo_travel) > 0) {
            $this->makeDirectory($id);
            m_Galery_Photo_Travel::create([
                'id_photo_travel'       => $id,
                'photo_travel'          => $this->decodePhoto($request->photo_travel, $id),
                'photo_crop_travel'     => $this->decodePhotoCrops($request->img, $id),
                'created_at'            => date('Y-m-d H:i:s'),
                'updated_at'            => date('Y-m-d H:i:s'),
            ]);
        } 
    
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
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $delete = m_Galery_Photo_Travel::where('id_photo_travel', $id)->delete();
        $image_path = public_path("images/galery_photo_travel/" . $id);  //path pictures
        File::deleteDirectory($image_path);
        return $delete;
    }
}

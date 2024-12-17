<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_Package_Category;
use App\Models\Admin\m_Tour_Destination;
use App\Models\Admin\m_Package;
use App\Models\Admin\m_Show_Content_Highlight;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;

class c_Package extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function makeDirectory($createUuid, $mode = 0777, $recursive = false, $force = false)
    {
        $path = public_path() . '//images/package/' . $createUuid;
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
        File::put(public_path('/images/package/' . $postId . '/' . $imageName), base64_decode($image));

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
        File::put(public_path('/images/package/' . $postId . '/' . $imageName), base64_decode($image));

        return $imageName;
    }

    public function index()
    {
        $data = m_Package::leftJoin('package_category', 'package.category_package_id', '=', 'package_category.id_package_category')
        ->leftJoin('tour_destination', 'package.tour_destination_id', '=', 'tour_destination.id_tour_destination')
        ->leftJoin('show_content_highlight', 'package.show_content_highlight_package_id', '=', 'show_content_highlight.id_show_content_highlight')
        ->orderBy('package.created_at', 'asc')->get();

        $dataHighlight = DB::table('show_content_highlight')->get();

        $dataPackage = m_Package::leftJoin('package_category', 'package.category_package_id', '=', 'package_category.id_package_category')
        ->leftJoin('tour_destination', 'package.tour_destination_id', '=', 'tour_destination.id_tour_destination')
        ->leftJoin('show_content_highlight', 'package.show_content_highlight_package_id', '=', 'show_content_highlight.id_show_content_highlight')
        ->where('package.show_content_highlight_package_id', '7c1f6a87-4eaf-499b-bb49-7362d2877d94')
        ->limit(3)
        ->get();



        return response()->json([
            'data'          => $data,
            'dataHighlight' => $dataHighlight,
            'dataPackage'   => $dataPackage,
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
            'name_package'    => 'required',
            'category_package_id'    => 'required',
            'description_package'    => 'required',
            'tour_destination_id'    => 'required',
            'price'    => 'required',
            'show_content_highlight_package_id'    => 'required',
        ]);

        if (strlen($request->photo_package) > 0) {
            $this->makeDirectory($id);
            m_Package::create([
                'id_package' => $id,
                'name_package'    => $request->name_package,
                'category_package_id'    => $request->category_package_id,
                'description_package'    => $request->description_package,
                'tour_destination_id'    => $request->tour_destination_id,
                'price'    => $request->price,
                'photo_package'             => $this->decodePhoto($request->photo_package, $id),
                'photo_crop_package'        => $this->decodePhotoCrops($request->img, $id),
                'show_content_highlight_package_id'    => $request->show_content_highlight_package_id,
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s'),
            ]);
        } else {
            m_Package::create([
                'id_package' => $id,
                'name_package'    => $request->name_package,
                'category_package_id'    => $request->category_package_id,
                'price'    => $request->price,
                'tour_destination_id'    => $request->tour_destination_id,
                'description_package'    => $request->description_package,
                'show_content_highlight_package_id'    => $request->show_content_highlight_package_id,
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s'),
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
    public function show($id)
    {
        $data = m_Package::join('package_category', 'package.category_package_id', '=', 'package_category.id_package_category','left outer')
        ->join('tour_destination', 'package.tour_destination_id', '=', 'tour_destination.id_tour_destination', 'left outer')
        ->join('show_content_highlight', 'package.show_content_highlight_package_id', '=', 'show_content_highlight.id_show_content_highlight', 'left outer')
        ->orderBy('package.created_at', 'asc')
        ->where('package.tour_destination_id', $id)
        ->get();

        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = m_Package::where('id_package', $id)->first();

        return $data;
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
            'name_package'    => 'required',
            'category_package_id'    => 'required',
            'description_package'    => 'required',
            'price'    => 'required',
            'tour_destination_id'    => 'required',
            'show_content_highlight_package_id'    => 'required',
        ]);

        
        $post = m_Package::where('id_package', $id)->first();

        $path = public_path() . '//images/package/' . $post->id_package;

        if ($request->photo_package != $post->photo_package) {
            if (!File::exists($path)) {
                $this->makeDirectory($post->id_package);
            }

            File::delete(public_path('/images/package/' . $post->id_package . '/' . $post->photo_package));
            File::delete(public_path('/images/package/' . $post->id_package . '/' . $post->photo_crop_package));

            $filePhoto      =  $this->decodePhoto($request->photo_package, $post->id_package);
            $filePhotoCrops =  $this->decodePhotoCrops($request->photo_crop_package, $post->id_package);
       
            m_Package::where('id_package', $id)->update([
                'name_package'    => $request->name_package,
                'category_package_id'    => $request->category_package_id,
                'price'    => $request->price,
                'tour_destination_id'    => $request->tour_destination_id,
                'description_package'    => $request->description_package,
                'show_content_highlight_package_id'    => $request->show_content_highlight_package_id,
                'photo_package'             => $filePhoto,
                'photo_crop_package'        => $filePhotoCrops,
                'updated_at'   => date('Y-m-d H:i:s'),
            ]);
        } else {
            m_Package::where('id_package', $id)->update([
                'tour_destination_id'    => $request->tour_destination_id,
                'name_package'    => $request->name_package,
                'category_package_id'    => $request->category_package_id,
                'price'    => $request->price,
                'description_package'    => $request->description_package,
                'show_content_highlight_package_id'    => $request->show_content_highlight_package_id,
                'updated_at'   => date('Y-m-d H:i:s'),
            ]);
        }
        
        $msg = [
            'success'      => true,
            'message'      => 'Data updated successfully!'
        ];

        return response()->json($msg);
    }

    public function updateHighlits(Request $request, $id)
    {
        $request->validate([
            'show_content_highlight_package_id'    => 'required',
        ]);

        m_Package::where('id_package', $id)->update([
            'show_content_highlight_package_id'    => $request->show_content_highlight_package_id,
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
        $delete = m_Package::where('id_package', $id)->delete();

        $image_path = public_path("/images/package/" . $id);  //path gambar
        File::deleteDirectory($image_path);

        return $delete;
    }
}

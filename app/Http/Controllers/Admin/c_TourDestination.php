<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_Tour_Destination;
use App\Models\Admin\m_Package;
use App\Models\Admin\m_Show_Content_Highlight;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\File;

class c_TourDestination extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function makeDirectory($createUuid, $mode = 0777, $recursive = false, $force = false)
    {
        $path = public_path() . '/images/tour_destination/' . $createUuid;
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
        File::put(public_path('images/tour_destination/' . $postId . '/' . $imageName), base64_decode($image));

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
        File::put(public_path('images/tour_destination/' . $postId . '/' . $imageName), base64_decode($image));

        return $imageName;
    }

    public function index()
    {
        $data = m_Tour_Destination::join('show_content_highlight', 'tour_destination.show_content_highlight_tour_destination_id', '=', 'show_content_highlight.id_show_content_highlight')
        ->orderBy('created_at', 'asc')->get();

        $frontend = m_Tour_Destination::join('show_content_highlight', 'tour_destination.show_content_highlight_tour_destination_id', '=', 'show_content_highlight.id_show_content_highlight')
        ->orderBy('created_at', 'desc')
        ->limit(3)
        ->get();


        return response()->json([
            'data'     => $data,
            'frontend' => $frontend,
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
            'name_tour_destination'    => 'required',
            'description_tour_destination'    => 'required',
            'limit_persons'    => 'required',
            'what_to_brings'    => 'required',
            'photo_tour_destination'    => 'required',
            'includes_tour_destination'    => 'required',
            'show_content_highlight_tour_destination_id'    => 'required',
        ]);

        if (strlen($request->photo_tour_destination) > 0) {
            $this->makeDirectory($id);
            m_Tour_Destination::create([
                'id_tour_destination' => $id,
                'name_tour_destination'    => $request->name_tour_destination,
                'description_tour_destination'    => $request->description_tour_destination,
                'limit_persons'    => $request->limit_persons,
                'what_to_brings'    => $request->what_to_brings,
                'photo_tour_destination'             => $this->decodePhoto($request->photo_tour_destination, $id),
                'photo_crop_tour_destination'        => $this->decodePhotoCrops($request->img, $id),
                'includes_tour_destination'    => $request->includes_tour_destination,
                'show_content_highlight_tour_destination_id'    => $request->show_content_highlight_tour_destination_id,
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s'),
            ]);
        } else {
            m_Tour_Destination::create([
                'id_tour_destination' => $id,
                'name_tour_destination'    => $request->name_tour_destination,
                'description_tour_destination'    => $request->description_tour_destination,
                'what_to_brings'    => $request->what_to_brings,
                'limit_persons'    => $request->limit_persons,
                'includes_tour_destination'    => $request->includes_tour_destination,
                'show_content_highlight_tour_destination_id'    => $request->show_content_highlight_tour_destination_id,
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
        $data = m_Tour_Destination::where('id_tour_destination', $id)->first();

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
            'name_tour_destination'    => 'required',
            'description_tour_destination'    => 'required',
            'limit_persons'    => 'required',
            'what_to_brings'    => 'required',
            'photo_tour_destination'    => 'required',
            'includes_tour_destination'    => 'required',
            'show_content_highlight_tour_destination_id'    => 'required',
        ]);

        
        $post = m_Tour_Destination::where('id_tour_destination', $id)->first();

        $path = public_path() . '/images/tour_destination/' . $post->id_tour_destination;

        if ($request->photo_tour_destination != $post->photo_tour_destination) {
            if (!File::exists($path)) {
                $this->makeDirectory($post->id_tour_destination);
            }

            File::delete(public_path('images/tour_destination/' . $post->id_tour_destination . '/' . $post->photo_tour_destination));
            File::delete(public_path('images/tour_destination/' . $post->id_tour_destination . '/' . $post->photo_crop_tour_destination));

            $filePhoto      =  $this->decodePhoto($request->photo_tour_destination, $post->id_tour_destination);
            $filePhotoCrops =  $this->decodePhotoCrops($request->photo_crop_tour_destination, $post->id_tour_destination);
       
            m_Tour_Destination::where('id_tour_destination', $id)->update([
                'name_tour_destination'    => $request->name_tour_destination,
                'description_tour_destination'    => $request->description_tour_destination,
                'what_to_brings'    => $request->what_to_brings,
                'limit_persons'    => $request->limit_persons,
                'includes_tour_destination'    => $request->includes_tour_destination,
                'show_content_highlight_tour_destination_id'    => $request->show_content_highlight_tour_destination_id,
                'photo_tour_destination'             => $filePhoto,
                'photo_crop_tour_destination'        => $filePhotoCrops,
                'updated_at'   => date('Y-m-d H:i:s'),
            ]);
        } else {
            m_Tour_Destination::where('id_tour_destination', $id)->update([
                'name_tour_destination'    => $request->name_tour_destination,
                'description_tour_destination'    => $request->description_tour_destination,
                'what_to_brings'    => $request->what_to_brings,
                'limit_persons'    => $request->limit_persons,
                'includes_tour_destination'    => $request->includes_tour_destination,
                'show_content_highlight_tour_destination_id'    => $request->show_content_highlight_tour_destination_id,
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
            'show_content_highlight_tour_destination_id'    => 'required',
        ]);

        m_Tour_Destination::where('id_tour_destination', $id)->update([
            'show_content_highlight_tour_destination_id'    => $request->show_content_highlight_tour_destination_id,
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
        $delete = m_Tour_Destination::where('id_tour_destination', $id)->delete();
        $delete = m_Package::where('tour_destination_id', $id)->delete();

        $image_path = public_path("images/tour_destination/" . $id);  //path gambar
        File::deleteDirectory($image_path);

        return $delete;
    }
}

<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_HeaderVideo;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\File;

class HeaderVideoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $role = m_HeaderVideo::orderBy('created_at', 'desc')->get();

        return response()->json([
            'headervideos' => $role,
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
       
        $file = $request->file('file');
        $fileName = 'headervideo_' . time() . '.' . $file->getClientOriginalExtension();
        $file->move(public_path('/video/headervideo'), $fileName);

        m_HeaderVideo::create([
            'video' => $fileName,
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
        $video = m_HeaderVideo::findOrFail($id);
        return response()->json(['video' => $video]);
    }

    public function update(Request $request, $id)
    {
        $video = m_HeaderVideo::findOrFail($id);

        $request->validate([
            'video' => 'nullable|mimes:mp4|max:2048',
        ]);

        // Jika ada file baru, hapus file lama dan simpan file baru
        if ($request->hasFile('file')) {
            // Hapus file lama
            Storage::delete('/video/headervideo/' . $video->video);

            // Simpan file baru
            $file = $request->file('file');
            $fileName = 'headervideo_' . time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('/video/headervideo'), $fileName);

            $video->update([
                'video' => $fileName,
            ]);
        }

        return response()->json(['video' => $video]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin\RolesModel  $rolesModel
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Mencari data video berdasarkan id
        $video = m_HeaderVideo::find($id);
    
        // Memastikan video ditemukan
        if (!$video) {
            return response()->json(['message' => 'Video not found.'], 404);
        }
    
        // Path lengkap untuk video
        $videoPath = public_path('video/headervideo/' . $video->video);
    
        // Memastikan file video ada sebelum menghapus record dari database
        if (File::exists($videoPath)) {
            // Menghapus file video dari storage
            File::delete($videoPath);
        }
    
        // Menghapus record video dari database
        $delete = $video->delete();
    
        if ($delete) {
            return response()->json(['message' => 'Video deleted successfully.']);
        } else {
            return response()->json(['message' => 'Failed to delete video.'], 500);
        }
    }
}

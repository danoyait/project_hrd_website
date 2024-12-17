<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_Businesses;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Carbon;

class c_Businesses extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
            $data = m_Businesses::orderBy('created_at', 'desc')->get();

            $whatsapp = m_Businesses::select(['businesses.whatsapp_number'])
                                    ->get();

            $logo = m_Businesses::select(['businesses.business_name'])
                                    ->get();                           
            
            $maps = m_Businesses::select(['businesses.website_url'])
                                    ->get();                           

            return response()->json([
                'businesses' => $data,
                'whatsapp'   => $whatsapp,
                'logo'       => $logo,
                'maps'       => $maps,
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

            $request->validate([
                'business_name'   => 'required',
                'whatsapp_number' => 'required',
                'address'         => 'required',
            ]);

            $id_businesses  = Uuid::uuid4();

            m_Businesses::create([
                'id_businesses'    =>$id_businesses,
                'business_name'    => $request->business_name,
                'whatsapp_number'  => $request->whatsapp_number,
                'address'          => $request->address,
                'website_url'      => $request->website_url,
                'created_at'       => date('Y-m-d H:i:s'),
                'updated_at'       => date('Y-m-d H:i:s'),
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
            $data = m_Businesses::where('id_businesses', $id)->first();

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
                'business_name'   => 'required',
                'whatsapp_number' => 'required',
                'address'         => 'required',
            ]);

             m_Businesses::where('id_businesses', $id)->update([
                'business_name'   => $request->business_name,
                'whatsapp_number' => $request->whatsapp_number,
                'address'         => $request->address,
                'website_url'     => $request->website_url,
                'updated_at'      => date('Y-m-d H:i:s'),
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
            $data = m_Businesses::where('id_businesses', $id)->delete();
            return $data;
    }
}

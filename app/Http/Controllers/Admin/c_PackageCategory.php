<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\m_Package_Category;
use App\Models\Admin\m_Package;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class c_PackageCategory extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = m_Package_Category::get();

        return response()->json([
            'dataCategory' => $data,
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
            'name_package_category'    => 'required',
        ]);

        m_Package_Category::create([
            'id_package_category'      => Uuid::uuid4(),
            'name_package_category'    => $request->name_package_category,
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
     * @param  \App\Models\Admin\m_Package_Category  $m_Package_Category
     * @return \Illuminate\Http\Response
     */
    public function show(m_Package_Category $m_Package_Category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Admin\m_Package_Category  $m_Package_Category
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = m_Package_Category::where('id_package_category', $id)->first();

        return $data;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin\m_Package_Category  $m_Package_Category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name_package_category'    => 'required',
        ]);

        m_Package_Category::where('id_package_category', $id)->update([
            'name_package_category'    => $request->name_package_category,
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
     * @param  \App\Models\Admin\m_Package_Category  $m_Package_Category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = m_Package_Category::where('id_package_category', $id)->delete();
        $data = m_Package::where('category_package_id', $id)->delete();

        return $data;
    }
}

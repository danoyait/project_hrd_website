<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\File;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $users = User::join('roles', 'users.roles_id', '=', 'roles.id_role')
            ->orderBy('users.created_at', 'desc')->get();

        return response()->json([
            'users'     => $users,
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
            'roles_id'          => 'required',
            'email'             => 'required',
            'password'          => 'required',
            'blokir'            => 'required',
        ]);

        User::create([
            'id_user'           => Uuid::uuid4(),
            'roles_id'          => $request->roles_id,
            'email'             => $request->email,
            'password'          => Hash::make($request->password),
            'blokir'            => $request->blokir,
            'created_at'        => date('Y-m-d H:i:s'),
            'updated_at'        => date('Y-m-d H:i:s'),
        ]);


        $msg = [
            'success' => true,
            'message' => 'User created successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $edit = User::join('roles', 'users.roles_id', '=', 'roles.id_role')
            ->where('users.id_user', $id)->first();
        return $edit;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        User::where('id_user', $id)->update([
            'roles_id'          => $request->roles_id,
            'email'             => $request->email,
            'password'          => Hash::make($request->password),
            'blokir'            => $request->blokir,
            'updated_at'        => date('Y-m-d H:i:s'),
        ]);

        $msg = [
            'success' => true,
            'message' => 'User updated successfully!'
        ];

        return response()->json($msg);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {


        User::where('id_user', $id)->delete();

        $msg = [
            'success' => true,
            'message' => 'User deleted successfully!'
        ];

        return response()->json($msg);
    }
}

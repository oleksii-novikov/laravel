<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $users = User::all();

        return response()->json(['users' => $users]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
        ]);

        $user = User::create($request->all());
        return response()->json([
            'message' => "Success",
            'user' => $user
        ]);
    }

    public function update(User $user, Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
        ]);
        $user->fill($request->all())->save();

        return response()->json([
            'message' => "Success",
            'user' => $user
        ]);
    }
}

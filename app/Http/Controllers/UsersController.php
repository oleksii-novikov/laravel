<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUser;
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

    public function store(StoreUser $request)
    {
        try {
            $user = User::create($request->all());
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json([
                'message' => "Error",
                'name' => [$e->getMessage()]
            ], 400);
        }
        return response()->json([
            'message' => "Success",
            'user' => $user
        ]);
    }

    public function update(User $user, StoreUser $request)
    {
        $user->fill($request->all())->save();

        return response()->json([
            'message' => "Success",
            'user' => $user
        ]);
    }
}

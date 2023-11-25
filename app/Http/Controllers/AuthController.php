<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\BaseController as BaseController;
use App\Models\LogAuth;

class AuthController extends BaseController
{
    public function register(Request $request) {
        $fields = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed'
        ]);

        if($fields->fails()){
            return $this->sendError('Validation Error.', $fields->errors());
        }

        if (User::where('email', $request->email)->exists()) {
            return $this->sendError('User already register.', ['error'=>'Conflict']);
        }

        $user = User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => bcrypt($request['password'])
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return $this->sendResponse($response, 'User register successfully.');
    }

    public function login(Request $request) {
        $fields = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string'
        ]);

        if($fields->fails()){
            return $this->sendError('Validation Error.', $fields->errors());
        }

        $user = User::where('email', $request['email'])->first();

        if(!$user || !Hash::check($request['password'], $user->password)) {
            return response([
                'message' => 'You have entered an invalid username or password'
            ], 401);
        }

        $token = $user->createToken('myapptoken')->plainTextToken;

        $this->logAuth($user, "login");

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return $this->sendResponse($response, 'Login successfully.');
    }

    public function logout(Request $request)
    {
        $this->logAuth($request->user(), "logout");

        $request->user()->currentAccessToken()->delete();

        return $this->sendResponse(null, 'Logout successfully.');
    }

    public function logAuth($data, String $status)
    {
        LogAuth::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'status' => $status,
        ]);
    }
}

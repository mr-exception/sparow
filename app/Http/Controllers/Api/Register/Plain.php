<?php

namespace App\Http\Controllers\Api\Register;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Register\Plain as RegisterPlain;
use App\Models\User;

class Plain extends Controller
{
    public function register(RegisterPlain $request)
    {
        $user = new User;
        $user->fill($request->only(['username', 'password', 'phone', 'email', 'first_name', 'last_name']));
        $user->save();
        return $user;
    }
}

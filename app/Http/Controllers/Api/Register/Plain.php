<?php

namespace App\Http\Controllers\Api\Register;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Register\Plain as RegisterPlain;
use App\Http\Resources\Profile;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class Plain extends Controller
{
    public function register(RegisterPlain $request)
    {
        $user = new User;
        $user->fill($request->only(['username', 'password', 'phone', 'email', 'first_name', 'last_name']));
        if ($request->hasFile('avatar')) {
            $user->avatar = Storage::disk('arvan-s3')->put('/avatars', $request->file('avatar'));
        }
        $user->save();
        return Profile::make($user);
    }
}

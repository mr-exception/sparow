<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class Profile extends JsonResource
{
    public $collects = User::class;
    public $preserveKeys = true;
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'password' => $this->password,
            'email' => [
                'address' => $this->email,
                'verified' => $this->email_verified_at != 0,
                'verified_at' => $this->when($this->email_verified_at != 0, 'email_verified_at'),
            ],
            'phone' => [
                'number' => $this->phone,
                'verified' => $this->phone_verified_at != 0,
                'verified_at' => $this->when($this->phone_verified_at != 0, 'phone_verified_at'),
            ],
            'avatar' => $this->getAvatarPublicUrl(),
        ];
    }
}

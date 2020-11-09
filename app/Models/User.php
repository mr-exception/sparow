<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;

class User extends Authenticatable
{
    use HasFactory, Notifiable, Uuids;

    protected $fillable = [
        'username', 'email', 'phone', 'first_name', 'last_name', 'avatar', 'phone_verified_at', 'email_verified_at', 'last_login', 'status'
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
        'phone_verified_at' => 'datetime',
        'last_login' => 'datetime',
    ];

    public function getAvatarPublicUrl(): string
    {
        return (env('AWS_PATH') . '/' . $this->avatar);
    }
}

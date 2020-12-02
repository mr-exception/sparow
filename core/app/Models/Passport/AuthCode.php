<?php

namespace App\Models\Passport;

use App\Traits\Uuids;
use Laravel\Passport\AuthCode as AuthCodeModel;

class AuthCode extends AuthCodeModel
{
    use Uuids;
}

<?php

namespace App\Models\Passport;

use App\Traits\Uuids;
use Laravel\Passport\Token as TokenModel;

class Token extends TokenModel
{
    use Uuids;
}

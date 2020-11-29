<?php

namespace App\Models\Passport;

use App\Traits\Uuids;
use Laravel\Passport\PersonalAccessClient as PersonalAccessClientModel;

class PersonalAccessClient extends PersonalAccessClientModel
{
    use Uuids;
}

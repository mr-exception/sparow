<?php

namespace App\Models\Passport;

use App\Traits\Uuids;
use Laravel\Passport\Client as ClientModel;
use Laravel\Passport\Database\Factories\ClientFactory;

class Client extends ClientModel
{
    use  Uuids;
    /**
     * Create a new factory instance for the model.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public static function newFactory()
    {
        return ClientFactory::new();
    }
}

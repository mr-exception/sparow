<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\Client as PassportClient;

class Client extends PassportClient
{
    use HasFactory;

    //================================================ relationships =========================================================

    /**
     * Get the valid domains for the client.
     */
    public function valid_domains()
    {
        return $this->hasMany('App\Models\ValidDomain');
    }

    /**
     * Get the redirect urls for the client.
     */
    public function redirect_urls()
    {
        return $this->hasMany('App\Models\RedirectUrl');
    }

    //================================================ mutators =========================================================

    //================================================ scopes =========================================================
}

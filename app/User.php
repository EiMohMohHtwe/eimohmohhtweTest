<?php

namespace App;

use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'login_code', 'name', 'authority', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function store($request)
    {
        $user = $this->create([
            'login_code' => $request->login_code,
            'name'       => $request->name,
            'authority'  => $request->authority,
            'password'   => Hash::make($request->password),
        ]);

        return $user;
    }
}

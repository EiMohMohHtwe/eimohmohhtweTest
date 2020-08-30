<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name'           => $faker->lastName($max = 30),
        'login_code'     => $faker->lastName($max = 20),
        'authority'      => $faker->numberBetween($min = 1, $max = 2),
        'password'       => $faker->password($min = 8, $max = 20),
        'remember_token' => Str::random(10)
    ];
});

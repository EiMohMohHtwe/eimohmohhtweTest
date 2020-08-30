<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'       => 'admin',
            'login_code' => 'admin',
            'authority'  => 1,
            'password'   => bcrypt('admin@1192'),
            'created_at' => Carbon::now()
        ]);
    }
}

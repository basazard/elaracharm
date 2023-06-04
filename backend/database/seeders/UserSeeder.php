<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\User::factory()->create([
            'name' => 'Bagus Besar Bagaskara',
            'email' => 'bagas123ft@gmail.com',
            'password' => bcrypt('bagas123'),
        ]);

        User::factory(4)->create();
    }
}

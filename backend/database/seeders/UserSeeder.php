<?php

namespace Database\Seeders;

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
        ]);

        \App\Models\User::factory(10)->create();

        
    }
}

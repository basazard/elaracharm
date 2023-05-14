<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Top', 'slug' => str($name)->slug()],
            ['name' => $name = 'Pant', 'slug' => str($name)->slug()],
            ['name' => $name = 'Dress', 'slug' => str($name)->slug()],
            ['name' => $name = 'Outerwear', 'slug' => str($name)->slug()],
        ])->each(fn ($tag) => Tag::create($tag));
    }
}

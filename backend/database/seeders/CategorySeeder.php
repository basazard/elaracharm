<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            ['name' => $name = 'Clothing', 'slug' => str($name)->slug],
            ['name' => $name = 'Shoes', 'slug' => str($name)->slug],
            ['name' => $name = 'Bags', 'slug' => str($name)->slug],
            ['name' => $name = 'Accessories', 'slug' => str($name)->slug],
        ])->each(fn ($category) => Category::create($category));
    }
}

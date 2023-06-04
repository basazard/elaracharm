<?php

namespace Database\Seeders;

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
            ['category_id' => 1, 'name' => $name = 'Tops', 'slug' => str($name)->slug],
            ['category_id' => 1, 'name' => $name = 'Bottoms', 'slug' => str($name)->slug],
            ['category_id' => 1, 'name' => $name = 'Outerwear', 'slug' => str($name)->slug],
            ['category_id' => 1, 'name' => $name = 'Dresses', 'slug' => str($name)->slug],
            ['category_id' => 2, 'name' => $name = 'Flats', 'slug' => str($name)->slug],
            ['category_id' => 2, 'name' => $name = 'Heels', 'slug' => str($name)->slug],
            ['category_id' => 2, 'name' => $name = 'Loafers', 'slug' => str($name)->slug],
            ['category_id' => 2, 'name' => $name = 'Mules', 'slug' => str($name)->slug],
            ['category_id' => 2, 'name' => $name = 'Sandals', 'slug' => str($name)->slug],
            ['category_id' => 2, 'name' => $name = 'Sneakers', 'slug' => str($name)->slug],
            ['category_id' => 3, 'name' => $name = 'Big Bags', 'slug' => str($name)->slug],
            ['category_id' => 3, 'name' => $name = 'Small Bags', 'slug' => str($name)->slug],
            ['category_id' => 3, 'name' => $name = 'Clutches', 'slug' => str($name)->slug],
            ['category_id' => 3, 'name' => $name = 'Wallets', 'slug' => str($name)->slug],
            ['category_id' => 3, 'name' => $name = 'Backpacks', 'slug' => str($name)->slug],
            ['category_id' => 4, 'name' => $name = 'Jewelry', 'slug' => str($name)->slug],
            ['category_id' => 4, 'name' => $name = 'Necklaces', 'slug' => str($name)->slug],
            ['category_id' => 4, 'name' => $name = 'Earrings', 'slug' => str($name)->slug],
            ['category_id' => 4, 'name' => $name = 'Belts', 'slug' => str($name)->slug],
            ['category_id' => 4, 'name' => $name = 'Eyewear', 'slug' => str($name)->slug],
            ['category_id' => 4, 'name' => $name = 'Scarves', 'slug' => str($name)->slug],
            ['category_id' => 4, 'name' => $name = 'Hats', 'slug' => str($name)->slug],
            ['category_id' => 4, 'name' => $name = 'Watches', 'slug' => str($name)->slug],
            ['category_id' => 4, 'name' => $name = 'Hair Piece', 'slug' => str($name)->slug],
        ])->each(fn ($tag) => Tag::create($tag));
    }
}

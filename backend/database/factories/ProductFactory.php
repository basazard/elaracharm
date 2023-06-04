<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tag_id' => rand(1,24),
            'name' => $name = $this->faker->sentence(3),
            'slug' => str($name)->slug(),
            'price' => rand(10000, 90000),
            'description' => $this->faker->sentence(50),
        ];
    }
}

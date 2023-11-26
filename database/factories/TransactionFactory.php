<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'currency' => fake()->randomElement(['JPY','USD','SGD','EUR']),
            'buy' => fake()->randomNumber(5, false),
            'sell' => fake()->randomNumber(5, false),
        ];
    }
}

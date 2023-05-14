<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResouce extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'picture' => $this->picture,
            'price' => $this->price,
            'category' => [
                'id' => $this->id,
                'name' => $this->name,
                'slug' => $this->slug,
            ],
        ];
    }
}

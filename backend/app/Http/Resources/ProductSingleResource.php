<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductSingleResource extends JsonResource
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
            'picture' => $this->picture ? Storage::url($this->picture) : 'https://picsum.photos/400/600/',
            'price' => $this->price,
            'description' => $this->description,
            'tag' => [
                'id' => $this->tag->id,
                'name' => $this->tag->name,
                'slug' => $this->tag->slug,
            ],
        ];
    }
}

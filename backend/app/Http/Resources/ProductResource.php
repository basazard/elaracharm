<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
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
            'price' => $this->price,
            'picture' => $this->picture ? Storage::url($this->picture) : 'https://picsum.photos/400/600/',
            'tag' => [
                'id' => $this->tag->id,
                'name' => $this->tag->name,
                'slug' => $this->tag->slug,
            ],
            'category' => [
                'id' => $this->tag->category->id,
                'name' => $this->tag->category->name,
                'slug' => $this->tag->category->slug,
            ],
        ];
    }
}

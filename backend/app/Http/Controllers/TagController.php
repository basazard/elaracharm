<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\TagResource;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::query()
            ->select('id', 'name', 'slug', 'category_id')
            ->get();

        return TagResource::collection($tags);
    }

    public function show(Tag $tag)
    {
        $products = $tag->products()->paginate(8); 

        return ProductResource::collection($products);
    }
}

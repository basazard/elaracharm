<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductSingleResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::query()
            ->with('tag.category')
            ->select('id', 'name', 'slug', 'picture', 'price', 'tag_id')
            ->paginate(24);

        return ProductResource::collection($products);
    }

    public function show(Product $product)
    {
        return new ProductSingleResource($product);
    }
}

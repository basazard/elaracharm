<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResouce;
use App\Models\Product;
use App\Models\Tag;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::query()
            ->with('category')
            ->select('id', 'name', 'slug', 'picture', 'price', 'category_id')
            ->paginate(15);
        
        return ProductResouce::collection($products);
    }

    public function show(Product $product)
    {
        return $product;
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::query()
            ->select('id', 'name', 'slug')
            ->get();

        return CategoryResource::collection($categories);
    }

    public function show(Category $category)
    {
        $products = $category->products()->paginate(8);

        return ProductResource::collection($products);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function getRouteKeyName()
    {
        return 'slug';
    }
    
    public function tags()
    {
        return $this->hasMany(Tag::class);
    }

    public function products()
    {
        return $this->hasManyThrough(Product::class, Tag::class);
    }
}

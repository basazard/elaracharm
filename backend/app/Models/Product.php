<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function getRouteKeyName()
    {
        return 'slug';
    }
    
    public function tag()
    {
        return $this->belongsTo(Tag::class);
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function purchasedBy()
    {
        return $this->belongsToMany(User::class, 'purchased_products', 'product_id', 'user_id')->withTimestamps();
    }
}

<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller{

   public function show(Category $category){

      $posts = $category->posts()->published()->paginate();

      if(request()->wantsJson()){
         return $posts;
      }else{
         abort(404);
      }
   }
}

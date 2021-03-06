<?php

namespace App\Http\Controllers;

use App\Tag;
use Illuminate\Http\Request;

class TagsController extends Controller{

   public function show(Tag $tag){

      $posts = $tag->posts()->published()->paginate();

      if(request()->wantsJson()){
         return $posts;
      }else{
         abort(404);
      }
   }
}

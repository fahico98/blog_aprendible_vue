<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use App\Category;
use Illuminate\Http\Request;

class PagesController extends Controller{

   public function home(){

      $query = Post::published();

      if(request('month')){$query->whereMonth(request('month'));}

      if(request('year')){$query->whereYear(request('year'));}

      $posts = $query->paginate();

      return request()->wantsJson() ? $posts : "404";

      //return view('pages.home', compact('posts'));
   }

   public function about(){
      return view('pages.about');
   }

   public function archive(){

      $data = [
         'authors' => User::latest()->take(4)->get(),
         'categories' => Category::all(),
         'posts' => Post::latest('published_at')->take(5)->get(),
         'archive' => Post::selectRaw('year(published_at) as year')
            ->selectRaw('monthname(published_at) as month')
            ->selectRaw('count(*) posts')
            ->groupBy('year', 'month')
            ->orderBy('month')
            ->get()
      ];

      if(request()->wantsJson()){
         return $data;
      }else{
         abort(404);
      }
   }

   public function contact(){
      return view('pages.contact');
   }
}

<?php

Route::get("/posts", "PagesController@home");
Route::get("/blog/{post}", "PostsController@show");
Route::get("/category/{category}", "CategoriesController@show");
Route::get("/tag/{tag}", "TagsController@show");
Route::get("/archive", "PagesController@archive");

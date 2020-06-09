<?php

Route::get("/posts", "PagesController@home");
Route::get("/blog/{post}", "PostsController@show");
Route::get("/category/{category}", "CategoriesController@show");

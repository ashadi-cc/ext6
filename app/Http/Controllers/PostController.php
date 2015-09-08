<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Post;

class PostController extends Controller
{
    
    public function posting(Request $request)
    {
        $data = [
            'user' => $request->input('user'),
            'message' => $request->input('message'),
            'option' => $request->input('option')
        ];


        $rec = Post::create($data); 

        return $rec;


    }

    public function index()
    {
        $data = Post::select('*')
                ->orderBy('created_at','DESC')
                ->get();

        return [
            'success' => true,
            'data' => $data
        ];
    }
}

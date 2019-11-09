<?php

namespace Gkiokan\YTC\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Gkiokan\YTC\Models\Video;

class YTCController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return view('ytc::index');
    }


    public function latest(){
        $videos = Video::orderBy('id', 'DESC')->get();

        return response()->json([
            'videos'  => $videos,
        ]);
    }


}

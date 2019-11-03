<?php

namespace Gkiokan\YTC\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = ['video_id', 'found_at', 'expired_at'];

    public function user(){
        return $this->belongsTo(\App\User::class);
    }

}

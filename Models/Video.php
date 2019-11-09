<?php

namespace Gkiokan\YTC\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = ['user_id', 'video_id', 'url', 'expired_at'];

    public function user(){
        return $this->belongsTo(\App\User::class);
    }

}

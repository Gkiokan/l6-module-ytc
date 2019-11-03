<?php

namespace Gkiokan\YTC\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;

use Gkiokan\YTC\Models\Video;
use Carbon\Carbon;

class YouTubeController extends Controller
{

      // Class Variables
      public static $reset_url_when_video_not_found  = false;
      public static $attach_full_headers             = false;

      // setup
      public function __construct(){

      }

      // Check if image exists, just pure... magic..
      // we need to call this from server to server because js is not enough for this
      public function check_image_exists($video_id= ''){
          if(!$video_id) return;

          // prepare the url
          $url   = sprintf("https://img.youtube.com/vi/%s/maxresdefault.jpg", $video_id);
          $found = $this->is_404_easy($url);

          // for debug
          $full  = self::$attach_full_headers ? $this->is_404_easy($url, true) : [];

          // If not found, we will remove this
          if(!$found and self::$reset_url_when_video_not_found) $url = '';

          // validate video id in database
          $video = $this->save($video_id, $found);

          return response()->json([
              'found'     => $found,
              'video_id'  => $video_id,
              'thumbnail' => $url,
              'headers'   => $full,
              'video'     => $video,
            ]);
      }


      // file_get_contenst easy check version
      public function is_404_easy($url='', $full=false){
          $image   = @file_get_contents($url); // we have to mute the error to prevent error handler to run
          $headers = $http_response_header;

          if($full)
          return $headers;

          // first check if we have a 404
          if(stripos($headers[0], '404') !== false) return false; // deprecated

          // Then check for mime type
          // if(stripos($headers[2], 'image') === false) return false; // depcreated
          if( !self::find_correct_value_in_array($headers, 'image/') ) return false;

          // absolute check for the state
          return true;
      }


      // find correct file type
      public function find_correct_value_in_array(array $headers=[], $needle=""){
          if(is_array($headers))
          foreach($headers as $head)
            if( stripos($head, $needle) === false ) return true;

          return false;
      }


      // CURL check version
      public function is_404($url='') {
          if(!$url) return false;

          $handle = curl_init($url);
          curl_setopt($handle,  CURLOPT_RETURNTRANSFER, TRUE);

          /* Get the HTML or whatever is linked in $url. */
          $response = curl_exec($handle);

          /* Check for 404 (file not found). */
          $httpCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);
          curl_close($handle);

          return $httpCode;

          /* If the document has loaded successfully without any redirection or error */
          if ($httpCode >= 200 && $httpCode < 300) {
              return false;
          } else {
              return true;
          }
      }


      // Store the Video if not exists
      public function save($video_id=null, $found=null){
            // find the video
            $video = Video::where('video_id', $video_id)->with(['user'])->first();

            // video exists
            if($video):
                // video not avaible anymore
                if(!$found):
                    $video->found_at = new Carbon();
                endif;

                // video still exists
                if($found):
                    $video->updated_at = new Carbon();
                endif;

                $video->save();
            else:
                // Video even not exists, lets add the video
                if($found)
                $video = Video::create([ 'user_id' => 0, 'video_id' => $video_id, 'found_at' => new Carbon() ]);
            endif;

            return $video;
      }



}

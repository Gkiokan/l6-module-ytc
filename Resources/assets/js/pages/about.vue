<template>
    <div class='page'>

        <HeaderContainer :title="'About'"
                         :sub="$route.path"
                         _image="require('~/../images/bg/polygon_bright.jpg')"
                         :css="{ color: '#fff', minHeight: '800px' }"
                         :overlay="'blue2'" :opacity="1" :blur="0" />

         <v-container class="cv">
             <v-row>
                 <v-col>
                     <div class='avatar pull-right' :style="{ backgroundImage : 'url('+require('~/../images/yt.png')+')' }"></div>

                     <h1 class='display-3'> YouTube Thumbnail Catcher </h1>
                     <h2 class='font-weight-light headline grey--text darken-4'>Get your favorite Video Thumbnail from youtube.</h2>
                     <br>
                     <p>
                       This plattform is build upon the need of the beauty of some Thumbnails. <br>
                       You are able to see your favorite Video Thumbnail here or even download the HD edition of it directly.<br>
                       <br>
                       For later purposes are some functionality planed that will allow you to craete your own <br>
                       Playlist Gallery or even make your own YouTubeVideo Playlist and serve that as a player on your website.<br>
                       <br>
                       So, stay tuned. An simple koncept will follow in short time.<br>
                       <br>
                       Have fun with it.<br>
                       Gkiokan.
                       <br>
                       <br>
                     </p>
                 </v-col>
             </v-row>


             <!-- Loop though my works.... -->
             <h3 class='display-1 font-weight-light'> Examples </h3>
             <div class='entry' v-for="o in examples">
                 <v-row>
                     <v-col class="col-12 col-sm-4">
                         <div class="time">{{ o.id }}</div>
                     </v-col>
                     <v-col class="col-10 col-offset-1 col-sm-offset-0 col-sm-8">
                         <div class="font-weight-normal">{{ o.url }}</div>
                     </v-col>
                 </v-row>
             </div>
             <div class="split_100" />

         </v-container>


    </div>
</template>

<script>
export default {
    layout: 'full',
    middleware: 'guest',

    data(){ return {
        examples: [
            { id: 'EXMAPLE_ID', url: '//youtube.com/videp/EXAMPLE_ID' },
            { id: 'EXMAPLE_ID', url: '//youtube.com/videp/EXAMPLE_ID' },
            { id: 'EXMAPLE_ID', url: '//youtube.com/videp/EXAMPLE_ID' },
            { id: 'EXMAPLE_ID', url: '//youtube.com/videp/EXAMPLE_ID' },
        ]
    }},

    mounted(){
        // console.log(this)
    }
}
</script>

<style lang="scss" scoped>
  $line_color : #aaa;
  .entry {
      display: block;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid $line_color;

      &.head {
          font-weight: bold;
          padding-bottom: 5px;
      }
  }

  .avatar {
      display: block;
      width: 220px; height: 240px;
      margin-bottom: 20px;
      border: 8px solid gray;
      background: center center no-repeat;
      background-size: cover;

      @media(max-width:768px){
          float:none !important;
          margin: 0 auto 50px auto;
      }
  }

  .table-cv {
      td, th
      {
        vertical-align: top;
        padding-bottom: 10px;
      }
  }

  .split_100 {
      display: block;
      height: 100px;
  }
</style>

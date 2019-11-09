<template>
    <div class='page'>

          <HeaderContainer :title="'Gallery'"
                         :sub="$route.path"
                         _image="require('~/../images/bg/polygon_bright.jpg')"
                         :css="{ color: '#fff', minHeight: '800px' }"
                         :overlay="'rose3_1'" :opacity="1" :blur="0" />

          <v-container>
          <v-row >
              <v-col class='col-xs-12 col-md-6 col-lg-4 col-xl-3' v-for="(video,i) in videos" :key="'x_'+i">
                  <v-img :src="video.url" />
              </v-col>
          </v-row>
          </v-container>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'full',
    middleware: 'guest',

    data(){ return {
        videos: []
    }},

    mounted(){
        this.load()
    },

    methods: {
        load(){
            axios.get('/api/ytc/v1/videos/latest')
                 .then( r => {
                      this.videos = r.data.videos
                 })
                 .catch( e => console.log(e) )
        }
    }
}
</script>

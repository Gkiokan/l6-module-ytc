<template>
    <div class='page'>

      <HeaderContainer :title="'Search'" v-if="0"
                       :sub="$route.path"
                       _image="require('~/../images/bg/polygon_bright.jpg')"
                       :css="{ color: '#fff', minHeight: '300px' }"
                       :overlay="'rose5'" :opacity="1" :blur="0" />

        <div class='background'>
              <div class='background default invert' :style="{ backgroundImage : 'url(' + defaultBackgroundImage + ')' }" />
              <div class='background overlay overlay_white2' />
              <div class='background image' :style="{ backgroundImage : 'url(' + bgImage + ')' }" v-if="bgImage"/>
        </div>

        <v-container class='container_input z20 py-0'>
            <v-row class='input_area'>
                <v-col class='col-12 pa-0'>
                      <v-text-field v-model="video" class="pa-0 ma-5 mt-5 mb-2"
                                    label="YouTube Video ID or URL" color="info"
                                    prepend-inner-icon="fa-youtube" clearable dense />
                </v-col>
            </v-row>

            <v-row class='message text-center' :class="message.type" transition="slide">
                <v-col>{{ message.text }}</v-col>
            </v-row>
        </v-container>

        <v-container class='container container_details z20 py-0 mb-10' v-if="found">
        <v-row>
            <v-col class='col-12 col-md-10'>
                <v-img :src="bgImage" class='yt_image' :class="YouTubeImageClass" />
            </v-col>
            <v-col class='col-12 col-md-2'>
                <h2 class='font-weight-light'> Information </h2>

                <br>
                ID: <b>{{ this.video }}</b> <br>
                Time: <b>{{ currentTime }} </b> <br>
                <br>
                Found: <b> {{ data.video.created_at | getTime }} </b> <br>
                Update: <b> {{ data.video.updated_at | getTime }} </b> <br>
                <br>
                Reporter: <b> {{ getUserName }} </b> <br>
            </v-col>
        </v-row>
        </v-container>

    </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
import _ from 'lodash'

export default {
    layout: 'full',
    middleware: 'guest',

    data(){ return {
        debounceTime: 100,
        video: '',
        source: 'https://img.youtube.com/vi/%ID/maxresdefault.jpg',
        full_image_url: '',
        defaultBackgroundImage: require('~/../images/bg/black_polygon_.jpg'),
        found: false,
        data: null,
        message: { text: 'Waiting for your Video ID .... ', type: 'info' },

        YouTubeImageClass: {
            shadow: true,
            border: false,
        }
    }},

    mounted(){
        if(this.$route.params.video)
        this.video = this.$route.params.video
    },

    computed: {
        bgImage(){
            if(this.video && this.video.length < 4) return;
            if(this.found) return this.full_image_url
            return;
        },

        currentTime(){ return moment().format('H:m @ DD.MM.Y') },

        getUserName(){
            let user = this.data.user
            if(!user) return "Guest"
            if(user) return user.name
        }
    },

    watch: {
        video(val){
            if(!val || val.length == 0){
                this.set_message("Waiting for your Video ID ... ", 'info')
                this.found = false
                return false
            }

            if(val.length > 0 && val.length < 9){
                this.set_message("Type more... Video ID's are longer then " + val.length + " Characters... ", 'info')
                return false
            }

            if(val.length > 10){
                this.set_message("Okay, checking your current input now " + this.video, 'info')
            }

            this.check_image()
        }
    },

    filters: {
        getDate(val){
            return moment(val).format('DD.MM.YYYY')
        },

        getTime(val){
            return moment(val).format('H:mm @ DD.MM.Y')
        },
    },

    methods: {
        set_full_image_url(){
            return "https://img.youtube.com/vi/" + this.video + "/maxresdefault.jpg"
        },

        check_image: _.debounce(function(){
            axios.get('/api/ytc/v1/check-image/' + this.video)
                  .then((r) => {
                      var data = r.data
                      this.data = data
                      this.found = data.found
                      this.full_image_url = data.thumbnail

                      return data;
                  })
                  .then((r) => {
                      if(r.found){
                        this.message.text = "Video Thumbnail found"
                        this.message.type = 'success'

                        if(this.$route.name != 'search.video'){
                            this.$router.replace({ name: 'search.video', params:{ video: this.video } })
                        }

                      } else {
                        this.message.text = "Video Thumbnail for " + this.video + " couldn't been found"
                        this.message.type = 'info'
                      }
                  })
                  .catch( (error) => this.notfound(error) )
        }, 100),

        _found(){
            this.set_message('Found Video', true)
            router.push({ name: 'ytc.video.id', params:{ video: this.video } })
            console.log(this.video + ' has been found ... router update?')
        },

        notfound(r){
            this.set_message('Video Thumbnail for ID ' + this.video + ' couldnt been found', false)
            console.log(r)
        },

        set_message(message, type){
            this.message.text = message
            this.message.type = 'alert-' + type
        }
    }
}
</script>

<style lang='scss'>
  .z20 {
      position: relative;
      z-index: 20;
  }

  .hide {
      display: none;
  }

  .message {
      background: crimson;
      color: white;

      &.info {
          background: deepskyblue;
      }

      &.found, &.success {
          background: forestgreen;
      }
  }

  .container_input {
      position: relative; z-index: 20;
      max-width: 900px;
      margin-bottom: 50px;
      margin-top: 50px;
      color: #222;

      .input_area {
          background: rgba(255,255,255,.4);
          border: 2px solid white;
      }

      .v-input__control {
          height: 40px;
          .v-input__slot {
              &::before,
              &::after {
                  display: none;
              }

              input {
                  font-size: 30px;
                  font-weight: 100;
                  padding: 0px !important;
              }
          }
      }
  }

  .container_details {
      background: white;

      .yt_image {
          &.shadow {
              box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, .8);
          }

          &.border {
              border: 5px solid white;
          }
      }
  }

  .background {
      background-size: cover;

      &.default {
          z-index: 5;
      }

      &.overlay {
          z-index: 6;
          transform: rotate(180deg);
      }

      &.image {
          z-index: 7;
          filter: blur(5px);
          transform: scale(1.5);
      }
  }

</style>

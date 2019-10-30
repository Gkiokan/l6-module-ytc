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
              <div class='background image' :style="{ backgroundImage : 'url(' + bgImage + ')' }" />
        </div>

        <v-container class='container_input z20 py-0'>
            <v-row>
                <v-col class='col-12 pa-0'>

                      <v-text-field v-model="input" class="pa-0 ma-5 mt-5 mb-2"
                                    label="YouTube Video ID or URL" color="info"
                                    prepend-inner-icon="fa-youtube" clearable dense />

                </v-col>
            </v-row>
        </v-container>

        <v-container class='container z20'>
        <v-row>
            <v-col class='col-12 col-md-10'>
                <v-img :src="bgImage" class='yt_image' />
            </v-col>
            <v-col class='col-12 col-md-2'>
                <h2 class='font-weight-light'>Options </h2>
            </v-col>
        </v-row>
        </v-container>

    </div>
</template>

<script>
import moment from 'moment'

export default {
    layout: 'full',
    middleware: 'guest',

    data(){ return {
        input: 'IxjQCpocNMM',
        source: 'https://img.youtube.com/vi/%ID/maxresdefault.jpg',
        defaultBackgroundImage: require('~/../images/bg/black_polygon_.jpg'),
        found: false,
    }},

    computed: {
        bgImage(){
            if(this.input.length < 4) return;

            let src = this.source.replace('%ID', this.input)
            return src
        }
    },

    filters: {
        getDate(val){
            return moment(val).format('DD.MM.YYYY')
        }
    },

    mounted(){
        // console.log(this)
    }
}
</script>

<style lang='scss'>
  .z20 {
      position: relative;
      z-index: 20;
  }

  .yt_image {
      border: 7px solid white;
  }

  .container_input {
      position: relative; z-index: 20;
      max-width: 900px;
      margin-bottom: 100px; margin-top: 50px;

      background: rgba(255,255,255,.4);
      border: 2px solid white;
      color: #222;

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

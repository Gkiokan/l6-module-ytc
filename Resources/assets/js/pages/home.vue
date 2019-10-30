<template>
    <div class='page'>

      <HeaderContainer :title="'YouTube Thumbnail Catcher'"
                       :sub="$route.path"
                       :image="require('~/../images/bg/polygon_bright.jpg')"
                       :css="{ color: '#fff', minHeight: '800px' }"
                       :overlay="'black2'" :opacity="0.5" :blur="0" />



        <v-container style='max-width: 900px; margin-bottom: 100px; margin-top: 50px;'>
            <h2 class='font-weight-light'>Latest Videos added </h2>
            <v-row>
                <v-col class='col-12 col-sm-6 col-md-4 col-lg-3'>
                    YT_VID_ID
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
        colors: [
            'pink darken-3 white--text',
            'red darken-3 white--text',
            'purple darken-3 white--text',
            'deep-purple darken-3 white--text',
            'blue darken-3 white--text',
            'light-blue darken-2 white--text',
            'teal darken-2 white--text',
            'cyan accent-3',
            'teal accent-3',
            'green darken-3 white--text',
            'green accent-4',
            'lime darken-3 white--text',
            'lime accent-3',
            'orange darken-4 white--text',
            'yellow accent-2',
            'brown darken-2 white--text',
            'deep-orange darken-3 white--text',
        ],
    }},

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

<style lang='scss'scoped>

</style>

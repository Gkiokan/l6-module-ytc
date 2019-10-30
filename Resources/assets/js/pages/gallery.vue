<template>
    <div class='page'>

          <HeaderContainer :title="'Projects'"
                         :sub="$route.path"
                         _image="require('~/../images/bg/polygon_bright.jpg')"
                         :css="{ color: '#fff', minHeight: '800px' }"
                         :overlay="'rose3_1'" :opacity="1" :blur="0" />

          <v-container>
          <v-row >
              <v-col class='col-xs-12 col-md-6 col-lg-4 col-xl-3' v-for="(project,i) in externals" :key="'x_'+i">

                <v-card>
                <v-carousel :continuous="false" :cycle="cycle" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-minus" height="300" >
                  <v-carousel-item v-for="(slide, i) in [1,2,3]" :key="i" >
                    <v-sheet :color="colors[$util.randomInt(0, colors.length)]" height="100%" tile >
                      <v-row class="fill-height" align="center" justify="center" >
                        <div class="display-3 pa-5">{{ project.title }}</div>
                      </v-row>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>

                <v-list two-line>
                  <v-list-item>
                    <v-list-item-avatar>
                        <v-img :src="require('~/../images/g_2017.jpg')"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title> {{ project.title }}</v-list-item-title>
                      <v-list-item-subtitle> {{ project.description }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn elevation="0"> {{ project.percent }} </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>

                <v-divider />

                <v-list>
                    <v-list-item>
                      <v-chip-group>
                        <v-chip label class="" x-small>Work in Progress </v-chip>
                        <v-chip label class="orange white--text" x-small v-if="0">Free</v-chip>
                        <v-chip label class="gray darken-2 white--text" x-small v-if="0">Auth</v-chip>
                      </v-chip-group>
                    </v-list-item>
                </v-list>

                </v-card>

              </v-col>
          </v-row>
          </v-container>


    </div>
</template>

<script>
import projects from '~/data/projects'

export default {
    layout: 'full',
    middleware: 'guest',

    data(){ return {
          ...projects,
          cycle: true,
          colors: [
            'green',
            'secondary',
            'yellow darken-4',
            'red lighten-2',
            'orange darken-1',
          ],
          slides: [
             'First',
             'Second',
             'Third',
             'Fourth',
             'Fifth',
           ],
    }},

    mounted(){
        // console.log(this)
    }
}
</script>

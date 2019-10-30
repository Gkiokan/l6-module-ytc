<template lang="html">
    <v-app-bar
          fixed dark flat app
          :color="navigationColor"
          _collapse="!collapseOnScroll"
          :collapse-on-scroll="collapseOnScroll"
          :elevate-on-scroll="elevateOnScroll"
          :hide-on-scroll="hideOnScroll"
          :src="showBackgroundImageInNavigation ? 'https://picsum.photos/1920/1080?random' : ''"
          _fade-img-on-scroll
        >

            <template v-slot:img="{ props }" v-if="showOverlay">
              <v-img
                v-bind="props"
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
              ></v-img>
            </template>

            <div class="flex-grow-1"></div>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-toolbar-items class='hidden-md-and-down'>
               <v-btn v-for="(link,i) in routes" :key="'_toolbar_links_' + i" v-if="link.inNav"
                      :to="link.path"
                      text rounded :ripple="true">{{ link.title }}</v-btn>
            </v-toolbar-items>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>

            <v-app-bar-nav-icon class='hidden-lg-and-up' @click="menuClick"></v-app-bar-nav-icon>

      </v-app-bar>
</template>

<script>
import routes from '~/config/routes'
import EventBus from '~/eventBus'

export default {
    name: 'AppBar',

    data: () => ({
        showOverlay: false,
        showBackgroundImageInNavigation: false,
        navigationColor: 'black',
        elevateOnScroll: true,
        hideOnScroll: false,
        collapseOnScroll: false,

        title: 'The Dashboard',
        darkmode: false,

        routes
    }),

    methods: {
        menuClick(){
            this.$emit('update:drawer')
            EventBus.$emit('click:drawer')
        },

        onScroll(){
            this.navigationColor = window.pageYOffset < 200 ? 'transparent' : '#6A76AB'
        }
    }
}
</script>

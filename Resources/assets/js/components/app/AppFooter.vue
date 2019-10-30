<template lang="html">
    <v-footer dark color="primary darken-1" padless >
    <v-row justify="center" no-gutters >
      <v-btn
        v-for="(link,i) in links" :key="link.title" :to="link.path ? link.path : null" :href="getHref(link)"
        color="white" text rounded class="my-2" >
        {{ link.title }}
      </v-btn>

      <v-col class="grey darken-3 py-1 text-center white--text overline" cols="12">
        &copy; 2006 - {{ new Date().getFullYear() }} — <strong>Gkiokan.NET</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import links from '~/config/footer'
export default {
    name: 'AppFooter',

    data: () => ({
        links
    }),

    methods: {
        getHref(link){
            if(link.href && link.href.name)
                return link.href.name

            if(link.href)
              return link.href

            return null
        }
    }

}
</script>

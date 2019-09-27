<template>
  <v-app id="inspire">

    <AppDrawer ref="AppDrawer"/>

    <AppBar @update:drawer="$refs.AppDrawer.drawer = !$refs.AppDrawer.drawer" />

    <v-content>
      <v-container fluid xclass="fill-height">
          <child />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
    name: 'Dashboard',

    props: {
      source: String,
    },

    data: () => ({
      drawer: false,
      darkmode: false,
    }),

    watch: {
        darkmode(val){
            this.$vuetify.theme.dark = val
        }
    },

    methods: {

    }
}
</script>

<template>
  <v-app id="inspire">

    <AppDrawer />

    <AppBar />

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

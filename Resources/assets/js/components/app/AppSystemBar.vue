<template lang="html">
  <v-system-bar window dark app>
      <v-icon>fa-spinner</v-icon>
      <span class='mr-4'>Gkiokan.NETWORK</span>

      <v-chip-group>
          <v-chip v-for="(a,i) in p" :key="i" x-small label>{{ a }}</v-chip>
      </v-chip-group>

      <div class="flex-grow-1"></div>

      <v-chip v-if="isLoggedIn"> loggedIn </v-chip>
      <v-chip v-else @click.native="moveToLogin"> Sign In </v-chip>

      <v-icon>mdi-minus</v-icon>
      <v-icon>mdi-checkbox-blank-outline</v-icon>
      <v-icon>mdi-close</v-icon>
  </v-system-bar>
</template>

<script>
export default {
    name: 'AppSystemBar',

    data(){ return {
        p: [
            'Web',
            'YouTube Catcher',
            'Quality Management',
            'License Manager',
            'WP App Store',
            'WP Search Server',
        ]
    }},

    computed: {
        isLoggedIn(){
            return this.$store.getters['auth/token']
        }
    },

    methods: {
        moveToLogin(){
            this.$router.push({ name: 'login' })
        }
    }

}
</script>

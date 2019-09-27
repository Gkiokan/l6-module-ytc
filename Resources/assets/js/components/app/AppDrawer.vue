<template lang="html">
    <v-navigation-drawer v-model="drawer" app clipped xmini-variant>
      <v-list dense>
        <v-list-item v-for="(item,i) in items" :key="item.text + ' ' + i" :to="item.route" _click="$router.push({ name: item.route }, () => {} )">
            <v-list-item-action>
              <div style='font-weight: bold' v-if="item.name && false">{{ item.name }}</div>
              <v-icon v-else>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-subheader class="mt-4 grey--text text--darken-1" v-if="show_subheader">MAGIC</v-subheader>

        <v-list v-if="show_persons">
          <v-list-item v-for="item in items2" :key="item.text" @click="">
            <v-list-item-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>

        <v-list-item class="mt-4" @click="">
            <v-list-item-action>
              <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
            </v-list-item-action>
            <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>

        <v-list-item @click="">
            <v-list-item-action>
              <v-icon color="grey darken-1">mdi-settings</v-icon>
            </v-list-item-action>
            <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'AppDrawer',

    data: () => ({
      drawer: null,
      title: 'The Dashboard',
      show_persons: false,
      show_subheader: false,
      darkmode: false,

      items: [
        { icon: 'subscriptions', text: 'Subscriptions', route: '/welcome' },
        { icon: 'mdi-gauge', text: 'Dashboard', route: '/login' },
        { icon: 'history', name: 'RSA', text: 'History', route: '/screen/2' },
        { icon: 'trending_up', name: 'ViewI', text: 'Most Popular', route: '/screen/1' },
        { icon: 'featured_play_list', name: 'Web', text: 'Playlists', route: '/screen/3'  },
        { icon: 'watch_later', name: 'ViewIII', text: 'Watch Later', route: '/screen/4'  },
        // { icon: 'mdi-xbox', text: 'Dashboard', route: '/screen/5'},
        // { icon: 'mdi-playstation', text: 'Dashboard', route: '/home'},
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
    }),
}
</script>

<style lang="css">
</style>

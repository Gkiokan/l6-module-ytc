<template>
    <v-app>

      <AppSystemBar />

      <AppDrawer />

      <AppBar />

      <v-content>
          <child />
      </v-content>

      <AppFooter />

    </v-app>
</template>

<script>
export default {
  name: 'Full',
}
</script>

<template lang="html">
    <v-app-bar app clipped-left xcolor="red" dense >
        <v-app-bar-nav-icon @click.stop="$emit('update:drawer')" v-if="1"></v-app-bar-nav-icon>
        <v-icon class="mx-4" v-if="1">scatter_plot</v-icon>
        <v-toolbar-title class="mr-12 align-center">
            <span class="title">{{ title }}</span>
        </v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-row justify="space-around" style='max-width: 200px'>
            <v-switch v-model="darkmode" label="Darkmode" class='pt-6' />
        </v-row>
        <v-row align="center" style="max-width: 650px" >
            <v-text-field :append-icon-cb="() => {}" placeholder="Search..." single-line append-icon="search" color="white" hide-details ></v-text-field>
        </v-row>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppBar',

    data: () => ({
      title: 'The Dashboard',
      show_persons: false,
      show_subheader: false,
      darkmode: false,
    }),
}
</script>

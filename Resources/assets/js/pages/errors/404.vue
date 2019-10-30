<template>
    <div class='error404'>
        <v-container fluid d-flex align-items-center justify-center class='fill-height pa0' style='background: black; color: #fff; min-height: 800px'>
        <div>
            <h1> 404 </h1>
            <pre>{{ $route.path }}</pre>
        </div>
        </v-container>
    </div>
</template>

<script>
export default {
    layout: 'full'
}
</script>

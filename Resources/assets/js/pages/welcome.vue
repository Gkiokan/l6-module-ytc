<template>
    <div class='page'>
        Welcome. <br>
        Hi there.
    </div>
</template>

<script>
export default {
    layout: 'full',
    middleware: 'guest',

    mounted(){
        // console.log(this.$route)
    }
}
</script>

<template lang="pug">
.smallSliderContainer
    .smallSlider(v-for='items in smallSlider')
</template>
<script>
export default {
    components: {
    },
    props: ['small-slider'],
    data(){
        return{
            
        }
    }
}
</script>
<style lang="sass">
.smallSliderContainer
    position: absolute
    top: 216px
    left: 390px
</style>
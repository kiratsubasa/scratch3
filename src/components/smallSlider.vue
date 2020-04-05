<template lang="pug">
.smallSliderContainer
    .smallSlider.smallSlider1(:style="{'background-image': 'url(' + smallSlider[0].Pic + ')'}")
        // a(:href="smallSlider[0].link")
        //     img#slideImg(:src="link[0].media.info.src")
    .smallSlider.smallSlider2(:style="{'background-image': 'url(' + smallSlider[1].Pic + ')'}")
    .smallSlider.smallSlider3(:style="{'background-image': 'url(' + smallSlider[2].Pic + ')'}")
    .smallSlider.smallSlider4(:style="{'background-image': 'url(' + smallSlider[3].Pic + ')'}")
    .smallSlider.smallSlider5(:style="{'background-image': 'url(' + smallSlider[4].Pic + ')'}")
    .leftButton(@click='plusSmallSlides(-1)')
    .rightButton(@click='plusSmallSlides(-1)')
</template>
<script>
export default {
    components: {
    },
    props: ['small-slider'],
    methods: {
        
    },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="sass">
@import "@/style/common.sass"
.smallSliderContainer
.smallSlider1
    position: absolute
    width: 161px
    height: 240px
    top: 446px
    left: 0px
    cursor: pointer
.smallSlider2
    position: absolute
    width: 161px
    height: 240px
    top: 446px
    left: 197px
    cursor: pointer
.smallSlider3
    position: absolute
    width: 571px
    height: 395px
    top: 369px
    left: 390px
    cursor: pointer
.smallSlider4
    position: absolute
    width: 161px
    height: 240px
    top: 446px
    left: 995px
    cursor: pointer
.smallSlider5
    position: absolute
    width: 161px
    height: 240px
    top: 446px
    left: 1190px
    cursor: pointer
.leftButton
    position: absolute
    width: 62px
    height: 240px
    top: 446px
    left: 0px
    background-color: $c-primary
    opacity: 0.75
    cursor: pointer
.rightButton
    position: absolute
    width: 62px
    height: 240px
    top: 446px
    left: 1287px
    background-color: $c-primary
    opacity: 0.75
    cursor: pointer
</style>
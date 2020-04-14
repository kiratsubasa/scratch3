<template lang="pug">
.smallSliderContainer
    .smallSliderTitle {{smallSlider[1].title}}
    .smallSlider.smallSlider1
        // a(:href="link[0].link")
        img#slideImg(:src="smallSlider[1].media.info.src")
    .smallSlider.smallSlider2
        img#slideImg(:src="smallSlider[2].media.info.src")
    .smallSlider.smallSlider3
        img#slideImg(:src="smallSlider[3].media.info.src")
    .smallSlider.smallSlider4
        img#slideImg(:src="smallSlider[4].media.info.src")
    .smallSlider.smallSlider5
        img#slideImg(:src="smallSlider[5].media.info.src")
    .leftButton(@click='plusSmallSlides(-1)')
    .rightButton(@click='plusSmallSlides(1)')
    .smallSliderLearnMore LEARN MORE
    showSmallSlides(slideIndex)
</template>

<script>
var slideIndex = 1;
export default {

    data(){
        return{
            slideIndex: 1
        }
    },
    components: {

    },
    props: ['small-slider'],
    methods: {
        plusSmallSlides(n) {
            this.showSmallSlides(slideIndex += n);
        },

        currentSmallSlide(n) {
            this.showSmallSlides(slideIndex = n);
        },

        showSmallSlides(n) {
            var i;
            var slides = document.getElementsByClassName("smallSlider");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            
            slides[slideIndex-1].style.display = "block";  
            
        }
    },
    
}
</script>
<style lang="sass">
@import "@/style/common.sass"
.smallSliderTitle
    width: 90%
    color: $c-text
    font-size: 16px
    position: absolute
    top: 74px
    text-align: left
    font-weight: 600
    left: 5%
.smallSlider
    position: absolute
    width: 90%
    height: 240px
    top: 136px
    cursor: pointer
    left: 5%
.leftButton
    position: absolute
    width: 24px
    height: 24px
    top: 256px
    left: 5px
    background-color: $c-primary
    opacity: 0.75
    cursor: pointer
    border-radius: 50%
.rightButton
    position: absolute
    width: 24px
    height: 24px
    top: 256px
    right: 5px
    background-color: $c-primary
    opacity: 0.75
    cursor: pointer
    border-radius: 50%
.smallSliderLearnMore
    background-color: $c-primary
    color: $c-secondary
    font-weight: 600
    width: 135px
    height: 37px
    font-size: 10px
    padding: 9px 24px 9px 24px
    position: absolute
    top: 382px
    left: 32%
@media only screen and (min-width: 480px)
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
        border-radius: 0%
    .rightButton
        position: absolute
        width: 62px
        height: 240px
        top: 446px
        left: 1287px
        background-color: $c-primary
        opacity: 0.75
        cursor: pointer
        border-radius: 0%
</style>
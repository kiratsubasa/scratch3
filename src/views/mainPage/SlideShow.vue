<template lang="pug">
div#slideshow-container
        .mySlides.mySlides1.fade
            a(:href="jumpBar[0].link")
                img#slideImg(:src="jumpBar[0].src")
        .mySlides.mySlides2.fade(v-for='(jumpImage,index) in jumpBar' v-if="index!=0 &&index!= jumpBar.length-1")
            a(:href="jumpImage.link")
                img#slideImg(:src="jumpImage.src")
        .mySlides.mySlides3.fade
            a(:href="jumpBar[jumpBar.length-1].link")
                img#slideImg(:src="jumpBar[jumpBar.length-1].src")
        .slideTextBlock
            h1#slideTextBlockTitle {{jumpBar[slideIndex-1].title}}
            p {{jumpBar[slideIndex-1].subtitle}}
        //- div.prevBut(@click='plusSlides(-1)') <
        //- div.nextBut(@click='plusSlides(1)') >
        span.dot(v-for="(dot,index) in jumpBar" @click='currentSlide(index+1)')

</template>


<script>
var slideIndex = 1;
export default {

    data() {
        return {
            slideIndex: 1
        }
    },
    props: ['jump-bar'],
    methods: {
        plusSlides(n) {
            this.showSlides(slideIndex += n);
        },

        currentSlide(n){
            this.showSlides(slideIndex = n);
        },

        showSlides(n){
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            var subWidth = 14/(slides.length-2);
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            var numSubBlock = 0;
            for (i = 0; i < slides.length; i++) {
                //slides[i].style.display = "none"; 
                if(i!=slideIndex-1){
                    if(slideIndex==slides.length){
                        if(i!=0){
                            slides[i].style= "-webkit-clip-path : polygon("+(86+subWidth*numSubBlock)+"% 0, "+(86+subWidth*(numSubBlock+1))+"% 0, "+(83+subWidth*(numSubBlock+1))+"% 100%, "+(83+subWidth*numSubBlock)+"% 100%)";  //else block 
                            numSubBlock ++;
                        }
                    }
                    else{
                        if(i!=slideIndex){
                            slides[i].style= "-webkit-clip-path : polygon("+(86+subWidth*numSubBlock)+"% 0, "+(86+subWidth*(numSubBlock+1))+"% 0, "+(83+subWidth*(numSubBlock+1))+"% 100%, "+(83+subWidth*numSubBlock)+"% 100%)";  //else block 
                            numSubBlock ++;
                        }
                    }
                    
                }
            }
            if(slideIndex==slides.length){
                slides[0].style= "-webkit-clip-path : polygon(70% 0, 86% 0, 83% 100%, 75% 100%)";  //second block when slideIndex come to the end 
            }
            else{
                slides[slideIndex].style= "-webkit-clip-path : polygon(70% 0, 86% 0, 83% 100%, 75% 100%)";  //second block
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style = "-webkit-clip-path : polygon(0 0, 70% 0, 75% 100%, 0 100%)";  //first block
            dots[slideIndex-1].className += " active";
            this.slideIndex = slideIndex;
        }
    },
    created() {
        setInterval(() => this.plusSlides(1), 10000);
    }
}       
</script>

<style lang="sass">

#slideshow-container
    max-width: 1280px
    max-height: 960px
    position: relative
    margin: auto
    -webkit-box-shadow: -1px 3px 10px -1px rgba(0,0,0,0.20)
    box-shadow: -1px 3px 8px -1px rgba(0,0,0,0.20)
    margin-top: 1px

.mySlides
    cursor: pointer
    overflow: hidden

.mySlides:hover
    opacity: 0.5
    top: -1px
    right: 1px
    
.mySlides1
    -webkit-clip-path: polygon(0 0, 70% 0, 75% 100%, 0 100%)
    position: absolute
    

.mySlides2
    -webkit-clip-path: polygon(70% 0, 86% 0, 83% 100%, 75% 100%)
    position: absolute
    

.mySlides3
    -webkit-clip-path: polygon(86% 0, 100% 0, 100% 100%, 83% 100%)


.prevBut
    cursor: pointer
    position: absolute
    top: 85%
    left: 0px
    width: auto
    padding: 20px
    color: white
    font-weight: bold
    font-size: 50px
    transition: 0.6s ease
    border-radius: 50px
    user-select: none
    -webkit-filter: drop-shadow(7px 7px 2px rgba(0, 0, 0, 0.3))
    filter: drop-shadow(7px 7px 2px rgba(0, 0, 0, 0.3))

.nextBut
    cursor: pointer
    position: absolute
    top: 85%
    left: 65%
    width: auto
    padding: 20px
    color: white
    font-weight: bold
    font-size: 50px
    transition: 0.6s ease
    border-radius: 50px
    user-select: none
    -webkit-filter: drop-shadow(7px 7px 2px rgba(0, 0, 0, 0.3))
    filter: drop-shadow(7px 7px 2px rgba(0, 0, 0, 0.3))



.prevBut:hover, .nextBut:hover
    border: 1px #FFC53D solid


.dot
    cursor: pointer
    height: 10px
    width: 10px
    margin: 0 2px
    margin-top:10px
    background-color: #D1B1B4
    border-radius: 50%
    display: inline-block
    transition: background-color 0.6s ease

.active, .dot:hover
    background-color: #FBE2E5

.fade
    -webkit-animation-name: fade
    -webkit-animation-duration: .5s
    animation-name: fade
    animation-duration: .5s

.slideTextBlock
    position: absolute
    bottom: 5%
    text-align: left
    width: 60%
    margin-left: 1%
    background-color: #FFF
    opacity: 1
    padding: 10px
    cursor: pointer
    -webkit-box-shadow: -5px 3px 15px 4px rgba(0,0,0,0.4)
    box-shadow: -5px 3px 15px 4px rgba(0,0,0,0.4)
    font-size: 1.2em
    line-height: 2em
#slideTextBlockTitle 
    margin: 5px

.slideTextBlock:hover
    opacity: 0.4


@-webkit-keyframes fade
    from
        -webkit-clip-path: polygon(0,0,0,0,0,0,0,0)

    to
        -webkit-clip-path: polygon(0 0, 81% 0, 71% 100%, 0 100%)


@keyframes fade
    from
        opacity: 0

    to
        opacity: 1


@media only screen and (max-width: 480px)
    .prevBut, .nextBut, .text
        font-size: 11px
    #slideImg
        width: 100%
        height: 480px
    .mySlides
        width: 100%
        height: auto
        
@media only screen and (min-width: 480px)
    #slideImg
        width: auto
        height: auto
    .mySlides
        width: 100%
        height: 750px

</style>
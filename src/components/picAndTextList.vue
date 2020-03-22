<template lang="pug">
.picAndTextContainer
    .picAndText(v-for='(items,id) in picAndText' v-if="id%2==0")
        .picAndTextPic(:style="{'background-image': 'url(' + items.Pic + ')'}")
            //img(:src="items.Pic" style="min-width:100%")
        .picAndTextText
            .picAndTextTitle {{items.title}}
            .picAndTextSubtitle {{items.Subtitle}}
    .picAndText(v-for='(items,id) in picAndText' v-if="id%2==1")
        .picAndTextText
            .picAndTextTitle {{items.title}}
            .picAndTextSubtitle {{items.Subtitle}}
        .picAndTextPic(:style="{'background-image': 'url(' + items.Pic + ')'}")
            //img(:src="items.Pic" style="min-width:100%")
        // .picAndTextPic(:style="{'background-image': 'url(' + items.Pic + ')'}")
        //     //img(:src="items.Pic" style="min-width:100%")
        // .picAndTextText
        //     .picAndTextTitle {{items.title}}
        //     .picAndTextSubtitle {{items.Subtitle}}
</template>
<script>
export default {
    components: {
    },
    props: ['pic-and-text'],
    data(){
        return{
            
        }
    }
}
</script>
<style lang="sass">
@import "@/style/common.sass"
.picAndTextContainer
    max-width: 1280px
    margin: auto
    margin-top: 20px
.picAndText
    width: 100%
    height: 480px
    background-color: #ddd
    // overflow: hidden
    display: flex
    flex-wrap: wrap
    flex-direction: row
    
.picAndTextPic
    width: 50%
    background-size: cover
    //float: left
.picAndTextText
    width: 50%
    
    // padding-top: 200px
    // padding-bottom: 200px
.picAndText:hover
    background-color: #555
    color: white
.picAndTextTitle
    font-size: 2em
    font-weight: 600
    margin-bottom: 20px
@media only screen and (min-width: 480px)
    .picAndTextText
        padding-top: 200px
        padding-bottom: 200px
@media only screen and (max-width: 480px)
    .picAndText
        width: 100%
    .picAndTextPic
        width: 100%
        background-size: cover
        //float: left
    .picAndTextText
        width: 100%
        background-color: #ddd
    .picAndTextTitle
        margin-bottom: 10px
</style>
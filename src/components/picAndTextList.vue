<template lang="pug">
.picAndTextContainer
    .picAndText(v-for='(items,id) in picAndText' :class="id%2==0? 'flexRow':'flexRowReverse'")
        .picAndTextPic(:style="{'background-image': 'url(' + items.Pic + ')'}")
        .picAndTextText
            .picAndTextTitle {{items.title}}
            .picAndTextSubtitle {{items.Subtitle}}
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
    padding-bottom: 135px
.picAndText
    width: 100%
    height: 480px
    background-color: #ECE8E3
    // overflow: hidden
    display: flex
    flex-wrap: wrap
    //flex-direction: row
    color: #95AC9A
.flexRow
    flex-direction: row
.flexRowReverse
    flex-direction: row-reverse
.picAndText:hover
    cursor: pointer
.picAndTextPic
    width: 50%
    background-size: cover
    //float: left
.picAndTextText
    width: 50%
    
    // padding-top: 200px
    // padding-bottom: 200px
.picAndText:hover
    background-color: #95AC9A
    color: #ECE8E3
    opacity: 0.75
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
        height: 270px
        position: relative
    .picAndTextPic
        width: 100%
        background-size: cover
        //float: left
    .picAndTextText
        position: absolute
        width: 50%
        height: 100%
        background-color: $c-secondary
        opacity: 0.75
    .picAndTextTitle
        margin-bottom: 10px
        font-size: 16px
        line-height: 20px
        padding-top: 120px
    .picAndTextSubtitle
        font-size: 10px
        line-height: 15px
</style>
<template lang="pug">
.footerContainer
    div#footer
        //- .footLinkContainer
        //-     .footLink(v-for='item in footMenuList')
        //-         router-link(:to='item.link' style="color: #333; text-decoration:none; margin: 30px;") {{item.title}}
        //- div.footContainer
        //-     div.whiteBar
        //-     div.footItem-1
        //-         div(v-for='foot in 5') {{footList[foot-1].title}}
        //-     div.whiteBar
        //-     div.footItem-2
        //-         div(v-for='foot in 2') {{footList[foot+4].title}}
        .footLinkContainer
            .footLink(v-for='item in footMenuList')
                router-link(:to='item.link' style="color: #333; text-decoration:none; margin: 30px;") {{item.title}}
        .footContainer
            .footItem-1
                .footerItems(v-for='foot in 5') {{footList[foot-1].title}}
                .footerItems(v-for='foot in 2') {{footList[foot+4].title}}
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['foot-list','footMenuList'],

    
    methods: {

    }
}       
</script>

<style lang="sass">
.footerContainer
    width: 100%
    background-color: #D1B1B4
#footer
    bottom: 0
    position: relative
    width: 60%
    //background-color: #F5DC79
    color: #1E1E20
    //color: #333
    text-align: left
    padding: 20px
    // -webkit-box-shadow: 0px -4px 3px -3px rgba(0,0,0,0.16)
    // box-shadow: 0px -4px 3px -3px rgba(0,0,0,0.36)
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin: auto

@media all and (min-width: 640px)
    .footContainer
        width: 55%
        margin-left: 20px
    .footLinkContainer
        // width: 40%
    .footLinkContainer
        border-right: 1px #777 solid
        border-bottom: 0

@media all and (max-width: 640px)
    .footContainer
        width: 100%
    .footLinkContainer
        width: 100%
    .footLinkContainer
        border-right: 0
        border-bottom: 1px #777 solid
    
.footContainer
    display: flex
    flex-wrap: wrap
    justify-content: center
    
.footLinkContainer
    // display: flex
    // flex-wrap: wrap
    // justify-content: center
    text-align: center
    margin-bottom: 30px
    padding: 10px
    
.footLink
    margin: 10px
// .footItem-1
//     margin: 10px
//     //margin-right: 10%
// .footItem-2
//     margin: 10px
.footerItems
    margin: 10px

</style>
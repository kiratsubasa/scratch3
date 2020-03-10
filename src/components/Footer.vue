<template lang="pug">
.footerContainer
    div#footer
        .footContainer
            .footItem-1
                .footerItems(v-for='foot in 5') {{footList[foot-1].title}}
                .footerItems(v-for='foot in 2') {{footList[foot+4].title}}
        //- .footLinkContainer
            .footLink(v-for='item in footMenuList')
                router-link(:to='item.link' style="color: #333; text-decoration:none; margin: 30px;") {{item.title}}
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
@import "@/style/common.sass"
.footerContainer
    width: 100%
    background-color: $c-secondary
    color: $textC-secondary
    
#footer
    bottom: 0
    // width: 60%
    text-align: left
    padding: 20px
    display: flex
    flex-wrap: wrap
    margin: auto

@media all and (min-width: 640px)
    .footContainer
        width: 45%
        margin-left: 20%
        padding: 10px
        border-left: 1px $textC-secondary solid
    .footLinkContainer
        border-left: 1px $textC-secondary solid
        border-bottom: 0

@media all and (max-width: 640px)
    .footContainer
        width: 100%
    .footLinkContainer
        width: 100%
    .footLinkContainer
        display: none
    
.footContainer
    display: flex
    flex-wrap: wrap
    
.footLinkContainer
    // text-align: center
    margin-bottom: 30px
    padding: 10px
    background-color: $textC-secondary
    
.footLink.footerItems
    margin: 10px
</style>
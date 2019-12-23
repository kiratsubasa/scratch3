<template lang="pug">
.footerContainer
    div#footer
        .footContainer
            .footItem-1
                .footerItems(v-for='foot in 5') {{footList[foot-1].title}}
                .footerItems(v-for='foot in 2') {{footList[foot+4].title}}
        .footLinkContainer
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

</style>
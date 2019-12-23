<template lang="pug">

div#menuWrapper
    div#menuBar
        router-link#Lego(to='/' :style="{'background-image': 'url(' + iconSrc + ')'}")
        div.menuItem(v-for='item in menuList')
            router-link#menuItemLink(:to='item.link') {{item.title}}
        .menuIconContainer(@click='drawerStatus = !drawerStatus')
            .menuIconBar1
            .menuIconBar2
            .menuIconBar3
        SearchBar.searchBar-Header(:searchPlaceholder='searchPlaceholder' :search-lists='searchLists')
        
    div.meunDrawer(v-if='drawerStatus')
        div.drawerItem(v-for='item in menuList' @click='drawerStatus = !drawerStatus') 
            #underline
            router-link(:to='item.link' style="color: black; text-decoration: none;") {{item.title}}
    

</template>


<script>
import SearchBar from './searchBar.vue'
export default {
    components: {
        SearchBar
    },
    props: ['menu-list','icon-src'],
    data() {
        return {
            searchPlaceholder: "Search All",
            drawerStatus: false,
        }
    },

    methods: {

    }
}       
</script>

<style lang="sass">
@import "@/style/common.sass"
</style>
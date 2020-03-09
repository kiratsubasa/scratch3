<template lang="pug">

div#menuWrapper
    div#menuBar
        router-link#Lego(to='/' :style="{'background-image': 'url(' + iconSrc + ')'}")
        div.menuItem(v-for='item in menuList')
            router-link#menuItemLink(:to='item.url') {{item.name}}
        div(@click='opentheDrawer()' :class="menuclassList")
            .menuIconBar1
            .menuIconBar2
            .menuIconBar3
        //- SearchBar.searchBar-Header(:searchPlaceholder='searchPlaceholder' :search-lists='searchLists')
    transition(name="page" mode="out-in")
        div#drawer(v-if="drawerStatus")
            div.drawerItem(v-for='(item,i) in menuList' @click='drawerStatus = !drawerStatus') 
                #underline
                a(:href='item.url' style="color: black; text-decoration: none;") {{item.name}}
    

</template>


<script>
import SearchBar from './searchBar.vue'

// import { buttonTransform } from '@/style/controller.js'
export default {
    components: {
        SearchBar
    },
    props: ['menu-list','icon-src'],
    data() {
        return {
            searchPlaceholder: "Search All",
            drawerStatus: false,
            menuclassList: {
                menuIconContainer: true,
                change: false
            }
        }
    },
    methods: {
        opentheDrawer: function(){
            this.drawerStatus = !this.drawerStatus;
            this.menuclassList.change = !this.menuclassList.change;
        }
    }
}       
</script>

<style lang="sass">
@import "@/style/common.sass"
</style>
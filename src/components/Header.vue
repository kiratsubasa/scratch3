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
        SearchBar.searchBar-Header(:searchPlaceholder='searchPlaceholder' v-on:changePathByQuery='changePathByQuery')
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
        },
        changePathByQuery: function(query){
            this.$router.push({path:'/search',query: {search:query}});
        }
    }
}       
</script>

<style lang="sass">
@import "@/style/common.sass"
#menuWrapper
    padding-bottom: 5px
    background-color: $c-primary
#menuBar
    display: flex
    flex-wrap: nowrap
    justify-content: flex-end
    padding: 10px
    padding-top: 10px



@media all and (min-width: 1024px)
    .menuItem
        margin-top: 10px
        margin-right: 5px
        padding: 3px
        display: block
        font-size: 16px
    .menuIconContainer
        display: none
    .drawerItem
        display: none

@media all and (max-width: 1024px)
    .menuItem
        display: none
    .menuIconContainer
        display: block
    .drawerItem
        display: block

#Lego
    background-size: contain
    height: 50px
    width: 50px
    position: absolute
    left: 20px
    border-radius: 10px

.menuIconBar1, .menuIconBar2, .menuIconBar3
    width: 35px
    height: 3px
    background-color: #777
    transition: 0.3s
    margin: 8px
    margin-right: 10px
    position: relative
    border-radius: 25px

#menuItemLink
    padding: 5px
    color: $c-secondary
    text-decoration: none 
    font-weight: bold
#menuItemLink:hover
    color: $c-text
.change .menuIconBar1
    opacity: 0
    
.change .menuIconBar2 
    -webkit-transform: rotate(-405deg) translate(-9px, 6px)
    transform: rotate(-405deg)

.change .menuIconBar3 
    -webkit-transform: rotate(225deg) 
    transform: rotate(225deg) translate(8px, 8px)
    transition-delay: 0.2s


.menuIconContainer
    cursor: pointer

@keyframes drawerOpen
    from
        height: 0
    
    to
        height: 450px
    
#drawer
    // animation-name: drawerOpen
    // animation-duration: 2s
    height: 100%

    
.drawerItem
    padding: 10px
    cursor: pointer


#underline
    width: 100%
    height: 2.5px
    margin-top: 15px
    align-self: flex-end
    left: -100%
    background: $c-secondary
    position: absolute
    transition: all .3s ease-Out
    bottom: 0
.drawerItem:hover #underline
    left: 0
</style>
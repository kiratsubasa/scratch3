<template lang="pug">

div#menuWrapper
    div#menuBar
        router-link#Lego(to='/')
        div.menuItem(v-for='item in menuList')
            router-link#menuItemLink(:to='item.link' style="color: #28292D; text-decoration:none; font-weight: bold;") {{item.title}}
        .menuIconContainer(@click='drawerStatus = !drawerStatus')
            .menuIconBar1
            .menuIconBar2
            .menuIconBar3
        SearchBar.searchBar-Header(:searchPlaceholder='searchPlaceholder' :search-lists='searchLists')
        
    div.meunDrawer(v-if='drawerStatus')
        div.drawerItem(v-for='item in menuList' @click='drawerStatus = !drawerStatus') 
            router-link(:to='item.link' style="color: black; text-decoration:none;") {{item.title}}
    

</template>


<script>
import SearchBar from './searchBar.vue'
export default {
    components: {
        SearchBar
    },
    data() {
        return {
            searchPlaceholder: "Search All",
            drawerStatus: false,
            searchLists: [
                {title: '最新消息',link: '/newsPage'},
                {title: '法規與政策',link: 'lawPage/mark1'},
                {title: '計畫簡介',link: '/planIntro'},
                {title: '教學資源',link: '/tutorialPage'},
                {title: '成果專區',link: '/resultPage'},
                {title: '美感人才',link: '/staffPage/mark1'},
                {title: '活動報名',link: '/activityPage/mark1'},
                {title: '網網相連',link: '/otherWeb'}
            ]
        }
    },
    props: ['menu-list'],

    
    methods: {

    }
}       
</script>

<style lang="sass">
#menuWrapper
    padding-bottom: 5px
    background-color: #FBE2E5
#menuBar
    display: flex
    flex-wrap: nowrap
    justify-content: flex-end
    padding: 10px
    padding-top: 10px
    //-webkit-box-shadow: 1px 10px 12px -10px rgba(0,0,0,0.37)
    //box-shadow: 1px 10px 12px -10px rgba(0,0,0,0.37)
    //-webkit-box-shadow: 1px 10px 15px -15px #D1B1B4
    //box-shadow: 1px 10px 15px -15px #D1B1B4

@media all and (min-width: 1024px)
    .menuItem
        margin-top: 10px
        margin-right: 5px
        display: block
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
    background-image: url("https://drive.google.com/uc?export=view&id=1vNfy-ybPDi8slU-WrdFd9Km3GDnOH4c4")
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
.menuIconContainer
    cursor: pointer
    

.drawerItem
    padding: 10px
    cursor: pointer
.drawerItem:hover
    background: #D1B1B4
    
#Lego
    padding: 0
.router-link-active
    //background: #F5DC79
    background: #D1B1B4
    //border-radius: 50px
    // padding: 5px
    // padding-top: 2px
    // padding-bottom: 2px
#menuItemLink
    padding: 5px

</style>
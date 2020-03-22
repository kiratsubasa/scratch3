<template lang="pug">
.listPageContent
    SearchBar.searchBar-list(:searchPlaceholder='searchPlaceholder' :search-lists='articleList')
    h1#listPageTitle {{pageTitle}}
    .markBlockContainer
        router-link.markBlock(style="color: #333; text-decoration: none;" v-for='(typ,t) in tabs' :key='t' :to="typ") {{typ}}
        
</template>


<script>
import SearchBar from '@/components/searchBar.vue'
// import { ListArticles } from '@/api/Articles';
export default {
    components: {
        SearchBar
    },
    props: ['page-title','search-placeholder','tabs','articleList'],
    data() {
        return {
        }
    },
    watch: {
        
    },
    created() {
        // this.ApiListArticles(2);
    },
    mount(){
        
    },
    methods: {
        
    }
}

</script>

<style lang="sass">
@import "@/style/common.sass"
</style>


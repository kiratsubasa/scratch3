<template lang="pug">
#searchBox(@click='searchStatus=false')
    .input-group
        input.search(type='text' :placeholder='searchPlaceholder' v-model='searchQuery' @keyup.enter="search")
        button.searchButton(v-on:click="isHidden=false" @click="search")
            i.mdi.mdi-magnify(aria-hidden='true')
        .search-previewBlock
            .search-preview(v-if="searchQuery" v-for='(item,index) in filteredResources' :key="index")
                        md-card(md-with-hover='' )
                            md-ripple
                                a#myhref(:href='item.link')
                                    md-card-header
                                        .sm-title {{item.title}}


</template>

<script>

export default {
    props: ['searchPlaceholder','search-lists'],
    data() {
        return {
            drawerStatus: false,
            searchQuery:'',
            isHidden: true,
            searchStatus: false
        }
    },
    computed: {
        filteredResources (){
            if(this.searchQuery){
                return this.searchLists.filter((item)=>{
                    return item.title.includes(this.searchQuery);
            })
            }else{
                return this.searchLists;
            }
        }
    },
    methods: {
        search: function(){
            this.$router.push({path: this.$route.path , query: {search: this.searchQuery} });
        }
    }
}
</script>

<style lang="sass">
@import "@/style/common.sass"

</style>


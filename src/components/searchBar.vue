<template lang="pug">
#app
    .input-group
        input.search(type='text' :placeholder='searchPlaceholder' v-model='searchQuery')
        button.searchButton(v-on:click="isHidden=false")
            i.mdi.mdi-magnify(aria-hidden='true')
        div(v-if="searchQuery" v-for='(item,index) in filteredResources' :key="index")
                    md-card(md-with-hover='' )
                        md-ripple
                            a#myhref(:href='item.link')
                                md-card-header()
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
}
</script>

<style lang="sass">

.search
    background-opacity: 0
    border-radius: 3px
    padding: 10px

.searchButton
    width: 35px
    // background-color: #F5DC79 
    background-color: #D1B1B4
    height: 40px

.input-group
    border: 1px #F5DC79 solid
    border: 1px #D1B1B4 solid
    border-radius: 5px
    width: 215px
    margin: auto
    
.search:focus 
    opacity: 0.8
    width: auto


</style>


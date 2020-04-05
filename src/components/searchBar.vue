<template lang="pug">
#searchBox(@click='searchStatus=false')
    .input-group
        input.search(type='text' :placeholder='searchPlaceholder' v-model='searchQuery' @keyup.enter="search")
        button.searchButton(@click="search")
            i.mdi.mdi-magnify(aria-hidden='true')


</template>

<script>

export default {
    props: ['searchPlaceholder','queryObj'],
    data() {
        return {
            drawerStatus: false,
            searchQuery:'',
            searchStatus: false
        }
    },
    computed: {

    },
    methods: {
        search: function(){
            this.$emit('changePathByQuery', this.searchQuery)
            // location.reload();
        }
    }
}
</script>

<style lang="sass">
@import "@/style/common.sass"

</style>


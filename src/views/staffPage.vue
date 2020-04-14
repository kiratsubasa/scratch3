<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}} 
    router-view

</template>

<script>

export default {
    components: {
        
    },
    data() {
        return {
            searchPlaceholder: "關鍵字",
            pageTitle: '美感人才'
        }
    },
    created() {
        
    },
    watch:{
        
    },
    methods:{
        
    }
}
</script>

<style lang="sass">
.staffSel
    max-width: 1350px
    margin: auto
</style>

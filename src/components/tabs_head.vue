<template lang="pug">
.listPageContent
    h1#listPageTitle {{pageTitle}}
    .markBlockContainer
        router-link.markBlock(style="color: #333; text-decoration: none;" v-for='(typ,t) in tabs' :key='t' :to="typ") {{typ}}
        
</template>


<script>

export default {
    components: {
        
    },
    props: [],
    data() {
        return {
            pageTitle: '',
            searchPlaceholder: '',
            tabs: ['最新消息','跨域薈萃','視覺藝術','成果消息'],

        }
    },
    watch: {
        
    },
    created() {
        
        this.pageTitle = this.$route.params.pageid;
    },
    methods: {
        
    }
}

</script>

<style lang="sass">
@import "@/style/common.sass"
</style>


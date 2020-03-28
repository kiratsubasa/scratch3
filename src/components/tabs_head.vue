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
    props: ['tabs'],
    data() {
        return {
            pageTitle: '',
            searchPlaceholder: ''

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


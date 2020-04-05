<template lang="pug">
.listPageContent
    h1#listPageTitle {{pageTitle}}
    .markBlockContainer
        router-link.markBlock(style="color: #707070; text-decoration: none;" v-for='(typ,t) in tabs' :key='t' :to="typ") {{typ}}
        
</template>


<script>
export default {
    components: {
        
    },
    props: ['tabs','page-title'],
    data() {
        return {
            searchPlaceholder: ''

        }
    },
    watch: {
        
    },
    created() {
    },
    methods: {
        
    }
}

</script>

<style lang="sass">
@import "@/style/common.sass"
</style>


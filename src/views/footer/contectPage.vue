<template lang="pug">
.contactContainer
    h1#listPageTitle {{pageData.title}}
    .contactFlexContainer
        .HTMLContainer(v-html="pageData.body")
        .contactContent 
            messageAndContact
    
</template>
<script>
import { GetPage } from "@/api/client/Page";
import messageAndContact from '@/components/messageAndContact.vue'
export default {
    components: {
        messageAndContact
    },
    data(){
        return{
            pageData: {}
        }
    },
    created() {
        this.ApiGetPages(2, this.$route.params.pageid);
    },
    methods: {
        ApiGetPages(pid, id) {
            GetPage(pid, id)
                .then(response => {
                    this.pageData = response.data;
                })
                .catch(err => {
                    console.log(err);
                });
            },
    }
}
</script>
<style lang="sass">
@import "@/style/common.sass"
.contactContainer
    max-width: 1350px
    min-height: 960px
    padding-top: 30px
    margin: auto
.contactFlexContainer
    max-width: 100%
    display: flex
    flex-direction: row
    padding-bottom: 135px
.contactContent
    width: 49%
    padding: 37px 44px 37px 44px
    background-color: $c-secondary
.HTMLContainer
    width: 49%
    text-align: left
</style>
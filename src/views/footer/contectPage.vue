<template lang="pug">
.contactContainer
    h1#listPageTitle {{pageData.title}}
    .HTMLContainer(v-html="pageData.body")
    .contactContent 
        messageAndContact() 
    
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
.contactContainer
    max-width: 1280px
    min-height: 960px
    padding: 30px
    margin: auto


.contactContent
    

</style>
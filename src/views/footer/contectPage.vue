<template lang="pug">
.contactContainer
    h1#listPageTitle {{pageData.title}}
    .HTMLContainer(v-html="pageData.body")
    
</template>
<script>
import { GetPage } from "@/api/client/Page";
import { ContactProject } from "@/api/client/Project";

export default {
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

.contactFlexContainer
    width: 80%
    margin: auto
    display: flex
    flex-wrap: wrap
    flex-direction: row
    align-content: center
    justify-content: centers

.contactFlex
    min-width: 50%
    text-align: left
    //border: 1px solid #F2DCE0
    margin-top: 50px

.contactContent
    margin-top: 5px


</style>
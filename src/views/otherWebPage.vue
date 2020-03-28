<template lang="pug">
.PathText 你的位置 : 首頁 > {{pageTitle}}
    .webContainer
        h1#listPageTitle {{pageTitle}}
        .webFlexContainer
            .webFlex(v-for='web in webList')
                a.webLink#myhref(:href="web.url" target="_blank" )
                    img.webImg(:src="web.media")
                    .webTitle {{web.title}}
        
</template>

<script>
import { GetPage } from '@/api/client/Page';
export default {
    data(){
        return{
            pageTitle: "網網相連",
            webList: [],
            data: ''
        }
    },
    created() {
        this.ApiGetPage(2,this.$route.params.pageid);
    },
    methods: {
        ApiGetPage(project, id) {
            GetPage(project, id)
                .then(response => {
                    this.data = response.data;
                    this.pageTitle = this.data.title;
                    this.webList = this.data.type.link;
                })
                .catch(err => {
                console.log(err);
            });
        }
    }

}
</script>

<style lang="sass">
.webContainer
    max-width: 1280px
    min-height: 1500px
    // border: 1px #ccc solid
    margin: auto
    padding: 100px


.webFlexContainer
    display: flex
    flex-wrap: wrap
    flex-direction: row

.webFlex
    width: 200px
    margin: 25px

.webTitle
    width: 200px
    line-height: 30px
    text-align: center
    font-size: 18px

.webImg
    width: 200px
    height: auto
</style>
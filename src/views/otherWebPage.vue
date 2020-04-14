<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}}
    .webContainer
        h1#listPageTitle {{pageTitle}}
        .webFlexContainer
            .webFlex(v-for='web in webList')
                a.webLink#myhref(:href="web.url" target="_blank" )
                    .webImg(:style="{'background-image': 'url(' + web.media_url + ')'}")
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
                    //err path detect
                    // if(this.data.type.template!='links')
                        // this.$router.push({ path: '/error'});
                    this.pageTitle = this.data.title;
                    this.webList = this.data.type.link.links;
                    console.log(this.webList)
                })
                .catch(err => {
                console.log(err);
            });
        }
    }

}
</script>

<style lang="sass">
@import "@/style/mainPage.sass"
.webContainer
    max-width: 1350px
    min-height: 1500px
    // border: 1px #ccc solid
    margin: auto
    // padding: 100px


.webFlexContainer
    display: flex
    flex-wrap: wrap
    flex-direction: row

.webFlex
    width: 320px
    height: 320px
    margin: 8px
    margin-bottom: 70px

.webImg
    width: 320px
    height: 320px
    background-size: cover
    position: relative

.webTitle
    padding-top: 25px
    padding-bottom: 25px
    height: 75px
    width: 320px
    background-color: $c-secondary
    opacity: 0.75
    line-height: 30px
    text-align: center
    font-size: 25px
    color: $c-text
    position: absolute
    bottom: 0px
    overflow: hidden
.webTitle:hover
    height: 320px
    background-color: $c-primary
    color: $c-secondary
</style>
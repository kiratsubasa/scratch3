<template lang="pug">
#hrArticleApp
    .authorContainer
        .authorImg(:style="{'background-image': 'url(' + data.avatar.info.src + ')'}")
        h1.articlePageTitle {{data.name}}
        .authorStage {{data.project_job_title}}
        .authorText {{data.intro}}
        .authorText 服務單位：{{data.agency}}
        .authorText 職稱：{{data.job_title}}
        .authorText 電子信箱：{{data.email}}
        .authorText 電話：{{data.phone}}
        .authorText 服務地區：{{data.area}}
        br
        #hashTag(v-for='tag in data.tags') &#35;{{tag.name}}

</template>

<script>
import { GetHumanResource } from '@/api/client/HumanResource';
export default {
    props: [],
    components: {
    },
    data() {
        return {
            data: {}
        }
    },
    created() {
        var id = this.$route.params.postid;
        this.ApiGetPage(2,id);
    },
    watch:{
    },
    methods: {
        ApiGetPage(project, id) {
            GetHumanResource(project, id)
                .then(response => {
                    this.data= response.data;
                    console.log(this.data);
                })
                .catch(err => {
                console.log(err);
            });
        },
    }
}

</script>

<style lang="sass" scoped>
@import "@/style/common.sass"

.articlePageTitle
    text-align: left
    line-height: 1.8em
    margin: 10px
    color: $c-primary
    text-align: center
    padding: 0px

.authorContainer
    background-color: $c-secondary
    width: 960px
    min-height: 960px
    margin: auto
    padding: 30px
.authorText
    font-weight: 500
    font-size: 16px
    text-align: center
    line-height: 20px
    color: $c-text
    margin: 5px
.authorStage
    font-weight: 500
    font-size: 16px
    text-align: center
    line-height: 20px
    color: $c-text
    margin: 10px
#hashTag
    float: none
.authorImg
    margin-bottom: 20px
    width: 180px
    height: 200px
    margin: auto
    background-size: cover
    background-position: center
@media only screen and (max-width:480px)
    .authorContainer
        width: 100%
    .authorText
        font-size: 16px

</style>
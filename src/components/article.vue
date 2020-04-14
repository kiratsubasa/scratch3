<template lang="pug">
#PageView
    h1#listPageTitle {{data.title}}
    .articlePageJumpbar(v-if='data.media' :style="{'background-image': 'url(' + data.media.info.src + ')'}")
    .HTMLContainer(v-html="data.body")
    .hashTagContainer
        #hashTag(v-for='tag in data.tags') &#35;{{tag.name}}
    .dateNote 發布日期 {{data.created_at.split("T")[0]}}
    .dateNote 更新日期 {{data.updated_at.split("T")[0]}}
    

</template>

<script>
import diolog from '@/components/diolog.vue'
import { GetPage } from '@/api/client/Page';
export default {
    props: [],
    components: {
        diolog
    },
    data() {
        return {
                data: {}
            }
    },
    created() {
        var id = this.$route.params.pageid;
        this.ApiGetPage(2,id);
    },
    methods: {
        ApiGetPage(project, id) {
            GetPage(project, id)
                .then(response => {
                    
                    this.data= response.data;
                    console.log(this.data)
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
#PageView
    max-width: 1350px
    min-height: 960px
    padding-top: 30px
    margin: auto

.HTMLContainer
    h1
        color: #444
    h1,h2,h3,p,span
        margin: 10px
        text-align: left
        line-height: 25px
    width: 80%
    margin: auto
@media all and (max-width: 760px)
    .HTMLContainer
        width: 100%
        margin: auto
        text-align: center
        img
            width: 100%

.dateNote
    max-width: 1080px
    margin: auto
    margin-top: 10px
    margin-bottom: 10px
    padding-left: 10px

.hashTagContainer
    max-width: 1080px
    margin: auto
    margin-top: 10px
    margin-bottom: 10px
    padding-left: 10px
#hashTag
    float: none
</style>
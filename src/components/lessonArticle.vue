<template lang="pug">
#newsApp
    h1.articlePageTitle {{data.title}}
    SlideShow(:jump-bar="jumpBar")
    .articlePageJumpbar(v-if='data.sliders' :style="{'background-image': 'url(' + data.sliders[0].info.src + ')'}")
    .HTMLContainer(v-html="data.body")
    div
        a#hashTag(v-for='tag in data.tags') &#35;{{tag.name}}
    .dateNote 發布日期 {{data.created_at.split("T")[0]}}
    .dateNote 更新日期 {{data.updated_at.split("T")[0]}}
    

</template>

<script>
import SlideShow from '@/views/mainPage/SlideShow.vue'
import { GetLesson } from '@/api/client/Lesson';
export default {
    props: [],
    components: {
        SlideShow
    },
    data() {
        return {
            data: {
                jumpBar: []
            }
        }
    },
    created() {
        var id = this.$route.params.postid;
        this.ApiGetPage(2,id);
    },
    methods: {
        ApiGetPage(project, id) {
            GetLesson(project, id)
                .then(response => {
                    this.data= response.data;
                    var slider = this.data.sliders;
                    for(var i=0;i<slider.length;i++){
                        var data = {
                            title: '',
                            sub_title: '',
                            media: slider[i]
                        }
                        console.log(data);
                        this.jumpBar.push(data);
                    }
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

.articlePageVideoPlayer
    margin: 50px

.articlePageJumpbar
    background-size: cover
    max-width: 1080px
    height: 640px
    margin: auto
    background-position: center


.articlePageTitle
    text-align: left
    line-height: 1.8em
    margin: 40px
.articlePageContent
    // margin: 40px
    // margin-left: 30%
    text-align: left
    font-size: 15px
    line-height: 30px
    color: #444
    // padding-top: 50px
    margin: 50px
    // margin: 100px
    border-bottom: 1px #aaa solid
h1
    color: #444
h1,h2,h3,p,span
    margin: 10px
    text-align: left
    line-height: 25px


</style>
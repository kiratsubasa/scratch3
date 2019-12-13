<template lang="pug">
#app
    .listinAtriclePageContent {{articleIndex}}
        h1.listPageTitle 更多{{pageTitle}}
        .listinArticle(v-for='n in 3')
            .Listbtn(@click="articleList.length>articleIndex+n-3 ? changePath(n+articleIndex) : changePath(n)" style="color: #333; text-decoration:none;")
                .ListContent
                    .ListImage(:style="{'background-image': 'url(' + articleList[n+articleIndex].src + ')'}") 
                    .ListTextBlock 
                        .ListTypeBlock {{articleList[n+articleIndex].type}}
                        .ListTitle {{articleList[n+articleIndex].title}}
                        .ListContent {{articleList[n+articleIndex].content.text[0]}}
</template>

<script>
export default {
    components: {
    },
    props: ['article-list' ,'page-title'],
    data() {
        return {
            articleIndex: this.$route.query.articleIndex,
        }
    },
    methods: {
        changePath: function(idx){
            this.$router.push({ path: this.articleList[idx].link , query: {articleIndex: idx} })
        }
    }
}

</script>

<style lang="sass">
.listinAtriclePageContent
    max-width: 1280px
    margin: auto
    padding: 25px
    display: flex
    flex-wrap: wrap
    justify-content: center
    //border: 1px #ccc solid
    margin-bottom: 15px
    -webkit-box-shadow: 1px 3px 3px 1px rgba(0,0,0,0.30)
    box-shadow: 1px 3px 3px 1px rgba(0,0,0,0.3)

.listinArticle
    width: 300px
</style>


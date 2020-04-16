<template lang="pug">
#app
    .listinAtriclePageContent
        h2#listPageTitle 更多{{pageTitle}}
        .listinArticle(v-for='n in 4')
            .Listbtn(@click="articleList.length>articleIndex+n-4 ? changePath(n+articleIndex) : changePath(n)" style="color: #333; text-decoration:none;")
                .ListContent
                    .ListImage(:style="{'background-image': 'url(' + articleList[n+articleIndex].src + ')'}") 
                    .ListTextBlock 
                        .listTypeContainer
                            strong.tagStrong(v-for='typ in articleList[n+articleIndex].type') {{typ}}
                        .ListTitle {{articleList[n+articleIndex].title}}
                        .ListContent {{articleList[n+articleIndex].content.text[0]}}
                        .listMore ...
        .listBtnBlock
            span.prevBut(@click='plusPage(-1)') < 上一頁
            span.nextBut(@click='plusPage(1)') 下一頁 >
</template>

<script>
export default {
    components: {
    },
    props: ['article-list' ,'page-title'],
    data() {
        return {
            articleIndex: 1,
        }
    },
    methods: {
        changePath: function(idx){
            this.$router.push({ path: this.articleList[idx].link })
        },
        plusPage: function(p){
            this.articleIndex += p;
            var item = document.getElementsByClassName("Listbtn");
            for(var i=p ; i<item.length ; i++){
                if(i==4)
                    break;
                item[i].className += 'active';
            }
        }
    }
}

</script>

<style lang="sass">
@import "@/style/common.sass"
.listinAtriclePageContent
    max-width: 1280px
    margin: auto
    margin-top: 10px
    margin-bottom: 10px
    padding: 25px
    display: flex
    flex-wrap: wrap
    justify-content: centerx
    background-color: $c-primary
    -webkit-box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.1)
    box-shadow: 0px 1px 6px 2px rgba(0,0,0,0.1)

.listinArticle
    width: 300px
.listMore
    color: $c-primary
.tagStrong
    margin-right: 10px
.listBtnBlock
    width: 100%

.Listbtn.active
    width: 50%
    transition: 0.6s

.prevBut
    cursor: pointer
    position: relative
    color: #444
    font-weight: bold
    font-size: 1em
    transition: 0.6s ease
    border: 1px $c-secondary solid
    padding: 5px
    border-radius: 50px
    background-color: $c-bg
    // width: 100px
    // overflow: hidden
    white-space: nowrap
    &:hover
        padding-left: 100px

.nextBut
    cursor: pointer
    position: relative
    color: #444
    font-weight: bold
    font-size: 1em
    transition: 0.6s ease
    border: 1px $c-secondary solid
    padding: 5px
    border-radius: 50px
    background-color: $c-bg
    overflow: hidden
    white-space: nowrap
    width: 100px
    &:hover
        padding-right: 100px



.prevBut:hover, .nextBut:hover
    background-color: $c-primary
    
</style>


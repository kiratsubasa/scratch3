<template lang="pug">
.listPageContent 
    SelectorHead(:page-title='pageTitle' v-on:bookmarkList="bookmarkList")
    .cardContainer      
        #Card(v-for="card in theArticleList")  
            .cardcontentContainer
                .cardImage(:style="{'background-image': 'url(' + card.cover.info.src + ')'}") 
                .CardTextBlock
                    .ListTypeFlex
                        .ListTypeBlock(v-for='tag in card.categories') {{tag.name}}
                    .ListTextTitle {{card.title}}
                    .ListTypeFlex
                        .ListTypeBlock(v-for='tag in card.specialties') {{tag.name}}
                    .ListTypeFlex
                        .ListTypeBlock(v-for='tag in card.authors') {{tag.name}}
                        .ListTypeBlock.withLine {{card.area}}
                        .ListTypeBlock {{card.stage}}
                    #textBtn(@click='changePath(card.id)') LEARN MORE

    a#myhref.pageBtn.firstPage(v-if="currentPage!=1" @click="setPage(1)") {{ firstPage }}
    a#myhref.pageBtn.previous(v-if="currentPage!=1" @click="setPage(currentPage - 1)") {{ prev }}
    select.pageSel(v-model="currentPage")
        option(v-for="idx in totalPage") {{ idx }}
    a#myhref.pageBtn.next(v-if="currentPage!=totalPage" @click="setPage(currentPage + 1)") {{ next }}
    a#myhref.pageBtn.finalPage(v-if="currentPage!=totalPage" @click="setPage(totalPage)") {{ finalPage }}
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script>
import SelectorHead from '@/components/bookmarkSelector.vue'
export default {
    components: {
        SelectorHead
    },
    props: ['page-title'],
    data() {
        return {
            theArticleList: [],
            pageDataNum: 12,
            currentPage: 1,
            totalPage: 1,
            firstPage: '第一頁',
            prev: '上一頁',
            next: '下一頁',
            finalPage: '最末頁',
        }
    },
    watch: {
        // currentPage: function(page){
        //     this.$router.push({query: {page: page} });
        //     window.scrollTo(0,0);
        // },
        // theArticleList: function(){
        //     this.pageInit();
        // }
    },
    beforeMount(){
        // this.pageInit();
        // if(this.$route.query.page)
        //     this.currentPage = this.$route.query.page;
    },
    methods: {
        bookmarkList: function(data){
            this.theArticleList = data;
        },
        pageInit: function(){
            this.totalPage = Math.ceil(this.theArticleList.length/this.pageDataNum);
        },
        setPage: function(page) {
            if (page <= 0 || page > this.totalPage) {
                return;
            }
            else{
                this.currentPage = page;
            }
        },
        changePath: function(idx){
            this.$router.push({ path: '../post/'+idx})
        },
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150
        setTimeout(function () {
            Velocity(
                el,
                { opacity: 1, height: '1.6em' },
                { complete: done }
                )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
        setTimeout(function () {
            Velocity(
            el,
            { opacity: 0, height: 0 },
            { complete: done }
            )
        }, delay)
    }
    }
}

</script>

<style lang="sass">
@import "@/style/common.sass"
#Card
    width: 24%
    margin-left: 0.5%
    margin-right: 0.5%
    color: $c-text
    text-decoration: none
    background-color: $c-secondary
    margin-bottom: 50px
.CardTextBlock 
    padding: 25px
    text-align: left
.cardContainer
    display: flex
    flex-wrap: wrap
    margin-bottom: 50px
.cardImage
    width: 100%
    height: 290px
    background-size: cover
.ListTextTitle
    font-size: 25px
    line-height: 27px
    color: $c-primary
    text-align: center
    margin-bottom: 10px
.ListTypeFlex
    display: flex
    justify-content: center
    flex-direction: row
    margin-bottom: 10px
#textBtn
    color: $c-secondary
    width: 143px
    height: 39px
    background-color: $c-primary
    padding: 11px
    text-align: center
    cursor: pointer
    margin-bottom: 10px
    margin: auto
    font-size: 12px
    font-weight: 600
    &:hover
        opacity: 0.75
.withLine
    border-left: 1px solid $c-primary
    border-right: 1px solid $c-primary
    opacity: 0.75
@media only screen and (max-width: 480px)
    #Card
        width: 47%
        margin-left: 1.2%
        margin-right: 1.2%
    .cardImage
        height: 178px
        width: 100%
    .ListTextTitle
        font-size: 16px
        line-height: 20px
        margin-bottom: 5px
    .CardTextBlock 
        padding: 10px
    .ListTypeFlex
        margin-bottom: 5px
    #textBtn
        width: 116px
        height: 32px
        font-size: 10px
        padding: 6px
    
</style>


<template lang="pug">
#app
    .listPageContent 
        SelectorHead(:page-title='pageTitle' v-on:bookmarkList="bookmarkList")
        .cardContainer      
            #Card(v-for="card in theArticleList")  
                .cardcontentContainer
                    .cardImage(:style="{'background-image': 'url(' + card.cover.info.src + ')'}") 
                    .CardTextBlock(@click="changePath(idx+(currentPage-1)*pageDataNum-1)")
                        .ListTypeBlock(v-for='tag in card.categories') {{tag.name}}
                        .ListTitle {{card.title}}
                        .ListTypeBlock(v-for='tag in card.specialties') {{tag.name}}
                        .ListTypeBlock(v-for='tag in card.authors') {{tag.name}}

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
            this.$router.push({ path: this.theArticleList[idx].link})
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
    width: 240px
    border: 1px $c-primary solid
    border-radius: 3px
    margin: 10px
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3)
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.3)
    color: #333
    text-decoration:none

.CardTextBlock 
    text-align: left
.cardContainer
    display: flex
    flex-wrap: wrap
    margin-bottom: 50px
.cardImage
    width: 238px
    height: 180px
    background-size: cover
</style>


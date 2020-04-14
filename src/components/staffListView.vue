<template lang="pug">
.listPageContent 
    SelectorHead.staffSel(:page-title='pageTitle' :tab-name='tabName' :specialtyList='specialtyList')
    .cardContainer      
        #Card(v-for="card in articleList")  
            .cardcontentContainer
                .cardImage(:style="{'background-image': 'url(' + card.avatar.info.src + ')'}") 
                .CardTextBlock
                    .ListTypeFlex
                        .ListTypeBlock(v-for='tag in card.categories') {{tag.name}}
                    .ListTextTitle {{card.name}}
                    .ListTypeFlex
                        .ListTypeBlock(v-for='tag in card.specialties') {{tag.name}}
                    .ListTypeFlex
                        .ListTypeBlock(v-for='tag in card.tag') {{tag.name}}
                        .ListTypeBlock {{card.agency}}
                        .ListTypeBlock.withLine {{card.job_title}}
                        .ListTypeBlock {{card.area}}
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
import SelectorHead from '@/components/Selector.vue'
import { ListHumanResourcesOfCategory } from "@/api/client/HumanResource";
import { ListHumanResourceCategories } from "@/api/client/HumanResourceCategory";
import { ListHumanResourceSpecialties } from "@/api/client/HumanResourceSpecialty";
import { SearchHumanResources } from "@/api/client/Search";
export default {
    components: {
        SelectorHead
    },
    props: [],
    data() {
        return {
            pageTitle: "美感人才",
            pageDataNum: 12,
            currentPage: 1,
            totalPage: 1,
            firstPage: '第一頁',
            prev: '上一頁',
            next: '下一頁',
            finalPage: '最末頁',
            tabData: [],
            tabName: [],
            cate: '',
            articleList: [],
            specialtyList: [],
        }
    },
    watch: {
        currentPage: function(page){
            this.changePage(page);
            window.scrollTo(0,0);
        },
        '$route.query': function(route){
            this.ApiSearch(route);
        }
    },
    created() {
        this.ApiGetHrCate(2);
        this.ApiGetHrSpe(2);
        if(this.$route.params.categoryid=='all'){
            this.ApiSearch(this.$route.query);
        }
    },
    methods: {
        changePage(page){
            this.currentPage = page;
            if(this.$route.params.categoryid=='all'){
                this.ApiSearch(this.$route.query);
            }
            else{
                this.ApiGetHrwithCate(this.cate);
            }
        },
        ApiSearch(qureys){
            var data;
            if(qureys.specialty!=-1){
                data={
                    specialty_id: qureys.specialty,
                    column: qureys.type,
                    pattern: qureys.search
                }
            }
            else{
                data={
                    project_id: 2,
                    column: qureys.type,
                    pattern: qureys.search
                }
            }
            SearchHumanResources(data, {page: this.currentPage})
            .then(response => {
                this.articleList = response.data;
                this.totalPage = response.meta.last_page;
            })
            .catch(err => {
                this.$router.push('/error')
                console.log(err);
            })
        },
        ApiGetHrwithCate(id){
            ListHumanResourcesOfCategory(id,this.currentPage)
                .then(response => {
                    this.articleList = response.data;
                    this.totalPage = response.meta.last_page;
                })
                .catch(err => {
                console.log(err);
            });
        },
        ApiGetHrCate(id) {
            ListHumanResourceCategories(id)
                .then(response => {
                    this.tabData = response.data;
                    var cate = this.$route.params.categoryid;
                    var cateStatus=false;
                    for(var i=0;i<this.tabData.length;i++){
                        this.tabName.push(this.tabData[i].name);
                        if(cate==this.tabData[i].name){
                            this.ApiGetHrwithCate(this.tabData[i].id);
                            cateStatus=true;
                            this.cate = this.tabData[i].id;
                        }
                    }
                    if(!cateStatus && cate != 'all')
                        this.$router.push({ path: this.tabData[0].name});
                })
                .catch(err => {
                console.log(err);
            });
        },
        ApiGetHrSpe(id) {
            ListHumanResourceSpecialties(id)
                .then(response => {
                    this.specialtyList = response.data;
                    this.specialtyList.unshift({id: -1,name: '不分領域'});
                })
                .catch(err => {
                console.log(err);
            });
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


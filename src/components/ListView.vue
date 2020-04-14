<template lang="pug">
#app
    //- SearchBar.searchBar-list(:searchPlaceholder='searchPlaceholder' :search-lists='articleList')
    .listPageContent
        transition-group(name="staggered-fade" tag="ul" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave")
            .List(v-for="idx in pageDataNum" :key="idx" :data-index="idx")
                .Listbtn(v-if="articleList[idx-1]")
                    .ListContainer
                        .ListTextBlock(@click="changePath(idx-1)")
                            .dateNote 更新日期 {{articleList[idx-1].updated_at.split("T")[0]}}
                            .ListTitle {{articleList[idx-1].title}}
                            .ListContent {{stripHTML(articleList[idx-1].body)}}
                            .listTypeContainer
                                    router-link.ListTypeBlock(style="color: #707070; text-decoration: none;" v-for='(typ,t) in articleList[idx-1].categories' :key='t' :to="'/'+typ") {{typ.name}}
                                    
                        .Listhead
                            .ListImage(v-if="articleList[idx-1].media!=null" :style="{'background-image': 'url(' + articleList[idx-1].media.info.src + ')'}") 
                                
    
        a#myhref.pageBtn.firstPage(v-if="cp!=1" @click="setPage(1)") {{ firstPage }}
        a#myhref.pageBtn.previous(v-if="cp!=1" @click="setPage(cp-1)") {{ prev }}
        select#pageSel(v-model="cp")
            option(v-for="idx in totalPage") {{ idx }}
        a#myhref.pageBtn.next(v-if="cp!=totalPage" @click="setPage(cp+1)") {{ next }}
        a#myhref.pageBtn.finalPage(v-if="cp!=totalPage" @click="setPage(totalPage)") {{ finalPage }}
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

<script>
import SearchBar from '@/components/searchBar.vue'
export default {
    components: {
        SearchBar
    },
    props: ['page-title','search-placeholder','article-list','totalPage','currentPage'],
    data() {
        return {
            pageDataNum: 12,
            firstPage: '第一頁',
            prev: '上一頁',
            next: '下一頁',
            finalPage: '最末頁',
            cp: 1
        }
    },
    watch: {
        'cp': function(p){
            this.$router.push({query: {page: p} });
            window.scrollTo(0,0);
        }
    },
    created() {
    },
    mount(){

    },
    methods: {
        stripHTML: function(input) {
            var output = '';
            if(typeof(input)=='string'){
                var output = input.replace(/(<([^>]+)>)/ig,"");
                output = output.replace(/&nbsp;/ig, "");
            }
            return output;
        },
        changePath: function(idx){
            this.$router.push({ path: '/post/'+this.articleList[idx].id})
        },
        setPage: function(page) {
            if (page <= 0 || page > this.totalPage) {
                return;
            }
            else{
                this.cp=page;
            }
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
</style>


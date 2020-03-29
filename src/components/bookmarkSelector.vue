<template lang="pug">
#app
    tabs(:tabs='tabName' :page-title='pageTitle')
    .selectContainer 領域
        select#mySelect(v-model='mark' placeholder="請選擇類別")
            option(v-for='(item,i) in bookmarkList') {{item.name}}
    
    //- SearchBar.searchBar-list(:searchPlaceholder='searchPlaceholder' :search-lists='theArticleList')
</template>

<script>
import SearchBar from '@/components/searchBar.vue'
import tabs from '@/components/tabs_head.vue'
import { ListLessonCategories } from '@/api/client/LessonCategory';
import { ListLessonSpecialties } from '@/api/client/LessonSpecialty';
export default {
    components: {
        tabs,
        SearchBar
    },
    props: ['page-title'],
    data() {
        return {
            tabName: [],
            mark: '請選擇類別',
            bookmarkList: []
        }
    },
    created() {
        this.ApiGetLessCate(2);
        this.ApiGetLessSpe(2);
    },
    methods: {
        ApiGetLessCate(id) {
            ListLessonCategories(id)
                .then(response => {
                    var tabData = response.data;
                    for(var i=0;i<tabData.length;i++){
                        this.tabName.push(tabData[i].name);
                    }
                })
                .catch(err => {
                console.log(err);
            });
        },
        ApiGetLessSpe(id) {
            ListLessonSpecialties(id)
                .then(response => {
                    this.bookmarkList = response.data;
                    
                })
                .catch(err => {
                console.log(err);
            });
        }
    }
}

</script>

<style lang="sass">
.selectContainer
    border-bottom: 1px #D1B1B4 solid
    width: 150px
#mySelect
    border: 1px #D1B1B4 solid
    width: 150px
</style>


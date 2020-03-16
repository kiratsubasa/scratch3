<template lang="pug">
.webMapContainer
    h1#listPageTitle 網站地圖
    .webMapFlexContainer
            router-link#webMapFlex(v-for='titles in mapTitleLists' :value='mapTitleLists' :key='url' :to='titles.url') {{titles.title}}
                router-link#webMapSubtitle(v-for='contents in titles.content' :value='titles.content' :key='url' :to='contents.url') {{contents.title}}


</template>
<script>
export default {
    data(){
        return{
            mapTitleLists: [
                {title: '最新消息',url: '/newsPage'},
                {title: '法規與政策',url: 'lawPage/mark1', content: [{title:'組織',url:'lawPage/mark1'},{title:'教育通用',url:'lawPage/mark2'},{title:'技術與職業教育',url:'lawPage/mark3'},{title:'高等教育',url:'lawPage/mark4'},{title:'終身教育',url:'lawPage/mark5'},{title:'國際及兩岸教育',url:'lawPage/mark6'},{title:'師資培訓及藝術教育',url:'lawPage/mark7'},{title:'資訊及科技教育',url:'lawPage/mark8'},{title:'學生事務及特殊教育',url:'lawPage/mark9'},{title:'秘書(總務)',url:'lawPage/mark10'},{title:'人事',url:'lawPage/mark11'}]},
                {title: '計畫簡介',url: '/planIntro'},
                {title: '教學資源',url: '/tutorialPage'},
                {title: '成果專區',url: '/resultPage'},
                {title: '美感人才',url: '/staffPage/mark1',content: [{title:'總計畫團隊',url:'staffPage/mark1'},{title:'師培大學委員',url:'staffPage/mark2'},{title:'諮詢委員',url:'staffPage/mark3'},{title:'種子學校教師',url:'staffPage/mark4'},{title:'中等學校實驗教師',url:'staffPage/mark5'},{title:'國小階段實驗教師',url:'staffPage/mark6'}]},
                {title: '活動報名',url: '/activityPage/mark1'},
                {title: '網網相連',url: '/link'}
            ]
        }
    }
}
</script>
<style lang="sass">
@import "@/style/common.sass"
.webMapContainer
    max-width: 1280px
    min-height: 720px
    padding: 30px
    margin: auto

.webMapFlexContainer
    width: 80%
    margin: auto
    display: flex
    flex-wrap: wrap
    flex-direction: row
    align-content: center
    justify-content: centers
    // border: 1px solid #F2DCE0

#webMapFlex
    width: 200px
    
    text-align: left
    margin:20px
    line-height:25px
    decoration: none
    color: #555
    display: flex
    flex-wrap: wrap

#webMapSubtitle
    width: 80%
    margin: auto
    margin: 5px
    //border: 2px solid #500CF8
    decoration: none
    color: #555

#webMapFlex:hover
    color: $c-secondary
    text-decoration: none
    
#webMapSubtitle:hover
    color: $c-secondary
    text-decoration: none

</style>
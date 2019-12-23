<template lang="pug">
.webMapContainer
    h1#listPageTitle 網站地圖
    .webMapFlexContainer
            router-link#webMapFlex(v-for='titles in mapTitleLists' :value='mapTitleLists' :key='link' :to='titles.link') {{titles.title}}
                router-link#webMapSubtitle(v-for='subtitles in titles.subtitle' :value='titles.subtitle' :key='link' :to='subtitles.link') {{subtitles.title}}


</template>
<script>
export default {
    data(){
        return{
            mapTitleLists: [
                {title: '最新消息',link: '/newsPage'},
                {title: '法規與政策',link: 'lawPage/mark1', subtitle: [{title:'組織',link:'lawPage/mark1'},{title:'教育通用',link:'lawPage/mark2'},{title:'技術與職業教育',link:'lawPage/mark3'},{title:'高等教育',link:'lawPage/mark4'},{title:'終身教育',link:'lawPage/mark5'},{title:'國際及兩岸教育',link:'lawPage/mark6'},{title:'師資培訓及藝術教育',link:'lawPage/mark7'},{title:'資訊及科技教育',link:'lawPage/mark8'},{title:'學生事務及特殊教育',link:'lawPage/mark9'},{title:'秘書(總務)',link:'lawPage/mark10'},{title:'人事',link:'lawPage/mark11'}]},
                {title: '計畫簡介',link: '/planIntro'},
                {title: '教學資源',link: '/tutorialPage'},
                {title: '成果專區',link: '/resultPage'},
                {title: '美感人才',link: '/staffPage/mark1',subtitle: [{title:'總計畫團隊',link:'staffPage/mark1'},{title:'師培大學委員',link:'staffPage/mark2'},{title:'諮詢委員',link:'staffPage/mark3'},{title:'種子學校教師',link:'staffPage/mark4'},{title:'中等學校實驗教師',link:'staffPage/mark5'},{title:'國小階段實驗教師',link:'staffPage/mark6'}]},
                {title: '活動報名',link: '/activityPage/mark1'},
                {title: '網網相連',link: '/otherWeb'}
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
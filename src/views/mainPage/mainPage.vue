<template lang="pug">
#app
    SlideShow(:jump-bar="jumpBar")
    div.content
        div.contentBlock-1.contentBlock
                div(v-for='article in article')
                    a#myhref(:href="article.link")
                        div.imageBlock(:style="{'background-image': 'url(' + article.src + ')'}") 
                            div.imageMask {{article.title}}
        div.contentBlock-2.contentBlock
            div.blockTitle 最新消息 
                div.newsDer
            table
                tr.newsList(v-for='item in newList')
                    a#myhref(:href="item.link")
                        td
                            div.newsImage
                                img(:src='item.src')
                        td.newsTitle {{item.title}}
    div.content
        div.contentBlock-3.contentBlock
            a#myhref(:href="midArticle.link")
                div.midImageBlock(:style="{'background-image': 'url(' + midArticle.src + ')'}" )
                    div.imageMask {{midArticle.title}}
        div.contentBlock-4.contentBlock
                div(v-for='article in article')
                    a#myhref(:href="article.link")
                        div.imageBlock(:style="{'background-image': 'url(' + article.src + ')'}") 
                            div.imageMask {{article.title}}
</template>

<script>
import SlideShow from './SlideShow.vue'
export default {
    components: {
        SlideShow
    },
    data() {
        return {
            jumpBar: [
            {
                src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/03/45-2-e1525834452328.jpg',
                title: '公眾的美好',
                subtitle: '孫啟榕建築師：「我希望跟所有中學美術老師講：大家都曾有被美的畫面所感動的經驗，那些美的畫面，都不是純粹的美，',
                link: '/resultPage/result4'
            },
            {
                src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/12/新竹高中06.jpg',
                title: '美感紀錄｜播下美好生活種子',
                subtitle: '站在美感課程推廣執行的角度，我們常常思索什麼才是課程計畫的成果，我們都會明白在教學中形成性評量的重要，又怎麼會認為僅以「學生作品」抑或「教師教案」為教育計畫成果呢？',
                link: '/resultPage/result3'
            },
            {
                src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/02/35.jpg',
                title: '公眾的記憶',
                subtitle: '身處老台北的巷弄中，隱沒於繁華的信義大安捷運站後方，典型台灣1950~60年代出現的「步登公寓」',
                link: '/resultPage/result4'
            },
            {
                src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/07/170825_2017aura_012.jpg',
                title: '美感的「旅」提案 _ 慢速公路',
                subtitle: '家是旅行的錨點，在這裡出發，從旅途歸家，雖然是同一個地方，卻在相同重複中產生差異。',
                link: '/resultPage/result1'
            },
            ],
            
            newList: [
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png',title: '五種生活美感實踐',link: '/resultPage/result1'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/圖片-1.png',title: '生活中的某一課',link: '/resultPage/result1'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/59821222_10216261950555708_2566258000335470592_n.jpg',title: '「循環設計展」你在圈內嗎？',link: '/resultPage/result1'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/03/web-2.png',title: '設計教育創新實驗國際論壇',link: '/resultPage/result1'}
            ],
            article: [
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png',title:'五種生活美感實踐',link: '/resultPage/result1'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg',title:'美感紀錄｜播下美好生活種子',link: '/resultPage/result1'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/59821222_10216261950555708_2566258000335470592_n.jpg',title:'「循環設計展」你在圈內嗎？',link: '/resultPage/result1'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2018/07/170825_2017aura_012.jpg',title:'美感的「旅」提案 _ 慢速公路',link: '/resultPage/result1'}
            ],
            midArticle: {
                src:'https://www.aade.org.tw/website/wp-content/uploads/2018/05/曾老師2.jpg',
                title: '聽聽他/她眼中的美感教育',link: '/resultPage/result1'
            }
        }
    },
    methods: {
        
    }
}

</script>

<style lang="sass">
*
    transition: 0.6s
.content
    display: flex
    flex-flow: row wrap
    justify-content: center
    
.content > * 
    padding: 10px
    flex: 1 100%

    
@media all and (min-width: 0px)
    .midImageBlock
        height: 300px

    .contentBlock-1,.contentBlock-4
        justify-content: center
        display: flex
        flex-flow: row wrap

@media all and (min-width: 960px)
    .contentBlock
        flex: 1 0 0
        justify-content: center
        
    .midImageBlock
        width: 585px
        height: 430px
        margin: 10px
        justify-content: flex-end
    .contentBlock-1 ,.contentBlock-3,.contentBlock-4
        padding: 0
        margin: 0
        list-style: none
        display: -webkit-box
        display: -moz-box
        display: -ms-flexbox
        display: -webkit-flex
        display: flex
        -webkit-flex-flow: row wrap
        align-content: center
        flex-flow: row wrap
    .contentBlock-1 ,.contentBlock-3,.contentBlock-4,.contentBlock-2
        max-width: 600px

@media all and (min-width: 1440px)
    .contentBlock-1
        order: 1
        justify-content: flex-end
        display: flex
        flex-flow: row wrap    
    .contentBlock-2
        order: 2
        justify-content: flex-start
    .contentBlock-3
        order: 3
        justify-content: flex-end
    .contentBlock-4
        order: 4
        justify-content: flex-start
    .midImageBlock
        justify-content: center


.imageBlock
    width: 280px
    height: 210px
    margin-top: 10px
    margin: 10px
    line-height: 210px
    color: white
    font-size: 1.5em
    text-align: center
    background-size: cover

.midImageBlock
    margin-top: 10px
    margin: 10px
    line-height: 400px
    color: white
    font-size: 0em
    text-align: center
    background-size: cover

.midImageBlock:hover
    font-size: 1.8em
.imageMask
    opacity: 0
    height: 100%

.imageMask:hover
    // z-index: 1
    background: rgba(0,0,0,0.6)
    opacity: 1
    

.blockTitle
    position: relative
    padding: 10px
    font-size: 28px
    text-align: left
    font-style: bold
    color: #302D2D
    background-fill-opacity: 0
    z-index: 1

.contentBlock-2
    
.newsImage
    width: 75px
    height: 75px
    
.newsTitle
    font-size: 1.5em
    padding: 10px
    color: #6F6F6F
    
    
.newsList
    margin: 15px
    display: flex 
    cursor: pointer
    border: 1px #D1B1B4 dashed

.newList,newsTitle
    cursor: pointer
    text-align: left

.newsDer
    position: absolute
    top: 24px
    height: 15px
    width: 120px
    // background-color: #D1B1B4
    border: 1px #D1B1B4 solid
    border-radius: 50px
    -webkit-filter: drop-shadow(7px 7px 2px rgba(0, 0, 0, 0.2))
    filter: drop-shadow(7px 7px 2px rgba(0, 0, 0, 0.2))
    z-index: -1 


</style>


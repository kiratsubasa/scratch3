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
                link: '/resultPage/result1'
            },
            {
                src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/12/新竹高中06.jpg',
                title: '美感紀錄｜播下美好生活種子',
                subtitle: '站在美感課程推廣執行的角度，我們常常思索什麼才是課程計畫的成果，我們都會明白在教學中形成性評量的重要，又怎麼會認為僅以「學生作品」抑或「教師教案」為教育計畫成果呢？',
                link: '/resultPage/result2'
            },
            {
                src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/02/35.jpg',
                title: '公眾的記憶',
                subtitle: '身處老台北的巷弄中，隱沒於繁華的信義大安捷運站後方，典型台灣1950~60年代出現的「步登公寓」',
                link: '/resultPage/result3'
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
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/59821222_10216261950555708_2566258000335470592_n.jpg',title: '「循環設計展」你在圈內嗎？',link: '/resultPage/result3'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/03/web-2.png',title: '設計教育創新實驗國際論壇',link: '/resultPage/result1'}
            ],
            article: [
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png',title:'五種生活美感實踐',link: '/resultPage/result1'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg',title:'美感紀錄｜播下美好生活種子',link: '/resultPage/result1'},
                {src:'https://www.aade.org.tw/website/wp-content/uploads/2019/05/59821222_10216261950555708_2566258000335470592_n.jpg',title:'「循環設計展」你在圈內嗎？',link: '/resultPage/result3'},
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
@import "@/style/mainPage.sass"
</style>


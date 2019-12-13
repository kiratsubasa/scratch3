<template lang="pug">
.planContainer
    h1#listPageTitle.planTitle {{title}}
    video(loop autoplay muted)
            source(src="@/assets/123.mp4" type="video/mp4")
    diolog.articlePageVideoPlayer(:article-list='photoList')
    .plan(v-for='item in planContent')
        h3 {{item.title}}
        p.planContent(v-for="text in item.content") {{text}}
        br
</template>

<script>
import diolog from '@/components/diolog.vue'
export default {
    components: {
        diolog
    },
    data() {
        return {
            title: "計畫簡介",
            photoList:{
                src: [ 'https://drive.google.com/uc?export=view&id=1WSdyKzEnoVK9q-xH8_X2RhjwU6qwTOs1','https://drive.google.com/uc?export=view&id=1lzuckv5l7ZWpMpAgfkCkGg7TlWG8AFkp','https://drive.google.com/uc?export=view&id=1ZIi4vEcSk2MGEyUuI7tA8XJ5jq8Mf8dY','https://drive.google.com/uc?export=view&id=1FbqmAjUqI4tKPe1xJuhcvKX4GDzYeADN']
            },
            bigPhoto: {
                src:'https://drive.google.com/uc?export=view&id=1lHipml69zEvyfwWclCJSyYpK-hm7qegX',
                title: '文章標題'
            },
            planContent: [
                {
                    title:"計畫緣起與願景",
                    content:["藝術是社會與文化的重要活動，不但具有自身的發展過程、特性及價值，也在各領域不同的活動中扮演著中介的觸媒角色。","在全球化瞬息萬變的脈絡中，跨領域的能力成為各國教育改革中重要的理念。","藝術領域以其在不同領域的實踐力，能以創作、鑑賞、展演等機制，為不同領域醞釀多元思維、作法與價值。是以，在教育場域中，以藝術領域為跨領域課程的推動核心，一則能為各學科的教學效能加值，二則能潛移默化學生的美感素養，提供未來成為公民後的創新素養。隨著十二年國民教育的啟動，臺灣教育改革走向新的里程碑，無論在課程開發以及師生的教與學，也都將配合新時代的趨勢，邁向創新的教育。","教育部葉俊榮部長在「2018年教學群英會課程桃花源」全國高中優質化暨前導學校課程博覽會致詞時提到，教育是解決事情的根本，也是人才培育的機制，希望透過教育，對未來做槓桿式的影響。其呼應了跨領域美感教育在第二期以STEAM詮釋十二年國民基本教育當中的「核心素養」，亦即一個人為適應現在生活及面對未來挑戰所應具備的知識、能力與態度等內容；不以「學科知識」為學習的唯一範疇，而應關注學習與生活情境的結合，透過實踐力行而彰顯學習者的全人發展。STEAM正是讓學生「關注學習與生活情境的結合」並透過「實踐力行」彰顯學習者特質的教育趨勢。跨領域美感教育一直以來以Art代表的藝術領域為核心出發，串聯跨科學習為設計理念，期望學生透過跨領域美感課程的推動，獲得更全面且創新的學科及藝術學習歷程。"],
                },
                {
                    title:"計畫實施範疇",
                    content:["計畫實施時，與師資培育大學及諮詢委員成立共識會議，並組織各校藝術領域教師作為校內跨領域美感課程支發動者，串聯各縣市相關機構資源，組成跨領域美感課程團隊，並與學校教師共同研討與開發跨領域美感教育課程方案。"],
                },
                {
                    title:"計畫實施理念與目標",
                    content:["計 畫 理 念 第三期計畫立基並擴充先前「中等學校暨國小階段跨領域美感教育實驗課程開發計畫」的成果，持續推動、深耕與輔導跨領域美感課程。除了多角化、多樣化開展課程方案跨領域廣度，精進各校教師設計跨領域美感特色課程之能力，以活化各學科教學，將跨領域美感教育推廣至各教育階段教學現場之外，更依據前期經驗，強化在地支持系統，串連地方師資培育大學作為跨領域美感課程旗艦基地，提供教學現場在地化的資源與輔導，並推派教師代表參加教育部美感教育工作之教師國外進修參訪遴選活動，透過國際交流進修參訪，體驗國外跨領域教育的觀摩及美學巡禮，同步提升職前教師與在職教師跨域美感素養。此外，也進一步連結全國各縣市機構、師資培育、教育現場與社區資源，辦理師生參與之校外社區走讀之工作坊、國際學者講座等增能活動，使跨領域美感課程理念，深植於各學習階段。 計 畫 目 標 ▎十二年國教總綱核心素養結構圖  ▎ 自主行動、溝通互動、社會參與 第三期「跨領域美感教育卓越領航計畫」將以三年為期程，目標如下： 銜接並推廣跨領域美感課程之發展 紮根跨領域美感課程旗艦基地 建構跨領域美感課程實踐模組 串聯各機構跨領域美感資源 整合跨領域美感素養於生活運用 跨 領 域 美 感 課 程 之 定 義 跨領域美感課程係指以藝術概念、美感元素與藝術資源等，融整其他學科之教學，作為活化、輔助學科學習的媒介、資源與策略。課程規劃可包含下列兩大面向： 使用藝術媒介、藝術資源等素材，及應用藝術實作、藝術鑑賞等活動，輔助、活化教學。 就學科單元中與藝術領域交集之知識結構或美感共通性等，融整課程。 計畫實施時，與師資培育大學及諮詢委員成立共識會議，並組織各校藝術領域教師作為校內跨領域美感課程支發動者，串聯各縣市相關機構資源，組成跨領域美感課程團隊，並與學校教師共同研討與開發跨領域美感教育課程方案。"],
                },
                {
                    title:"計畫實施項目及預期成果",
                    content:["本計畫以三年為工作期程。 ","第一階段為增能培訓期，自105年1月1日至105年12月31日止。 第二階段為整合深耕期，自106年1月1日至106年12月31日止。 第三階段為推廣開展期，自107年1月1日至107年12月31 日止。"]
                }
            ]
        }
    },
    methods: {
    }
}

</script>

<style lang="sass">
video
    width:1180px
    margin: 50px

.planContainer
    max-width: 1280px
    min-height: 720px
    // border: 2px solid #549CF8
    margin: auto

.planTitle
    height: 150px
    // border: 2px solid #542CF8
    line-height: 150px
    text-align: left
    padding-left: 30px
    color: #28292D

.planPhoto
    // border: 2px solid #549C22

.planFlex
    display: flex
    flex-wrap: wrap
    flex-direction: row
    align-content: flex-start
    justify-content: center
    // border: 2px solid #542CF8

.bigPlanItem
    // border: 2px solid #549C00
    height:664px
    width: 1180px
    margin-left: 50px
    margin-right: 50px
    background-size: cover
.planItem
    // border: 2px solid #549CF8
    width:257px
    height:145px
    margin: 25px
    background-size: cover
    
.plan
    width: 80%
    padding: 20px
    text-align: left
    margin-left: 50px
    margin-right: 50px
    margin-bottom: 20px
    color: #28292D
    border: 1px #F2DCE0 solid
.planContent
    margin-left: 20px
    margin-right: 20px
    margin-top: 20px
.warning
    color: red
</style>


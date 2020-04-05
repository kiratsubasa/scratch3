<template lang="pug">
#app
    SlideShow(:jump-bar="jumpBar")
    // div.content
    //     div.contentBlock-1.contentBlock
    //             div(v-for='article in article')
    //                 a#myhref(:href="article.link")
    //                     div.imageBlock(:style="{'background-image': 'url(' + article.src + ')'}") 
    //                         div.imageMask {{article.title}}
    //     div.contentBlock-2.contentBlock
    //         div.blockTitle 最新消息
    //             div.newsDer
    //         table
    //             tr.newsList(v-for='item in newList')
    //                 a#myhref(:href="item.link")
    //                     td
    //                         div.newsImage
    //                             img(:src='item.src')
    //                     td.newsTitle {{item.title}}
    // div.content
    //     div.contentBlock-3.contentBlock
    //         a#myhref(:href="midArticle.link")
    //             div.midImageBlock(:style="{'background-image': 'url(' + midArticle.src + ')'}" )
    //                 div.imageMask {{midArticle.title}}
    //     div.contentBlock-4.contentBlock
    //             div(v-for='article in article')
    //                 a#myhref(:href="article.link")
    //                     div.imageBlock(:style="{'background-image': 'url(' + article.src + ')'}") 
    //                         div.imageMask {{article.title}}
    .newsListContainer
        .newsListTitle {{newsTitle}}
        newsList(:news-list='news')
    .picLinkContainer
        .picLinkTitle {{picLinkTitle}}
        picAndTextList(:pic-and-text='picAndText')
    .resultContainer
        .resultTitle {{resultTitle}}
        textList(:text-list='text')
    .halfContainer
        .messageContainer
            .messageTitle {{messageTitle}}
            messageAndContact
    .introContainer
        .introTitle {{introTitle}}
        emptyPage(:empty-page='emptyPage')
    .linkContainer
        .linkTitle {{linkTitle}}
        .linkBackground
        smallSlider(:small-slider="link")
    
    
    
</template>

<script>
import SlideShow from './SlideShow.vue'
import { ListSlider } from '@/api/Slider';
import picAndTextList from '@/components/picAndTextList.vue';
import messageAndContact from '@/components/messageAndContact.vue';
import textList from '@/components/textList.vue';
import newsList from '@/components/newsList.vue';
import smallSlider from '@/components/smallSlider.vue';
import emptyPage from '@/components/emptyPage.vue'
export default {
    components: {
        SlideShow,
        picAndTextList,
        messageAndContact,
        textList,
        newsList,
        smallSlider,
        emptyPage
    },
    data() {
        return {
            newsTitle: "最新消息",
            resultTitle: "成果專區",
            linkTitle: "外部連結",
            picLinkTitle: "外部連結",
            messageTitle: "留言與聯繫",
            introTitle: "計畫簡介",
            jumpBar: [
                {title:'Title1',sub_title:'Subtitle1',media:{info:{src:'//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png'}}},
                {title:'Title2',sub_title:'Subtitle2',media:{info:{src:'https://d2jcw5q7j4vmo4.cloudfront.net/Iqoa6agJVh_B6KXdj4HdrbWfJHEMvhZCeUwvpkDJsanXAcb4Ex2h4mOtirVhiEYxfuY=w1440-h620'}}},
                {title:'Title3',sub_title:'Subtitle3',media:{info:{src:'https://i1.wp.com/www.playstationbit.com/wp-content/uploads/2020/01/Sky-Children-of-Light.jpg?fit=1200%2C675&ssl=1'}}},
                {title:'Title4',sub_title:'Subtitle4',media:{info:{src:'https://lightww.com/wp-content/uploads/2018/07/sky-690293_960_720.jpg'}}},
                {title:'Title5',sub_title:'Subtitle5',media:{info:{src:'https://www.vikingcruises.com/oceans/images/CC_STAR_Flam_Glacial_Cove_1680x716_tcm13-76657.jpg'}}}
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
            },
            picAndText:[
                {title: '五種生活美感實踐',Subtitle: '',Description: '',Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png'},
                {title: '美感紀錄',Subtitle: '播下美好生活種子',Description: '',Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg'},
                {title: '五種生活美感實踐',Subtitle: '',Description: '',Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png'},
                {title: '美感紀錄',Subtitle: '播下美好生活種子',Description: '',Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg'}
            ],
            text:[
                {style: '一',title: '五種生活美感實踐',Subtitle: '',Description: '從人物的生活經驗出發，看他們從生活觀察中醞釀出各自對美感生活的核心精神與展現形式之間的關係，除了實踐歷程外，更希望藉由影像與故事提出更深層的思考，期待透過人物所追求的美感形式與實踐方式中所呈現的，美感與當代生活、歷史文化、風土自然、社會現象之間更深層的關係，啟發觀者回頭關注自身。',Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png'},
                {style: '一',title: '美感紀錄',Subtitle: '播下美好生活種子',Description: '從人物的生活經驗出發，看他們從生活觀察中醞釀出各自對美感生活的核心精神與展現形式之間的關係，除了實踐歷程外，更希望藉由影像與故事提出更深層的思考，期待透過人物所追求的美感形式與實踐方式中所呈現的，美感與當代生活、歷史文化、風土自然、社會現象之間更深層的關係，啟發觀者回頭關注自身。',Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg'},
                {style: '一',title: '五種生活美感實踐',Subtitle: '',Description: '從人物的生活經驗出發，看他們從生活觀察中醞釀出各自對美感生活的核心精神與展現形式之間的關係，除了實踐歷程外，更希望藉由影像與故事提出更深層的思考，期待透過人物所追求的美感形式與實踐方式中所呈現的，美感與當代生活、歷史文化、風土自然、社會現象之間更深層的關係，啟發觀者回頭關注自身。',Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png'},
                {style: '一',title: '美感紀錄',Subtitle: '播下美好生活種子',Description: '從人物的生活經驗出發，看他們從生活觀察中醞釀出各自對美感生活的核心精神與展現形式之間的關係，除了實踐歷程外，更希望藉由影像與故事提出更深層的思考，期待透過人物所追求的美感形式與實踐方式中所呈現的，美感與當代生活、歷史文化、風土自然、社會現象之間更深層的關係，啟發觀者回頭關注自身。',Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg'}
            ],
            news:[
                {date: '1997/11/19',title: '「應十二年國教之音樂跨領域創新教學學術研討會」歡迎各位師長蒞臨與會！報名網址請詳見內文'},
                {date: '2000/08/05',title: '「應十二年國教之音樂跨領域創新教學學術研討會」歡迎各位師長蒞臨與會！報名網址請詳見內文'},
                {date: '2019/11/19',title: '「應十二年國教之音樂跨領域創新教學學術研討會」歡迎各位師長蒞臨與會！報名網址請詳見內文'},
                {date: '2019/12/11',title: '「應十二年國教之音樂跨領域創新教學學術研討會」歡迎各位師長蒞臨與會！報名網址請詳見內文'},
                {date: '2020/03/04',title: '「應十二年國教之音樂跨領域創新教學學術研討會」歡迎各位師長蒞臨與會！報名網址請詳見內文'}
            ],
            link:[
                {title: '「應十二年國教之音樂跨領域創新教學學術研討會」', Pic: '//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png',media:{info:{src:'//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png'}}},
                {title: '「應十二年國教之音樂跨領域創新教學學術研討會」', Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png',media:{info:{src:'//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png'}}},
                {title: '「應十二年國教之音樂跨領域創新教學學術研討會」', Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg',media:{info:{src:'//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png'}}},
                {title: '「應十二年國教之音樂跨領域創新教學學術研討會」', Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png',media:{info:{src:'//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png'}}},
                {title: '「應十二年國教之音樂跨領域創新教學學術研討會」', Pic: '//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png',media:{info:{src:'//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png'}}},
                {title: '「應十二年國教之音樂跨領域創新教學學術研討會」', Pic: '//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png',media:{info:{src:'//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png'}}}
            ],
            emptyPage: {title: "<div>「應十二年國教之音樂跨領域創新教學學術研討會」歡迎各位師長蒞臨與會！報名網址請詳見內文</div>", img: "<img src='//fbilab.cc:8008/storage/photos/7cba19e69372181d1ff283c144cb0978b761e8394be25b43e6b6779ab3e4e4d2.png'>",content: "<div>各位敬愛師長您好：臺北市立大學2016音樂教育研討會以「因應十二年國教之音樂跨領域創新教學學術研討會」為主題，於105年12月17日（星期六）舉辦。竭誠歡迎各位廣邀學生與夥伴與會。每年與您們相聚共商藝術教育的未來，是歲末最令人期待的溫馨時刻，期待您們與會及蒞臨指導。欲參加之師長，請填寫google表單：https://goo.gl/forms/egT6CiM5XKCo3iv83 進行報名，謝謝。簡錄研討會資訊，謹供卓參。</div>"},
        }
    },
    created() {
        this.ApiListSlider(2);
    },
    methods: {
        ApiListSlider(id) {
            ListSlider(id)
                .then(response => {
                    this.jumpBar = response.data;
                })
                .catch(err => {
                console.log(err);
            });
        }
    }
}

</script>

<style lang="sass">
@import "@/style/mainPage.sass"
.newsListContainer
    max-width: 1350px
    margin: auto
    padding: 37px 44px 37px 44px
    margin-bottom: 135px
    background-color: $c-primary
.newsListTitle
    text-align: left
    font-size: 40px
    color: $c-secondary
    font-weight: 600
    margin-bottom: 55px
.picLinkContainer
    max-width: 1350px
    margin: auto
.picLinkTitle
    text-align: left
    font-size: 40px
    color: $c-primary
    font-weight: 600
    margin-bottom: 55px
.resultContainer
    max-width: 1350px
    margin: auto
.resultTitle
    text-align: left
    font-size: 40px
    color: $c-primary
    font-weight: 600
    margin-bottom: 55px
.linkContainer
    max-width: 1350px
    height: 935px
    margin: auto
    position: relative
    margin-bottom: 135px
.linkTitle
    text-align: left
    font-size: 40px
    color: $c-primary
    font-weight: 600
    margin-bottom: 55px
.linkBackground
    position: absolute
    top: 152px
    left: 284px
    width: 782px
    height: 782px
    background-color: $c-secondary
.halfContainer
    max-width: 1350px
    margin: auto
    dispaly: flex
    flex-direction: row
    padding-bottom: 135px
.messageContainer
    max-width: 665px
    padding: 37px 44px 37px 44px
    background-color: $c-secondary
.messageTitle
    font-size: 40px
    color: $c-primary
    font-weight: 600
    margin-bottom: 55px
.introContainer
    display: flex
    flex-direction: column
    max-width: 1350px
    margin: auto
.introTitle
    font-size: 40px
    text-align: left
    color: $c-primary
    font-weight: 600
    margin-bottom: 55px
</style>


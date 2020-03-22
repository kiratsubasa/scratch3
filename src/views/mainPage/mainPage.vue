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
    picAndTextList(:pic-and-text='picAndText')
    messageAndContact(:message-and-contact='inputTitle') 
</template>

<script>
import SlideShow from './SlideShow.vue'
import { ListSlider } from '@/api/Slider';
import picAndTextList from '@/components/picAndTextList.vue';
import messageAndContact from '@/components/messageAndContact.vue'
export default {
    components: {
        SlideShow,
        picAndTextList,
        messageAndContact
    },
    data() {
        return {
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
                {title: '美感紀錄',Subtitle: '播下美好生活種子',Description: '',Pic: 'https://www.aade.org.tw/website/wp-content/uploads/2018/12/花蓮富北東里國中02.jpg'}
            ],
            inputTitle:[
                {title: '姓名',id: '',getdata: ''},
                {title: '信箱',id: '',getdata: ''},
                {title: '主旨',id: '',getdata: ''},
                {title: '內容',id: '',getdata: ''}
            ]
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
</style>


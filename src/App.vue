<template lang="pug">
.v-app
    Header(:menu-list="menuList" :icon-src="iconSrc")
    transition(name="page" mode="out-in")
        router-view(:key='$route.path')
    Footer(:foot-list="footList" :footMenuList="footMenuList")
    
</template>

<script src="/js/vue.js"></script>
<script src="/js/vue-resource.js"></script>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { ListMenus } from '@/api/Menu';
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            iconSrc: 'https://www.aade.org.tw/website/wp-content/themes/twentyseventeen/img/logo.svg?v=1',
            menuList: [
                {name: '最新消息',url: '/section/最新消息'},
                {name: '法規與政策',url: '/categories/1'},
                {name: '計畫簡介',url: '/page/intro'},
                {name: '聯繫與服務',url: '/contact'},
                {name: '網網相連',url: '/link'},
                {name: '教學資源',url: '/module/1'},
                {name: '美感人才',url: '/hr/1'},
                {name: '網站地圖',url: '/map'},
                {name: '常見問題',url: '/collapse/1'},
                {name: '活動報名',url: '/activity/1'},
            ],
            footList: [
                {title: '隱私權及安全政策',link:''},
                {title: '網站資料開放宣告',link:''},
                {title: '位置圖',link:''},
                {title: '網站更新日期2019/09/11',link:''},
                {title: '通過AA等級無障礙檢測QRCode請以手機掃描此QRCode',link:''},
                {title: '地址:30013新竹市光復路二段101號',link:''},
                {title: '電話:(03)5715131',link:''}
            ],
            footMenuList: [
                // {title: '聯繫與服務',link: '/contectPage'},
                // {title: '常見問題',link: '/QA/j'},
                // {title: '網站地圖',link: '/webTreePage'},
                // {title: '問卷調查',link: '/questionnairePage/card'},
                // {title: '出版刊物',link: '/publishPage/card'},
                // {title: '會議記錄',link: '/recordPage'} 
            ],
        } 
    },
    created() {
        // this.ApiListMenus(2);
    },
    methods: {
        ApiListMenus(id) {
            ListMenus(id)
                .then(response => {
                    this.menuList = response.data;
                })
                .catch(err => {
                console.log(err);
            });
        }
    }
}       
</script>

<style lang="sass">
*
    font-family: Microsoft JhengHei                                     

html, body
    height: 100%
    text-align: center
    cursor: default  


div
    // border: 1px #FFAC55 solid

body
    min-height: 100%
    
.page-enter-active, .page-leave-active
    transition: 0.6s

.page-enter, .page-leave-to
    opacity: 0

.searchBar-MainPage
    position: absolute
    left: 10px
    top: 10px

.PathText
    text-align: left
    padding: 20px
    // color: #555
</style>
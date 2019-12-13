<template lang="pug">
.v-app
    Header(:menu-list="menuList")
    transition(name="page" mode="out-in")
        router-view(:key='$route.path')
    Footer(:foot-list="footList" :footMenuList="footMenuList")
</template>

<script src="/js/vue.js"></script>
<script src="/js/vue-resource.js"></script>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        Header,
        Footer
    },
    data() {
        return {
            footList: [
                {title: '隱私權及安全政策',link:''},
                {title: '網站資料開放宣告',link:''},
                {title: '位置圖',link:''},
                {title: '網站更新日期2019/09/11',link:''},
                {title: '通過AA等級無障礙檢測QRCode請以手機掃描此QRCode',link:''},
                {title: '地址:30013新竹市光復路二段101號',link:''},
                {title: '電話:(03)5715131',link:''}
            ],
            menuList: [
                {title: '最新消息',link: '/newsPage'},
                {title: '法規與政策',link: '/lawPage/mark1'},
                {title: '計畫簡介',link: '/planIntro'},
                // {title: '教學資源',link: '/tutorialPage/mark1'},
                {title: '成果專區',link: '/resultPage'},
                {title: '美感人才',link: '/staffPage/mark1?markIndex=0'},
                {title: '活動報名',link: '/activityPage/mark1markIndex=0'},
                {title: '網網相連',link: '/otherWeb'}
            ],
            footMenuList: [
                {title: '聯繫與服務',link: '/contectPage'},
                {title: '常見問題',link: '/QA'},
                {title: '網站地圖',link: '/webTreePage'},
                // {title: '問卷調查',link: '/questionnairePage/card'},
                {title: '出版刊物',link: '/publishPage/card'},
                {title: '會議記錄',link: '/recordPage'} 
            ],
        } 
    },
    beforeMount() {
    },    
    methods: {
    //     submitForm () {
    //     this.$ajax({
    //     method: 'post',
    //     url: '@/assets/data.json',
    //     data: {
    //         state: 'success',
    //         info: 'result'
    //     }
    // })
    // }
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
#myhref
    text-decoration: none
    color: #333
.PathText
    text-align: left
    margin: 20px
    color: #555
</style>
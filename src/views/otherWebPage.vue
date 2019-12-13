<template lang="pug">
.webContainer
    h1#listPageTitle {{pageTitle}}
    .webFlexContainer
        .webFlex(v-for='webs in webLists')
            a.webLink#myhref(:href="webs.href" target="_blank" )
                img.webImg(:src="webs.src")
                .webTitle {{webs.title}}
        
</template>

<script>
export default {
    data(){
        return{
            pageTitle: "網網相連",
            webLists: [
                {href: 'http://www.aesthetics.moe.edu.tw/ebook/',src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/03/電子書logo.jpg',title: '美感電子書'},
                {href: 'http://jam.jutfoundation.org.tw/',src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/03/中泰logo.jpg',title: '忠泰建築文化藝術基金會/忠泰美術館'},
                {href: 'https://www.facebook.com/Mabuville/',src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/03/麻布logo.jpg',title: '麻布山林（友達／明碁)'},
                {href: 'https://www.facebook.com/vvgteam/',src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/03/好樣logo.jpg',title: '好樣VVG'},
                {href: 'http://www.informat-design.com.tw/-about-us-/',src: 'https://www.aade.org.tw/website/wp-content/uploads/2018/03/格式logo.jpg',title: '格式設計策展 Informat Design Curating'}
            ]
        }
    }
}
</script>

<style lang="sass">
.webContainer
    max-width: 1280px
    min-height: 1500px
    border: 1px #ccc solid
    margin: auto
    padding: 100px


.webFlexContainer
    display: flex
    flex-wrap: wrap
    flex-direction: row

.webFlex
    width: 200px
    margin: 25px

.webTitle
    width: 200px
    line-height: 30px
    text-align: center
    font-size: 18px

.webImg
    width: 200px
    height: auto
</style>
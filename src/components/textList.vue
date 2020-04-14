<template lang="pug">
.textListContainer
    .textListTabContainer
        .textListTab(@click='clickOne()') {{typeList.first}}
        .textListTab(@click='clickTwo()') {{typeList.second}}
        .textListTab(@click='clickThree()') {{typeList.third}}
        .textListTab(@click='clickFour()') {{typeList.forth}}
    .textListFlex#textListFlex1
        .textList(v-for='lists in textList' :class="lists.style=='一'? 'textList1':'no'")
            .textPic(:style="{'background-image': 'url(' + lists.Pic + ')'}")
            .textText
                .textTitle {{lists.title}}
                .textDescription {{lists.Description.substring(0,65)}}
                .textLearnMoreDot ...
                .textLearnMore LEARN MORE
    div#textListFlex2.textListFlex
        .textList(v-for='lists in textList' :class="lists.style=='二'? 'textList2':'no'")
            .textPic(:style="{'background-image': 'url(' + lists.Pic + ')'}")
            .textText
                .textTitle {{lists.title}}
                .textDescription {{lists.Description.substring(0,65)}}
                .textLearnMoreDot ...
                .textLearnMore LEARN MORE
</template>
<script>   
export default {
    components: {
    },
    props: ['text-list'],
    data(){
        return{
            typeList: {first: '第一種',second: '第二種', third: '第三種', forth: '第四種'}
        }
    },
    methods: {
        clickOne(){
            var two = document.getElementById("textListFlex2");
            two.style.width = "100px";  
        },
        clickTwo(){

        },
        clickThree(){

        },
        clickFour(){

        }
    }
}
</script>
<style lang="sass">
@import "@/style/common.sass"
.textListContainer
    margin: auto
    padding-bottom: 135px
.textListTabContainer
    display: flex
    flex-direction: row
    margin-bottom: 64px
.textListTab
    box-sizing: border-box
    color: $c-text
    font-size: 25px
    padding: 15px 23px 15px 23px
    border-bottom: 8px solid $c-bg
.textListTab:hover
    border-bottom: 8px solid $c-primary
.textListFlex
    max-width: 1350px
    display: flex
    flex-direction: row
    flex-wrap: wrap
.textList
    width: 31%
    margin: 0.75%
    margin-bottom: 70px
.textPic
    width: 100%
    height: 400px
    background-size: cover
.textText
    width: 100%
    height: 250px
    padding:15px
    background-color: $c-secondary
.textTitle
    font-size: 33px
    line-height: 35px
    color: $c-primary
    margin-bottom: 20px
.textDescription
    height: 72px
    overflow: hidden
    font-size: 16px
    line-height: 24px
    margin-bottom: 20px
.textLearnMore
    background-color: $c-primary
    color: $c-secondary
    font-weight: 600
    width: 194px
    height: 53px
    padding: 15px 34px 15px 34px
    margin: auto
.textLearnMore:hover
    cursor: pointer
    opacity: 0.75
.textLearnMoreDot
    display: none
.no
    display: none
@media only screen and (max-width: 480px)
    .textListTab
        font-size: 16px
        padding:20px 15px 20px 15px
    .textListTabContainer
        margin-bottom: 25px
    .textListFlex
        width: 100%
    .textList
        width: 46%
        height: 270px
        overflow: hidden
        margin-left: 1.8%
        margin-right: 1.8%
        margin-bottom: 30px
    .textPic
        width: 100%
        height: 170px
    .textText
        padding: 5px
    .textTitle
        font-size: 16px
        line-height: 20px
        margin-bottom: 5px
    .textDescription
        height: 45px
        overflow: hidden
        font-size: 10px
        line-height: 16px
        margin-bottom: -5px
    .textLearnMore
        display: none
    .textLearnMoreDot
        display: block
        color: $c-primary
        text-align: right
</style>
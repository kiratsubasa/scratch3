<template lang="pug">
.textListContainer
    .textListTabContainer
        .textListTab(v-for='types in typeList') {{types}}
    .textListFlex
        .textList(v-for='lists in textList')
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
            typeList: ["第一種","第二種","第三種","第四種"]
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
    width: 430px
    height: 676px
    margin: 10px
    margin-bottom: 70px
.textPic
    width: 430px
    height: 430px
    background-size: cover
.textText
    width: 100%
    height: 246px
    padding: 27px 15px 27px 15px
    background-color: $c-secondary
.textTitle
    font-size: 33px
    color: $c-primary
    margin-bottom: 30px
.textDescription
    font-size: 16px
    line-height: 24px
    margin-bottom: 30px
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
@media only screen and (max-width: 480px)
    .textListTab
        font-size: 16px
        padding:20px 15px 20px 15px
    .textListTabContainer
        margin-bottom: 25px
    .textListFlex
        width: 100%
    .textList
        width: 170px
        height: 270px
        overflow: hidden
        margin-left: 8px
        margin-right: 8px
        margin-bottom: 30px
    .textPic
        width: 170px
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
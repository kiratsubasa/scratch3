<template lang="pug">
.textListContainer
    .textListTabContainer
        .textListTab(v-for='types in typeList') {{types}}
    .textListFlex
        .textList(v-for='lists in textList')
            .textPic(:style="{'background-image': 'url(' + lists.Pic + ')'}")
            .textText
                .textTitle {{lists.title}}
                .textSubTitle {{lists.Subtitle}}
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
    max-width: 1280px
.textListTabContainer
    display: flex
    flex-direction: row
    margin-bottom: 20px
.textListTab
    box-sizing: border-box
    padding-left: 10px
    padding-right: 10px
    padding-top: 5px
    padding-bottom: 5px
.textListTab:hover
    border-bottom: 3px solid $c-secondary
.textListFlex
    display: flex
    flex-direction: row
.textList
    width: 300px
    margin-left: 10px
    margin-right: 10px
.textPic
    width: 100%
    height: 168px
    background-size: cover
.textText
    padding: 10px
.textTitle
    font-size: 1.25em
    text-align: left
    margin-bottom: 10px
.textSubtitle
    text-align: left
</style>
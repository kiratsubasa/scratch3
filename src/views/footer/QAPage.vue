<template lang="pug">
.PathText 你的位置 : 首頁 > {{pageTitle}}
    .QAContainer
        h1#listPageTitle {{pageTitle}}
        .markBlockContainer
            router-link.markBlock(style="color: #333; text-decoration: none;" v-for='(typ,t) in typeList' :key='t' :to="typ") {{typ}}
        .questionAndAnswer(v-for='QAs in theArticleList' @click="extend" tabindex="0")
            .question Q.{{QAs.question}}
            br
            .answer {{QAs.answer}}
</template>
<script>
export default {
    data(){
        return{
            pageTitle: "常見問題",
            typeList: ["120","175","-20"],
            qaArraqy: [
                {type: '120',question:'本計畫如何做經費變更？', answer:'原始核定預算表之「項目」需要做刪減或增加時，才需做經費調整，其餘已有的項目金額皆可相互流用。情境A：自行剪輯影片之剪輯費無法核銷時，該筆經費項目需被刪除，若需要流用至其他任何一筆項目皆可；倘若不使用也不流用，直接將該筆經費繳回即可。情境B：需要較長途的車程費用，可增列國內差旅費或交通費。'},
                {type: '120',question:'本計畫之經費如何核銷', answer:'任何一筆經費的核銷標準，請依貴校主計核可。另，任何需要核銷的收據或發票，請使用當校核銷費用之抬頭及統編。情境A：剪輯費、編稿費、主持費、助理費及撰稿費若是由校內學校老師/主任/校長請領的情況，請依核定經費表且合乎該校之請款方式使用。情境B：若教師或行政人員需支領兼代課鐘點費，一周需支付超過四節課之節數，此情況下請以當校主計認定為主。'},
                {type: '175',question:'本計畫之全民健保補充費是指哪一個項目？', answer:'有關「人事」的部分都需要給付，如：講座鐘點費、講座助理費、主持費、兼代課鐘點費、撰稿費、編稿費等項目。'},
                {type: '175',question:'之前參加學科中心教案競賽之教案，或曾經參與其他美感相關計畫的實施內容，能否修改以作為本計畫的課程方案？', answer:'每個計畫主旨不同，基本上沒有限制。但本計畫旨在開發及推廣「跨領域」「美感」教育課程，須考量教案內容是否與本計畫主旨相符。'},
                {type: '120',question:'經費表如何填寫？', answer:'種子學校提交經費申請時，以一學年補助新臺幣（以下同）12萬來編列總預算，撥款分上下學期各一次6萬元。自籌款由各縣市政府訂定。編列經費時，建議從支出較大筆的項目開始編列，例如材料費、交通費等，再依序填寫其他項目。'},
                {type: '120',uestion:'各經費項目是否有比例上、額度上的限制？例如鐘點費的最高額度是否有明文規定？', answer:'補助種子學校執行本計畫之經費法規依據為「中央政府各機關用途別科目分類及執行標準表」、「教育部補助及委辦計畫經費編列基準表」及「行政院主計處國內出差旅費報支要點」等，各項經費皆為「業務費」用途項下核可之項目。建議鐘點費不超過總經費之70%。'},
                {type: '120',question:'補助費用能否用來添購設備？如教學需要的物品費、書籍費能否增列？', answer:'物品費、書籍、CD、DVD等可記入教學材料費，但硬體設備因有財產歸屬問題，通常無法編列。建議經費編列若有疑義請先行徵詢各校主計。'},
                {type: '-20',question:'經費明細是否每個項目皆為必須？', answer:'提出經費申請時，若不使用的項目可不編列，而將額度勻用到其他項目。開始執行計畫後若有經費項目變更之需求可再行文提出（108年12月31前）。'}
            ],
            theArticleList: '',
            selectedQuery: '',
        }
    },
    beforeMount(){
        this.selectedQuery = this.$route.params.collapseId;
    },
    watch: {
        selectedQuery: function(query) {
            this.theArticleList = this.qaArraqy.filter((item)=>{
                return item.type.includes(query);
            })
        },
        theArticleList: function(item) {
            if(item.length==0){
                this.theArticleList = this.qaArraqy;
            }
                
        }
    },
    methods: {
        extend: function(){
            // var x=document.getElementsByClassName("answer")
            // var i
            // for(i=0;i<x.length;i++){
            //     x[i].style="background: #ccc";
            // }
            //this.style.maxHeight= "500px";
            this.style="background: #ccc";

        }
    }
}

</script>
<style lang="sass">
.QAContainer
    max-width: 1280px
    min-height: 720px
    // border: 2px solid #549CF8
    margin: auto

.questionAndAnswer
    text-align: left
    padding: 10px
    font-size: 15px
    width: 85%
    margin: auto
    margin-bottom: 40px
    border: 1px solid #F2DCE0
    max-height: 40px
    overflow: hidden
    transition: max-height 0.2s
.questionAndAnswer:focus
    max-height: 500px
    outline: none
.question
    font-size: 15px
// .question:focus
//     max-height: 500px
.answer
    margin-left: 30px 
    //display: none
.answer:focus
    color: red
    max-height: 500px
input:focus
    background-color: #ccc
</style>
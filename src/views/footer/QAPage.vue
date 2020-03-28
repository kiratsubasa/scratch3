<template lang="pug">
.PathText 你的位置 : 首頁 > {{pageTitle}}
    .QAContainer
        h1#listPageTitle {{pageTitle}}
        v-expansion-panels(v-for='(QAs,i) in qaArraqy' :key="i" :disabled='disabled' style="margin-bottom: 25px;")
            v-expansion-panel
                v-expansion-panel-header {{QAs.question}}
                v-expansion-panel-content(style="background: #ece8e3;color: #707070;padding-top: 10px;")  {{QAs.answer}}
        
</template>

<script>
import { GetPage } from '@/api/client/Page';
export default {
    data(){
        return{
            pageTitle: "常見問題",
            qaArraqy: [],
            panel: [0, 1],
            disabled: false,
            readonly: false,
            panelHead: '#E91E63'
        }
    },
    created() {
        this.ApiGetPage(2,this.$route.params.pageid);
    },
    methods: {
        ApiGetPage(project, id) {
            GetPage(project, id)
                .then(response => {
                    this.data = response.data;
                    this.pageTitle = this.data.title;
                    this.qaArraqy = this.data.type.qaArray;
                })
                .catch(err => {
                console.log(err);
            });
        },
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

.v-expansion-panel-header
    background: #ece8e3
    color: #707070
    &:hover
        background: #95ac9a
        color: #ece8e3

.v-item--active
    .v-expansion-panel-header
        background: #95ac9a
        color: #ece8e3
</style>
<template lang="pug">
.messageAndContactContainer
    div.titleAndInput(v-for='items in inputTitle')
        label.messageAndContactLable {{items.title}}
        input.messageAndContactInput(v-model='items.getdata')
    button(@click="Comments(2)") 送出
</template>

<script>   
import { ContactProject } from "@/api/client/Project";
export default {
    components: {
    },
    props: [],
    data(){
        return{
            inputTitle:[
                {title: '姓名',id: '',getdata: ''},
                {title: '信箱',id: '',getdata: ''},
                {title: '主旨',id: '',getdata: ''},
                {title: '內容',id: '',getdata: ''}
            ]
        }
    },
    methods: {
        Comments(pid) {
            var data = {
                contact_email: this.inputTitle[1].getdata,
                contact_name: this.inputTitle[0].getdata,
                subject: this.inputTitle[2].getdata,
                body: this.inputTitle[3].getdata
            };
            console.log('data :', data);
            ContactProject(data,pid);
        }
    }
}
</script>
<style lang="sass">
@import "@/style/common.sass"
.messageAndContactContainer
    max-width: 1280px
    margin: auto
    margin-top: 20px
.messageAndContactTitle
    float: left
    font-weight: 600
    font-size: 20px
    margin-left: 20px
    margin-bottom: 20px
.titleAndInput
    margin-left: 50px
    margin-bottom: 20px
    width: 60%
    text-align: left
.messageAndContactLable
    margin-right: 10px
.messageAndContactInput
    border-bottom: 0.2px solid #ccc 
.messageAndContactInput:focus
    outline: none
    background: #eee
     
</style>
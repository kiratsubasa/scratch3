<template lang="pug">
.messageAndContactContainer
    div.titleAndInput(v-for='(items,id) in inputTitle')
        label.messageAndContactLable {{items.title}}
        input.messageAndContactInput(v-model='items.getdata' :class="id==3? 'bigInput':'smallInput'")
    button.sendButton(@click="Comments(2)") SEND
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
                {title: '內文',id: '',getdata: ''}
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
    display: flex
    flex-direction: column
.messageAndContactTitle
    text-align: left
    font-weight: 600
    font-size: 16px
    margin-bottom: 20px
.titleAndInput
    margin-bottom: 65px
    width: 100%
    text-align: left
    position: relative
.bigInput
    height: 200px
.smallInput
    height: 20px
.messageAndContactLable
    margin-right: 10px
    align-items: flex-start
    // position: absolute
    // top: 0px
    // left: 0px
.messageAndContactInput
    border-bottom: 0.2px solid #ccc 
    // position: absolute
    // top: 0px
    // left: 40px
.messageAndContactInput:focus
    outline: none
    background: $c-secondary
.sendButton
    width: 120px
    height: 53px
    font-weight: 600
    padding: 15px 34px 15px 34px
    background-color: $c-primary
    color: $c-secondary
    font-size: 16px 
    align-self: flex-end
.sendButton:hover
    opacity: 0.75
    cursor: pointer
</style>
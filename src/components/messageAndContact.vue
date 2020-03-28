<template lang="pug">

.messageAndContactContainer
    .messageAndContactTitle {{title}}
    div.titleAndInput(v-for='items in messageAndContact')
        lable.messageAndContactLable {{items.title}}
        input.messageAndContactInput(v-model='items.getdata')
</template>
<script>   
export default {
    components: {
    },
    props: ['message-and-contact'],
    data(){
        return{
            title: "留言與聯繫"
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
    display: flex
    flex-direction: column
.messageAndContactTitle
    text-align: left
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
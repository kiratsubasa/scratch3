<template lang="pug">

.messageAndContactContainer

    .titleAndInput(v-for='items in inputTitle')
        lable {{items.title}}
        input(v-model='items.getdata')
</template>
<script>   
export default {
    components: {
    },
    props: ['message-and-contact'],
    data(){
        return{
            
        }
    }
}
</script>
<style lang="sass">
@import "@/style/common.sass"
</style>
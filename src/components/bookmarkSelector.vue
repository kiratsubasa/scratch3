<template lang="pug">
#app
    .selectContainer
        select#mySelect(v-model='mark' placeholder="請選擇類別" @change="onChange($event)")
            option(v-for='(item,i) in bookmarkList' :data="bookmarkList" :key="bookmarkList.bookMarkTitle" :value='i') {{item.bookMarkTitle}}

</template>

<script>
export default {
    components: {
    },
    props: ['bookmarkList','mark-index'],
    data() {
        return {
        }
    },
    methods: {
        onChange(event) {
            console.log()
            this.$emit('changePath',event.target.value) 
        }
    }
}

</script>

<style lang="sass">
.selectContainer
    border-bottom: 1px #D1B1B4 solid
    width: 150px
#mySelect
    // border: 1px #D1B1B4 solid
</style>


<template lang="pug">
#searchBox(@click='searchStatus=false')
    .input-group
        input.search(type='text' :placeholder='searchPlaceholder' v-model='searchQuery' @keyup.enter="search")
        button.searchButton(@click="search")
            i.mdi.mdi-magnify(aria-hidden='true')
    .warning(v-if="textLenWarning.display") {{textLenWarning.msg}}


</template>

<script>

export default {
    props: ['searchPlaceholder','queryObj'],
    data() {
        return {
            drawerStatus: false,
            searchQuery:'',
            searchStatus: false,
            textLenWarning: {
                msg: "請輸入2字以上",
                display: false
            }
        }
    },
    computed: {

    },
    methods: {
        search: function(){
            if(this.searchQuery<2){
                this.textLenWarning.display=true;
            }
            else{
                this.textLenWarning.display=false;
                this.$emit('changePathByQuery', this.searchQuery)
            }
            // location.reload();
        }
    }
}
</script>

<style lang="sass">
@import "@/style/common.sass"
.warning
    color: red
</style>


<template lang="pug">
.contactContainer
    h1#listPageTitle 聯繫與服務
    iframe(src="https://maps.google.com/maps/api/js")
    .contactFlexContainer
        .contactFlex(v-for='items in contactLists') {{items.title}}
            .contactContent {{items.content}}
</template>
<script>
export default {
    data(){
        return{
            contactLists: [
                {title: '地址：',content: '30013新竹市光復路二段101號',link: ''},
                {title: '電話：',content: '(03)5715131',link: ''},
                {title: '電子郵件',content: 'abc123@gmail.com',link: ''}
            ]
        }
    }
}
</script>
<style lang="sass">
.contactContainer
    max-width: 1280px
    min-height: 960px
    padding: 30px
    margin: auto

.contactFlexContainer
    width: 80%
    margin: auto
    display: flex
    flex-wrap: wrap
    flex-direction: row
    align-content: center
    justify-content: centers

.contactFlex
    min-width: 50%
    text-align: left
    //border: 1px solid #F2DCE0
    margin-top: 50px

.contactContent
    margin-top: 5px
</style>
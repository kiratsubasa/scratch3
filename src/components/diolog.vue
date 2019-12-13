<template lang="pug">
    div
        md-dialog(:md-active.sync='showDialog')
            v-carousel()
                v-carousel-item(v-for="(item,i) in articleList.content.src" :key="i" :src="item")
                v-carousel-item(v-if="articleList.content.video" v-for="(item,i) in articleList.content.video" :key="i")
                    iframe#videoResize(width="960" height="540" :src="item" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                    md-dialog-actions
            md-button.md-fab.md-mini.md-fab-top-right(@click='showDialog = false') x
        .imgBtninDialogContainer
            //- img.imgBtninDialog(v-for="(n,index) in 4" :key="i" :src="articleList[$route.params.id-1].src[n]")(@click='showDialog = true')
            img.imgBtninDialog(v-for="(n,i) in articleList.content.src" :key="i" :src="n")(@click='showDialog = true')
</template>

<script>
    export default {
        name: 'DialogCustom',
        props: ['article-list'],
        data: () => ({
            showDialog: false,
        })
    }
</script>

<style lang="sass">
.md-dialog 
    max-width: 1080px
.imgBtninDialogContainer
    max-width: 1080px
    height: 360px
    overflow: hidden
.imgBtninDialog
    width: 240px
    height: auto
    cursor: pointer
    margin: 10px
.imgBtninDialog:hover
    opacity: 0.4
#videoResize
    height: 100%
</style>

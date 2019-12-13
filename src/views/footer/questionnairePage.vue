<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}}
    .activityPageRouterCountainer
        router-view(:bookmarkList='bookmarkList' :article-list='bookmarkList.articleList' :page-title='pageTitle' :search-placeholder='searchPlaceholder')
</template>

<script>
export default {

    data() {
        return {
            pageTitle: "問卷調查",
            searchPlaceholder: "關鍵字",
            bookmarkList:
                {
                    bookMarkTitle: '總計畫團隊',
                    link: '',
                    articleList: [
                    {
                        src:'https://www.inarts.edu.tw/uploads/ckeditor/pictures/338/content_IMG_0711.JPG',
                        type: '教學資源',
                        title: '【跨域薈萃‧美感揚帆—108年種子學校誓師大會暨增能研習】高雄場圓滿落幕', 
                        link: '/tutorialPage/tutorial1',
                        content: {
                            text: ["108年種子學校誓師大會暨增能研習最後一場於9月27日在高雄師範大學舉辦，上午開場邀請到國立屏東大學音樂系雙小提琴表演，演出過程中雖然遇到斷絃的插曲，演出者仍展現出最專業的一面從容應對，獲得全場熱烈的掌聲。緊接著計畫主持人國立臺灣師範大學藝術學院趙惠玲院長致歡迎詞，並頒發給每個參與學校合作證書和進行贈書儀式，給予參與學校教師鼓勵和期許。","此外，由計畫主持人趙惠玲院長、共同主持人黃純敏教授以及協同主持人陳淳迪教授，逐一介紹「跨領域美感教育卓越領航計畫」之理念與內容、課程模組之內涵與應用、以及執行經費和期程說明，讓種子學校夥伴們對計畫有更深入的瞭解。下午首先是教師增能研習工作坊，第一場課程設計與實務，國小階段和中等階段皆邀請到長期參與本計畫發展出特色課程的兩間學校：高雄市旗山國小鍾千昭和黃慧慈老師，分享將音樂、表演和健體結合的課程案例，讓學生更有自信地展現自我；小港高中方姿文、洪慧霖和團隊老師一同身著印有「好好生活」字樣的服裝登場，介紹透過文案教學，帶學生由觀察、探索到企劃，找到個人與世界的連結。第二場增能工作坊國小階段，國立屏東大學音樂系伍鴻沂教授特別以音樂結合魔術開場，帶領全場進入跨領域美感教育中的音樂體驗；中等階段邀請臺灣師範大學數位遊戲學習實驗室的主持人洪榮昭教授，以教育性數位遊戲為主題，透過APP和VR體驗，整合學習理論及遊戲設計應用。活動的尾聲綜合座談時間，種子學校踴躍地發言提問，與計畫主持人互動熱絡，最後在主持人的帶動下凝聚共識並互相期許道別，接下來期待全國各地每間學校的課程發展，讓美感揚帆！"]}},
                    {
                        src:'https://www.inarts.edu.tw/uploads/ckeditor/pictures/338/content_IMG_0711.JPG',
                        type: '教學資源',
                        title: '【跨域薈萃‧美感揚帆—108年種子學校誓師大會暨增能研習】高雄場圓滿落幕', 
                        link: '/tutorialPage/tutorial1',
                        content: {
                            video:["@/assets/chesweeper.mp4"],
                            link:[''],
                            src:['https://www.inarts.edu.tw/uploads/ckeditor/pictures/339/content_IMG_0675.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/340/content_IMG_0684.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/341/content_IMG_0762.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/342/content_IMG_0765.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/343/content_IMG_0801.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/344/content_IMG_0805.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/345/content_IMG_0827.JPG'],
                            text: ["108年種子學校誓師大會暨增能研習最後一場於9月27日在高雄師範大學舉辦，上午開場邀請到國立屏東大學音樂系雙小提琴表演，演出過程中雖然遇到斷絃的插曲，演出者仍展現出最專業的一面從容應對，獲得全場熱烈的掌聲。緊接著計畫主持人國立臺灣師範大學藝術學院趙惠玲院長致歡迎詞，並頒發給每個參與學校合作證書和進行贈書儀式，給予參與學校教師鼓勵和期許。","此外，由計畫主持人趙惠玲院長、共同主持人黃純敏教授以及協同主持人陳淳迪教授，逐一介紹「跨領域美感教育卓越領航計畫」之理念與內容、課程模組之內涵與應用、以及執行經費和期程說明，讓種子學校夥伴們對計畫有更深入的瞭解。下午首先是教師增能研習工作坊，第一場課程設計與實務，國小階段和中等階段皆邀請到長期參與本計畫發展出特色課程的兩間學校：高雄市旗山國小鍾千昭和黃慧慈老師，分享將音樂、表演和健體結合的課程案例，讓學生更有自信地展現自我；小港高中方姿文、洪慧霖和團隊老師一同身著印有「好好生活」字樣的服裝登場，介紹透過文案教學，帶學生由觀察、探索到企劃，找到個人與世界的連結。第二場增能工作坊國小階段，國立屏東大學音樂系伍鴻沂教授特別以音樂結合魔術開場，帶領全場進入跨領域美感教育中的音樂體驗；中等階段邀請臺灣師範大學數位遊戲學習實驗室的主持人洪榮昭教授，以教育性數位遊戲為主題，透過APP和VR體驗，整合學習理論及遊戲設計應用。活動的尾聲綜合座談時間，種子學校踴躍地發言提問，與計畫主持人互動熱絡，最後在主持人的帶動下凝聚共識並互相期許道別，接下來期待全國各地每間學校的課程發展，讓美感揚帆！"]}},
                    {
                        src:'https://www.inarts.edu.tw/uploads/ckeditor/pictures/338/content_IMG_0711.JPG',
                        type: '教學資源',
                        title: '【跨域薈萃‧美感揚帆—108年種子學校誓師大會暨增能研習】高雄場圓滿落幕', 
                        link: '/tutorialPage/tutorial1',
                        content: {
                            video:["@/assets/chesweeper.mp4"],
                            link:[''],
                            src:['https://www.inarts.edu.tw/uploads/ckeditor/pictures/339/content_IMG_0675.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/340/content_IMG_0684.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/341/content_IMG_0762.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/342/content_IMG_0765.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/343/content_IMG_0801.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/344/content_IMG_0805.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/345/content_IMG_0827.JPG'],
                            text: ["108年種子學校誓師大會暨增能研習最後一場於9月27日在高雄師範大學舉辦，上午開場邀請到國立屏東大學音樂系雙小提琴表演，演出過程中雖然遇到斷絃的插曲，演出者仍展現出最專業的一面從容應對，獲得全場熱烈的掌聲。緊接著計畫主持人國立臺灣師範大學藝術學院趙惠玲院長致歡迎詞，並頒發給每個參與學校合作證書和進行贈書儀式，給予參與學校教師鼓勵和期許。","此外，由計畫主持人趙惠玲院長、共同主持人黃純敏教授以及協同主持人陳淳迪教授，逐一介紹「跨領域美感教育卓越領航計畫」之理念與內容、課程模組之內涵與應用、以及執行經費和期程說明，讓種子學校夥伴們對計畫有更深入的瞭解。下午首先是教師增能研習工作坊，第一場課程設計與實務，國小階段和中等階段皆邀請到長期參與本計畫發展出特色課程的兩間學校：高雄市旗山國小鍾千昭和黃慧慈老師，分享將音樂、表演和健體結合的課程案例，讓學生更有自信地展現自我；小港高中方姿文、洪慧霖和團隊老師一同身著印有「好好生活」字樣的服裝登場，介紹透過文案教學，帶學生由觀察、探索到企劃，找到個人與世界的連結。第二場增能工作坊國小階段，國立屏東大學音樂系伍鴻沂教授特別以音樂結合魔術開場，帶領全場進入跨領域美感教育中的音樂體驗；中等階段邀請臺灣師範大學數位遊戲學習實驗室的主持人洪榮昭教授，以教育性數位遊戲為主題，透過APP和VR體驗，整合學習理論及遊戲設計應用。活動的尾聲綜合座談時間，種子學校踴躍地發言提問，與計畫主持人互動熱絡，最後在主持人的帶動下凝聚共識並互相期許道別，接下來期待全國各地每間學校的課程發展，讓美感揚帆！"]}},
                    {
                        src:'https://www.inarts.edu.tw/uploads/ckeditor/pictures/338/content_IMG_0711.JPG',
                        type: '教學資源',
                        title: '【跨域薈萃‧美感揚帆—108年種子學校誓師大會暨增能研習】高雄場圓滿落幕', 
                        link: '/tutorialPage/tutorial1',
                        content: {
                            video:["@/assets/chesweeper.mp4"],
                            link:[''],
                            src:['https://www.inarts.edu.tw/uploads/ckeditor/pictures/339/content_IMG_0675.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/340/content_IMG_0684.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/341/content_IMG_0762.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/342/content_IMG_0765.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/343/content_IMG_0801.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/344/content_IMG_0805.JPG','https://www.inarts.edu.tw/uploads/ckeditor/pictures/345/content_IMG_0827.JPG'],
                            text: ["108年種子學校誓師大會暨增能研習最後一場於9月27日在高雄師範大學舉辦，上午開場邀請到國立屏東大學音樂系雙小提琴表演，演出過程中雖然遇到斷絃的插曲，演出者仍展現出最專業的一面從容應對，獲得全場熱烈的掌聲。緊接著計畫主持人國立臺灣師範大學藝術學院趙惠玲院長致歡迎詞，並頒發給每個參與學校合作證書和進行贈書儀式，給予參與學校教師鼓勵和期許。","此外，由計畫主持人趙惠玲院長、共同主持人黃純敏教授以及協同主持人陳淳迪教授，逐一介紹「跨領域美感教育卓越領航計畫」之理念與內容、課程模組之內涵與應用、以及執行經費和期程說明，讓種子學校夥伴們對計畫有更深入的瞭解。下午首先是教師增能研習工作坊，第一場課程設計與實務，國小階段和中等階段皆邀請到長期參與本計畫發展出特色課程的兩間學校：高雄市旗山國小鍾千昭和黃慧慈老師，分享將音樂、表演和健體結合的課程案例，讓學生更有自信地展現自我；小港高中方姿文、洪慧霖和團隊老師一同身著印有「好好生活」字樣的服裝登場，介紹透過文案教學，帶學生由觀察、探索到企劃，找到個人與世界的連結。第二場增能工作坊國小階段，國立屏東大學音樂系伍鴻沂教授特別以音樂結合魔術開場，帶領全場進入跨領域美感教育中的音樂體驗；中等階段邀請臺灣師範大學數位遊戲學習實驗室的主持人洪榮昭教授，以教育性數位遊戲為主題，透過APP和VR體驗，整合學習理論及遊戲設計應用。活動的尾聲綜合座談時間，種子學校踴躍地發言提問，與計畫主持人互動熱絡，最後在主持人的帶動下凝聚共識並互相期許道別，接下來期待全國各地每間學校的課程發展，讓美感揚帆！"]}},
                    ]
                }
        }
    },
    methods: {
    }
}

</script>

<style lang="sass">

</style>


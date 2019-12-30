<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}}
    router-view(:article-list='articleList' :page-title='pageTitle' :search-placeholder='searchPlaceholder'  :type-list='typeList')
    //- newsList(:article-list='articleList' :page-title='pageTitle' :search-placeholder='searchPlaceholder' :type='type')
    newsListinArticle(v-if="this.$route.path!='/newsPage'" :article-list='articleList' :page-title='pageTitle')
</template>
<script src="/js/vue.js"></script>
<script src="/js/vue-resource.js"></script>
<script>
// import newsList from '@/components/ListView'
import newsListinArticle from '@/components/ListViewinArticle'
export default {
    components: {
        // newsList,
        newsListinArticle
    },
    data() {
        return {
            pageTitle: "最新消息",
            type: ["最新消息"],
            typeList: ['最新消息','跨域薈萃',' 視覺藝術'],
            searchPlaceholder: "關鍵字",
            articleList: [{
                        src:"https://www.inarts.edu.tw/uploads/ckeditor/pictures/338/content_IMG_0711.JPG",
                        type: ['最新消息','跨域薈萃'],

                    title: '【跨域薈萃‧美感揚帆—108年種子學校誓師大會暨增能研習】高雄場圓滿落幕', 
                    link: '/newsPage/newsjerry',
                    content: {
                        video:["https://www.youtube.com/embed/QaT2BsznW3M"],
                        link:[''],
                    src:["https://www.inarts.edu.tw/uploads/ckeditor/pictures/338/content_IMG_0711.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/339/content_IMG_0675.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/340/content_IMG_0684.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/341/content_IMG_0762.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/342/content_IMG_0765.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/343/content_IMG_0801.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/344/content_IMG_0805.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/345/content_IMG_0827.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/346/content_IMG_0877.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/347/content_IMG_0946.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/348/content_IMG_0918.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/349/content_IMG_0995.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/350/content_IMG_0960.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/351/content_IMG_1030.JPG",],text: ['108年種子學校誓師大會暨增能研習最後一場於9月27日在高雄師範大學舉辦，上午開場邀請到國立屏東大學音樂系雙小提琴表演，演出過程中雖然遇到斷絃的插曲，演出者仍展現出最專業的一面從容應對，獲得全場熱烈的掌聲。緊接著計畫主持人國立臺灣師範大學藝術學院趙惠玲院長致歡迎詞，並頒發給每個參與學校合作證書和進行贈書儀式，給予參與學校教師鼓勵和期許。','此外，由計畫主持人趙惠玲院長、共同主持人黃純敏教授以及協同主持人陳淳迪教授，逐一介紹「跨領域美感教育卓越領航計畫」之理念與內容、課程模組之內涵與應用、以及執行經費和期程說明，讓種子學校夥伴們對計畫有更深入的瞭解。','下午首先是教師增能研習工作坊，第一場課程設計與實務，國小階段和中等階段皆邀請到長期參與本計畫發展出特色課程的兩間學校：高雄市旗山國小鍾千昭和黃慧慈老師，分享將音樂、表演和健體結合的課程案例，讓學生更有自信地展現自我；小港高中方姿文、洪慧霖和團隊老師一同身著印有「好好生活」字樣的服裝登場，介紹透過文案教學，帶學生由觀察、探索到企劃，找到個人與世界的連結。','第二場增能工作坊國小階段，國立屏東大學音樂系伍鴻沂教授特別以音樂結合魔術開場，帶領全場進入跨領域美感教育中的音樂體驗；中等階段邀請臺灣師範大學數位遊戲學習實驗室的主持人洪榮昭教授，以教育性數位遊戲為主題，透過APP和VR體驗，整合學習理論及遊戲設計應用。','活動的尾聲綜合座談時間，種子學校踴躍地發言提問，與計畫主持人互動熱絡，最後在主持人的帶動下凝聚共識並互相期許道別，接下來期待全國各地每間學校的課程發展，讓美感揚帆！',] }
                },{
                        src:"https://www.inarts.edu.tw/uploads/ckeditor/pictures/327/content_71522156_2517088045186860_4404841230970650624_o.jpg",
                        type: ['最新消息','跨域薈萃',' 視覺藝術'],
                        
                    title: '【跨域薈萃•美感揚帆—108年種子學校誓師大會暨增能研習】臺中場圓滿達成', 
                    link: '/newsPage/news2',
                    content: {
                        video:[""],
                        link:[''],
                    src:["https://www.inarts.edu.tw/uploads/ckeditor/pictures/327/content_71522156_2517088045186860_4404841230970650624_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/328/content_71559404_2517088445186820_7523928163013885952_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/329/content_71567442_2517088401853491_1290738754503311360_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/330/content_71804165_2517088791853452_7256660882283823104_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/331/content_72236172_2517088811853450_5138526541113720832_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/332/content_71807927_2517088915186773_3582082229003616256_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/333/content_72630234_2517089005186764_1947726969625903104_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/334/content_71641044_2517089248520073_92951463176699904_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/335/content_71595662_2517089521853379_5334959060829601792_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/336/content_71729776_2517089265186738_3269928811998740480_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/337/content_71868326_2517089508520047_237159207797784576_o.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/352/content_71567444_2517089601853371_2112848542098784256_o.jpg",],text: ['108年種子學校誓師大會暨增能研習第二場在臺中大墩文化中心登場！一早由本期種子學校之一臺中市西區忠孝國小弦樂團帶來精彩優美的演出，由計畫協同主持人、國立臺中教育大學人文學院莊敏仁院長致歡迎詞，並邀請南投縣政府教育處牛素杏輔導員頒發給每校合作證書，以及由臺北市立大學人文藝術學院林小玉院長頒贈專書給中區種子學校代表南投縣竹山鎮秀林國民小學楊清豐校長，給予參與學校教師鼓勵和期許。','接著由計協同主持人林小玉院長、高震峰教授及陳韻文副教授，逐一介紹有關「跨領域美感教育卓越領航計畫」之理念與內容、課程模組之內涵與應用、以及執行經費和期程說明，讓種子學校夥伴們對計畫有更深入的瞭解。','下午首先是教師增能研習工作坊，第一場課程設計與實務，國小階段邀請臺中市福陽國小黃哲偉校長，分享推動跨領域課程的豐富經驗與感動；中等階段由國立竹東高中張澤平美術老師，介紹如何透過五感體驗傳達生命教育課題。','第二場增能工作坊國小階段，由國立清華大學幼兒教育學系劉淑英副教授以充滿活力的肢體帶動，延伸出美感經驗的多元想像與創造；中等階段邀請到臺北市私立靜心高中國中部蘇峰立教務主任，分享學校已堅持11年的畢業歌曲創作課程以及及加入數位科技的助益。','在本次活動中，很開心看到種子學校與師培大學開啟連結與交流，期待在雙方合作之下激盪出跨領域美感教育的豐富樣貌！',' ',] }
                },{
                        src:"https://www.inarts.edu.tw/uploads/ckeditor/pictures/313/content_A1.JPG",
                        type: ['最新消息','跨域薈萃'],
                        
                    title: '【跨域薈萃•美感揚帆—108年種子學校誓師大會暨增能研習】臺北場圓滿落幕', 
                    link: '/newsPage/news3',
                    content: {
                        video:[""],
                        link:[''],
                    src:["https://www.inarts.edu.tw/uploads/ckeditor/pictures/313/content_A1.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/314/content_A2.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/315/content_A3.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/317/content_A6.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/318/content_B1.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/319/content_B2.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/320/content_B3.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/321/content_C1-2.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/322/content_C1-4.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/323/content_C2-2.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/324/content_C2-3.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/325/content_D2.JPG","https://www.inarts.edu.tw/uploads/ckeditor/pictures/326/content_D4.JPG",],text: ['108年種子學校誓師大會暨增能研習第一棒臺北場，在上週五(9/6)於臺北市立大學正式展開！一早由本期種子學校之一的臺北市仁愛國小直笛隊表演揭開序幕，以及邀請到教育部師資培育及藝術教育司李毓娟副司長、計畫主持人國立臺灣師範大學藝術學院趙惠玲院長致歡迎詞，並頒發給每個參與學校合作證書和進行贈書儀式，給予參與學校教師鼓勵和期許。','緊接著由計畫主持人趙惠玲院長、共同主持人黃純敏教授以及協同主持人李其昌副教授，逐一介紹有關「跨領域美感教育卓越領航計畫」之理念與內容、課程模組之內涵與應用、以及執行經費和期程說明，讓種子學校夥伴們對計畫有更深入的瞭解。','活動下午首先是教師增能研習工作坊，第一場課程設計與實務，國小階段邀請國立科學工業園區實驗高中國小部饒詠婷老師分享如何統整語文、自然、表演藝術、音樂、視覺藝術等課程，帶領學生認識海洋、感受海洋；中等階段由長期參與本計畫的臺北市立五常國中陳瀅如教務主任示範藉由製作一把琴，整合生活科技、音樂和理化課程。','第二場增能工作坊國小階段，由臺灣師範大學電機系賴以威助理教授，從數學的角度解析世界名畫中蘊藏的數字、幾何概念，展示數學與藝術的課程連結；中等階段邀請臺灣師範大學數位遊戲學習實驗室的主持人洪榮昭教授，以教育性數位遊戲為主題，透過APP和VR體驗，整合學習理論及遊戲設計應用。','在活動的尾聲，安排種子學校代表與師資培育大學委員互相認識、交流，以及並由計畫主持人和與會來賓進行綜合座談，在經驗分享、共識凝聚中，為活動畫下完美的句點。','接下來9月20日、27日，在臺中市大墩文化中心、國立高雄師範大學還有兩場誓師大會暨增能研習，期待串聯串聯全國各地種子學校和師資培育大學的力量，將跨領域美感教育穩健扎根，在各個學科領域中發芽茁壯，共創臺灣教育的新樣貌！',] }
                },{
                        src:"https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png",
                        type: ['最新消息',' 視覺藝術'],
                        
                    title: '教育部「108年度美感教育工作教師國外進修參訪」獲選名單出爐', 
                    link: '/newsPage/news4',
                    content: {
                        video:[""],
                        link:[''],
                    src:[],text: ['此次教育部「108年度美感教育工作教師國外進修參訪」自跨領域美感教育卓越領航計畫團隊辦理公告以來，接獲超過100件美感教育工作教師之報名表。','經由中小學各學習階段代表、藝術類、學科類、以及教育課程等學者專家組成之遴選委員進行書面審查，再經決選會議審慎考量教育階段、城鄉區域、藝術與非藝術學科、教學與行政經驗等面向，選拔出 60位正取以及19位備取之優秀教師，分別出訪荷蘭、日本、泰國三個國家。','期許中小學參與美感教育相關計畫的教育人員，透過國際交流參訪活動得以提升臺灣教師的國際視野，進而引導學生多元開展各種美感經驗與文化知能，發揮自發主動學習之動機與熱情，厚植核心素養，進而落實全民美育。教師返國後，依其專長將參訪經驗透過課程開發、講座、工作坊等活動，在課堂、校園進行分享，甚至跟社區、社會進一步對話交流，以宣揚、擴大國際參訪之效益。','在此恭喜各位獲選的老師，請各位老師們詳讀注意事項，並於時限前繳交相關文件',' ','錄取名單｜正取名單　備取名單','注意事項｜參訪教師注意事項',' ','有關108年度美感教育工作教師國外進修參訪相關事宜，請聯繫','黃宥嘉助理｜02-7734-6992　yjhuanginarts@gmail.com','林芸安助理｜02-7734-3058　ntnu7777@gmail.com',] }
                },{
                        src:"https://www.inarts.edu.tw/uploads/ckeditor/pictures/310/content____.jpg",
                        type: ['最新消息',' 視覺藝術'],
                        
                    title: '【跨域薈萃•美感揚帆—108年種子學校誓師大會暨增能研習】活動公告', 
                    link: '/newsPage/news5',
                    content: {
                        video:[""],
                        link:[''],
                    src:["https://www.inarts.edu.tw/uploads/ckeditor/pictures/310/content____.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/311/content______.jpg","https://www.inarts.edu.tw/uploads/ckeditor/pictures/312/content_123.jpg",],text: ['本計畫於108年招募全國153所國小至高中階段學校，擔任跨領域美感教育種子學校，進行研發與推廣各學科（領域、群科）之跨領域美感課程。「跨域薈萃•美感揚帆—108年種子學校誓師大會暨增能研習」擬分北、中、南三區辦理，安排種子學校與師資培育大學委員齊聚一堂，同時邀請各縣市政府教育局處長官蒞臨指導，共同瞭解本期跨領域美感教育計畫內容與執行重點，並進行教師增能研習，以期讓跨領域美感教育遍地開花！',' ','全國跨領域美感教育種子學校代表（每校1~2人）、師資培育大學委員、各直轄市政府教育局及縣（市）政府美感教育計畫承辦單位。',' ','●請最遲於各場次活動兩週前上網填寫google表單報名參與，網址：https://tinyurl.com/y2slxe2m','●全程參與者可核發5小時全國教師在職進修網研習時數（課程代碼：2679618），請於報到時正確填寫身分證字號及確實簽到。','●請各校惠予出席師長公差假及課務排代，學校人員交通費由本計畫依「國內出差旅費報支要點」核給，兼代課鐘點費由各校「種子學校補助款」支應。各縣市政府人員交通費由原單位支付。','●交通、住宿(補助上限1600/日)開銷單據請於正面簽名，買受人：國立臺灣師範大學，統一編號：03735202','●各場次備有午餐及茶水，響應環保歡迎自行攜帶環保餐具。','●活動議程、交通資訊、學校名單等請參閱活動計畫書',] }
                },{
                        src:"https://www.inarts.edu.tw/uploads/ckeditor/pictures/309/content__________________-03.jpg",
                        type: ['最新消息',' 視覺藝術'],
                        
                    title: '師資培育/合作大學名單公告', 
                    link: '/newsPage/news6',
                    content: {
                        video:[""],
                        link:[''],
                    src:["https://www.inarts.edu.tw/uploads/ckeditor/pictures/309/content__________________-03.jpg",],text: [] }
                },{
                        src:"https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png",
                        type: ['最新消息',' 視覺藝術'],
                        
                    title: '全國種子學校正式名單公告', 
                    link: '/newsPage/news7',
                    content: {
                        video:[""],
                        link:[''],
                    src:[],text: ['期待與您的「美」一次相遇 ',] }
                },{
                        src:"https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png",
                        type: ['最新消息'],
                        
                    title: '種子學校繳交計畫書與經費表事宜', 
                    link: '/newsPage/news8',
                    content: {
                        video:[""],
                        link:[''],
                    src:[],text: ['敬請通過遴選之種子學校師長，辦理工作計畫書、經費編列及函送事宜。','請依不同轄屬單位進行作業流程，謝謝您！','**6/17格式更新，請依照下列連結，或貴校收到之公文附件/email附件為準','（點擊檔名可下載格式）',' ','【共通資料】',' ','種子學校遴選通過名單(縣市轄屬) 07/01更新*','種子學校遴選通過名單(國教署轄屬)',' ','種子學校工作項目',' ','【縣市轄屬學校】',' ','【國教署轄屬學校】',' ','【聯絡資訊】','相關事宜敬請參考本網站FAQ','或洽本計畫專任助理黃楚雯小姐','電話：02-77346991 / 02-77343039','Email：musichcw@gmail.com',] }
                },{
                        src:"https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png",
                        type: ['最新消息'],
                        
                    title: '跨領域美感教育卓越領航計畫 全國種子學校名單公告', 
                    link: '/newsPage/news10',
                    content: {
                        video:[""],
                        link:[''],
                    src:[],text: ['十分感謝來自全國各縣市政府局處長官的協助，以及學校行政主管與師長們的熱情投件，','在短短的招募時間裡，本計畫收到將近300所學校的申請書。','經由計畫團隊召開遴選會議，選出全國153所「跨領域美感教育卓越領航計畫」的種子學校！','未來計畫團隊將透過講習、培訓、協作等方式，陪伴所有的合作學校，','讓我們一同共創精彩豐富的跨領域美感課程！',' ','備註：各縣市備取學校之遞補事宜將於7月中旬另行個別通知。',' ','相關檔案下載','種子學校遴選通過名單(縣市轄屬) 07/01更新*','種子學校遴選通過名單(國教署轄屬)','種子學校【備取】名單',' ',' ',' ',' ',' ',] }
                },{
                        src:"https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png",
                        type: ['最新消息'],
                        
                    title: '相關資料｜', 
                    link: '/newsPage/news11',
                    content: {
                        video:[""],
                        link:[''],
                    src:[],text: ['為達成十二年國民基本教育倡導全人教育之課程精神，下半年度辦理美感教育工作教師國外進修參訪，提供教師在藝術美感方面增能進修的機會。希望透過國外進修參訪加強多樣化美感體驗，拓展教師國際視野與人文素養；經由國際美感教育的觀課交流，與當地教育人員進行專業對話，使教師得以接軌國際教育趨勢；藉由國外教學媒材蒐集，增能教師，強化教師教學力，並進而激發學生學習動機。',' ',' ','獲選教師各學習階段名額：泰國、荷蘭、日本三團，共60名。',' ','符合資格教師皆可投件參加，詳見計畫書',' ','108年6月28日前接受推薦報名截止','108年7月31日前完成遴選審核',' ','計畫書與行程簡介','報名表件',' ','教師國外進修參訪得以吸收各國教育經驗優勢與多元文化，藉以融會十二年國民基本教育之課程發展精神，促進本國教育多元面貌。教師回國後公開分享參訪經驗或開放觀課，以擴散國際交流效益，提升教師國際視野，進而引導學生多元開展各種互動能力，發揮自發主動學習之動機與熱情，厚植核心素養。',' ','有關108年美感教育工作教師國外進修參訪相關事宜，請聯繫','黃宥嘉助理｜02-7734-6992　yjhuanginarts@gmail.com','林芸安助理｜02-7734-3058　ntnu7777@gmail.com',] }
                },{
                        src:"https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png",
                        type: ['最新消息'],
                        
                    title: '歡迎報名臺博館【博物館與戲劇的相遇】專題座談！', 
                    link: '/newsPage/news12',
                    content: {
                        video:[""],
                        link:[''],
                    src:[],text: ['今年起臺博館將發起「發現臺灣-很有戲」戲劇導覽種籽計畫，你是否對導覽與戲劇的相遇充滿好奇呢？展場導覽、戲劇與參觀民眾的邂逅，可以交集出什麼可能？','本講座邀請此次戲劇導覽計畫顧問，同時是教育部跨領域美感教育卓越領航計畫協同主持人陳韻文教授，分享她與楊逵文學紀念館規劃與執行「戲劇教育x導覽種子」的合作經驗。她將回溯這段以戲劇導覽培訓為起點，跨越劇場、博物館與社區邊界的共學歷程，為我們提示如何以戲劇為媒介，博物館為平台，在跨領域及多層次的美感經驗中，促成文化交換與知識公共化。','報名網址：https://reurl.cc/oAaaM',' ','＊全程參與講座之教師，可核發教師研習時數',] }
                },{
                        src:"https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png",
                        type: ['最新消息'],
                        
                    title: '東區成果巡迴展與種子學校遴選說明會 相關活動回顧', 
                    link: '/newsPage/news13',
                    content: {
                        video:[""],
                        link:[''],
                    src:[],text: ['▲成果巡迴展於a-zone花蓮文化創意產業園區 第23棟展出',' ','東區成果巡迴展於5月16日在a-zone花蓮文化創意產業園區開跑，並於5月18日舉辦跨領域美感課程體驗工作坊、5月21日上下午舉辦國小階段及中等階段的種子學校遴選說明會。',' ','▲國立臺東專科學校教師參與中等階段種子學校遴選說明會',' ','種子學校遴選說明會，在5月21日上下午緊鑼密鼓地舉行。由計畫協同主持人 國立臺灣藝術大學 藝術與人文教學研究所 李其昌所長、國立臺北教育大學 藝術與造型設計學系 陳淳迪教授 分享計畫概要及說明經費運用，並邀請 國立臺東大學 音樂學系 郭美女教授、花蓮縣立國風國中 湯香櫻老師作師資培育大學的實務經驗分享。','　　當天也有許多來自各方的貴賓蒞臨。計畫端邀請 國立東華大學 藝術創意產業學系 的羅美蘭教授，分享花蓮地區執行經驗，臺東縣教育處 李治國科員、花蓮縣教育處 郭思妤小姐 到場關心。更有 臺南市立土城國小 張世昌校長、花蓮縣立觀音國小 陳慈芳校長、花蓮縣立景美國小 郭玲瑩校長、花蓮縣立和平國小 艾石生校長、臺東縣立大坡國小 林素慧校長 及多位學校主任親自前往說明會，瞭解計畫內容。',' ','▲透過不同裁切的方式，探索紙材造型的可能性',' ','▲工作坊學員利用電鑽製作雨聲棒',' ','5月18日的工作坊活動，由 臺東縣立新生國小 張釋月老師 及 連江縣立東莒國小鄭慧琴主任 帶領，進行了充滿在地風情的體驗課程。張釋月老師從探究的角度出發，讓現場老師探索紙材的各種變化，感受造型的無限可能，創作充滿個人特色的服飾作品。鄭惠琴主任由環境議題出發，從生態關懷的角度，利用當地廢棄素材，製作了富含島嶼與自然能量的雨聲棒。兩場工作坊不僅帶回了別具特色的作品，也感受了跨領域美感課程所蘊含的豐沛生命力。',' ','▲學校老師互相交流課程開發經驗',' ','花蓮的展覽雖伴隨著陣陣大雨，但仍舊有許多師長、民眾不畏風雨地遠道而來，圓滿了成果巡迴展的最終場展出。歷時兩個月、巡迴全臺三地的成果巡迴展在此畫下完美的句號，感謝各位老師們對跨領域美感教育計畫的關心！也希望「『這堂甚麼課？』跨領域美感教育計畫成果巡迴展」能夠成為未來教師教學的養分，開創臺灣教育的無限可能。',] }
                },{
                        src:"https://www.aade.org.tw/website/wp-content/uploads/2019/05/霧室.png",
                        type: ['最新消息'],
                        
                    title: '種子學校遴選相關問題解答', 
                    link: '/newsPage/news14',
                    content: {
                        video:[""],
                        link:[''],
                    src:[],text: ['更多與課程、經費相關問題，請至 FAQ專區',] }
                }]
        }
    }
}

</script>

<style lang="sass">

</style>


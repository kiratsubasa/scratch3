<template lang="pug">
#app
    .PathText 你的位置 : 首頁 > {{pageTitle}} 
    .BookMarkPageContainer
        .BookMarkContainer
            ListwithBookMark(:bookmark-list='bookmarkList' :search-placeholder='searchPlaceholder' :search-lists="bookmarkList[articleListIdx].articleList")
        router-view(:bookmark-list='bookmarkList[articleListIdx]' :page-title='pageTitle' :search-placeholder='searchPlaceholder' )

</template>

<script>
import ListwithBookMark from '@/components/ListwithBookMark'
export default {
    components: {
        ListwithBookMark
    },
    data() {
        return {
            articleListIdx: '',
            pageTitle: "美感人才",
            searchPlaceholder: "關鍵字",
            bookmarkList: [
                {
                    bookMarkTitle: '總計畫團隊',
                    link: '/hr/mark1',
                    articleList: [{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/62/cover_20140912195714.jpg",
                            type: '美感人才',
                            
                        title: '趙惠玲', 
                        staffTitle: ' 臺北市立大學視覺藝術學系專任教授',
                        content: {
                            phone:"0955845671",
                            link:[''],
                            email:'jdfjhw@gmail.com',
                        text: ["《學、經歷》","美國賓州州立大學哲學博士","國立臺灣師範大學美術系專任講師","國立臺灣師範大學美術系副教授","臺北市立教育大學兼任教授","國立臺北教育大學兼任教授","國立臺灣師範大學教學發展中心主任","國立臺灣師範大學副教務長","十二年國民教育藝術領域課程綱要副召集人","","《研究專長》","藝術教育理論與實務","視覺文化研究","性別研究","《學、經歷》 ","美國華盛頓大學(西雅圖)哲學博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/63/cover_8622623.jpg",
                            type: '美感人才',
                            
                        title: '黃純敏', 
                        staffTitle: ' 國立臺灣師範大學藝術學院院長暨美術學系專任教授',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["國立臺灣師範大學教育學系《教育研究集刊》課程與教學領域責任編輯 ","國立臺灣師範大學教務處企劃組組長","國立臺灣師範大學教育學系課程與教學學群召集人 ","國立臺灣師範大學教育學系課程委員會召集人","《研究專長》 ","多元文化課程與教學研究","教育人類學研究 ","課程比較研究","質性研究","多元文化教育",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/61/cover_20140913213622.jpg",
                            type: '美感人才',
                            
                        title: '林小玉', 
                        staffTitle: ' 國立臺灣師範大學教育學系暨課程與教學研究所教授',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》","美國伊利諾大學香檳分校課程與教學哲學博士","臺北市立大學音樂學系系主任","","《研究專長》","音樂教育理論與實務","聽覺音樂媒體設計與製作","電腦輔助音樂教學","藝術與人文教材教法","音樂基礎訓練","鋼琴教學","《學、經歷》 ","澳大利亞國家大學藝術學院哲學博士","12年國民基本教育藝術領域課綱研修委員","教育部國教署課程與教學輔導群藝術領域北區召集人","技術型高中一般科目暨藝術群科中心委員","教育部國教署教學正常化委員","臺北市立大學音樂學系兼任副教授","中國文化大學戲劇學系兼任助理教授","國立臺東大學兒童文學研究所助理教授 ","國立臺南大學幼兒教育學系、戲劇創作與應用學系兼任講師 ","國立屏東教育大學視覺藝術學系兼任講師 ",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/60/cover_Image_a2c6e33.jpg",
                            type: '美感人才',
                            
                        title: '李其昌', 
                        staffTitle: ' 臺北市立大學人文藝術學院院長暨音樂學系專任教授',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《研究專長》 ","表演藝術教材教法 ","表導演專題研究 ","兒童戲劇 ","創作性戲劇 ","戲劇教育史","《學、經歷》 ","美國賓州州立大學哲學博士","臺北市立大學視覺藝術學系主任暨所長","世界藝術教育學會(InSEA)財務長",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/149/cover_____054___.jpg",
                            type: '美感人才',
                            
                        title: '高震峰', 
                        staffTitle: ' 國立臺灣藝術大學藝術與人文教學研究所專任副教授',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《研究專長》 ","藝術教育、數位視覺文化、數位藝術","《學、經歷》 ","美國賓州州立大學音樂教育博士(Ph.D.)","東海大學聲樂演唱碩士","臺中教育大學精緻師資培育計畫「藝術與人文」學習領域研究室主持人",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/78/cover____.JPG",
                            type: '美感人才',
                            
                        title: '莊敏仁', 
                        staffTitle: ' 臺北市立大學視覺藝術學系專任教授',
                        content: {
                            phone:[""],
                            link:[''],
                            email:[''],
                        text: ["《研究專長》","音樂教學、合唱教學、音樂學習評量、音樂課程設計、聲樂教學","師資培育、兒童歌唱教學、音樂思考、檔案評量",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/24/cover____.jpg",
                            type: '美感人才',
                            
                        title: '陳韻文', 
                        staffTitle: ' 計畫專任助理',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》","英國華威大學University of Warwick戲劇教育哲學博士 (PhD.)","國立臺灣大學戲劇研究所碩士 (MA)","國立臺灣大學外國語文學系學士","國立臺灣大學輔系人類學系 (BA)","《研究專長》","教育戲劇、戲劇課程設計與教學、多元智慧與多元感官教學、西洋戲劇與劇場史"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/124/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '陳淳迪', 
                        staffTitle: ' 國立臺灣藝術大學藝術與人文教學研究所兼任副教授',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》 ","Ph.D. in Visual &amp; Information, Coventry University ","《研究專長》 ","消費性設計，使用性分析、數位與協同設計，設計溝通、數位學習，設計教學",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/5/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '林芸安', 
                        staffTitle: ' 國立臺北教育大學藝術與造型設計學系教授',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》","國立臺北藝術大學美術學院西洋藝術史碩士","《研究專長》","美學理論、19世紀西洋藝術",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/606/cover__.jpg",
                            type: '美感人才',
                            
                        title: '黃宥嘉', 
                        staffTitle: ' 計畫專任助理',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》","臺北市立大學視覺藝術研究所","《研究專長》","文化研究、當代藝術",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/607/cover____.jpg",
                            type: '美感人才',
                            
                        title: '張芝榕', 
                        staffTitle: ' 計畫專任助理',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》","國立彰化師範大學美術學系研究所碩士","《研究專長》","藝術創作、策展實務",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/609/cover____.jpg",
                            type: '美感人才',
                            
                        title: '吳宥徵', 
                        staffTitle: ' 計畫專任助理',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》","國立臺灣師範大學社會教育所碩士","《研究專長》","社會教育、文化研究",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/585/cover____.jpg",
                            type: '美感人才',
                            
                        title: '邱鈴惠', 
                        staffTitle: '',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》 ","國立臺灣師範大學美術學系研究所研究生","《研究專長》 ","美術教育"] }
                    },]
                },
                {
                    bookMarkTitle: '師培大學委員',
                    link: '/staffPage/mark2',
                    articleList: [{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/40/cover____.jpg",
                            type: '美感人才',
                            
                        title: '潘麗珠', 
                        staffTitle: ' 國立台灣師範大學助理教授',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》","國立臺灣師範大學文學博士","國立臺灣師範大學國文研究所碩士","國立臺灣師範大學國文系學士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/605/cover____.png",
                            type: '美感人才',
                            
                        title: '張玉山', 
                        staffTitle: ' 國立臺灣師範大學國文系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","戲曲、古典詩詞學、文藝美學、現代文學、國語文教材教法、詩歌吟誦、閱讀與寫作教學、朗讀教學"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/75/cover____.jpg",
                            type: '美感人才',
                            
                        title: '潘宇文', 
                        staffTitle: ' 國立台灣師範大學優聘教授',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學術專長》","科技教育、技術創造力、多媒體設計",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/592/cover____.jpg",
                            type: '美感人才',
                            
                        title: '張永達', 
                        staffTitle: ' 國立臺灣師範大學音樂學系暨研究所副教授',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》 ","美國俄亥俄州立大學(The Ohio State University)音樂教育博士","美國俄亥俄州立大學(The Ohio State University)音樂教育碩士","國立台灣師範大學音樂系聲樂組學士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/602/cover__.jpg",
                            type: '美感人才',
                            
                        title: '石蘭梅', 
                        staffTitle: ' 國立臺灣師範大學副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","音樂教學法、青少年歌唱教學、合唱教學法",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/604/cover__.jpg",
                            type: '美感人才',
                            
                        title: '賴以威', 
                        staffTitle: ' 台灣師範大學副教授',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》 ","維也納大學奧地利植物學 博士","《研究領域》","生態學、植物生理學、生物教育、生物顯微技術學",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/76/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '張連強', 
                        staffTitle: '',
                        content: {
                            phone:["0955845671"],
                            link:[''],
                            email:['jdfjhw@gmail.com'],
                        text: ["《學、經歷》 ","國立中央大學中文系戲曲組博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/591/cover____.jpg",
                            type: '美感人才',
                            
                        title: '蘇慧君', 
                        staffTitle: ' 國立臺灣藝術大學戲劇學系助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","表演、戲劇教育、創作性戲劇、中國戲曲、導演、即興表演",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/77/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '江學瀅', 
                        staffTitle: ' 臺北市立大學助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立臺灣大學	生態學暨演化生物學研究所	博士	","《研究專長》","分子演化、植物胞器基因體",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/150/cover____.jpg",
                            type: '美感人才',
                            
                        title: '劉淑英', 
                        staffTitle: ' 中國文化大學(心理輔導學系)專任暨國立臺灣師範大學美術學系助理教授兼任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立臺灣師範大學美術研究所藝術教育博士","美國紐約大學(NYU)藝術治療碩士","國立台東大學兒童文學碩士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/601/cover____.jpg",
                            type: '美感人才',
                            
                        title: '陳孟亨', 
                        staffTitle: ' 國立清華大學幼兒教育學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","藝術治療、藝術教育、兒童文學",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/204/cover____1.png",
                            type: '美感人才',
                            
                        title: '施枝芳', 
                        staffTitle: ' 國立清華大學副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","英國Roehampton大學舞蹈教育學哲學博士","美國UCLA編舞藝術碩士","國立藝術學院舞蹈系(第一屆)藝術學士","雲門舞集舞者與編舞者","國立台北藝術大學舞蹈系兼任副教授",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/81/cover____.jpg",
                            type: '美感人才',
                            
                        title: '羅雅柔', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國 La Sierra University 教育博士 Ed.D","美國 La Sierra University 教育專家 Ed.S","美國愛荷華大學表演藝術碩士M.F.A","中國文化大學舞蹈系學士","台灣藝術大學專士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/46/cover____.jpg",
                            type: '美感人才',
                            
                        title: '張善貿', 
                        staffTitle: ' 國立臺灣體育運動大學副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","學科：論文寫作、教育心理學、課程設計、教學法、舞蹈教材教法、舞蹈教學實習、芭蕾欣賞、芭蕾教學法、西洋舞蹈史、硬鞋教學法 、藝術概論 、舞蹈與人格特質 、舞蹈教育專題 、美學 、舞蹈史專題研究、 舞蹈教育專題","術科：芭蕾舞基本 、硬鞋課(基本進階) 、芭蕾舞進階",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/157/cover____.jpg",
                            type: '美感人才',
                            
                        title: '李靜芳', 
                        staffTitle: ' 國立彰化師範大學英語系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","美國印第安那大學語言教育系 博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/132/cover_______.jpg",
                            type: '美感人才',
                            
                        title: '陳箐繡', 
                        staffTitle: ' 國立彰化師範大學美術學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","英語教學教材教法、外語學習動機、語言測驗"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/595/cover__.JPG",
                            type: '美感人才',
                            
                        title: '吳育臻 ', 
                        staffTitle: ' 國立嘉義大學視覺藝術學系暨研究所教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","美國賓州州立大學藝術教育研究所博士	",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/598/cover__.jpg",
                            type: '美感人才',
                            
                        title: '蔡佩桂', 
                        staffTitle: ' 國立高雄師範大學副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","藝術教育研究法、藝術教育理論、當代藝術教育思潮、兒童美術教育、博物館學、博物館教育、博物館建築詮釋、西方現代藝術史、書法"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/89/cover____.jpg",
                            type: '美感人才',
                            
                        title: '伍鴻沂', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國賓州州立大學(課程與教學、音樂)哲學博士 ","奧地利國家小提琴文憑",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/71/cover____.jpg",
                            type: '美感人才',
                            
                        title: '張繼文', 
                        staffTitle: ' 國立屏東教育大學音樂學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","小提琴教學、管絃樂團指揮、人才發現與培育、一般音樂教育、音樂教育議題研討",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/597/cover_289.png",
                            type: '美感人才',
                            
                        title: '朱書萱', 
                        staffTitle: ' 國立屏東大學視覺藝術學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立臺灣師範大學美術研究所藝術碩士","英國莎爾芙特大學藝術史學博士候選人",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/83/cover____2.jpg",
                            type: '美感人才',
                            
                        title: '羅美蘭', 
                        staffTitle: ' 國立屏東大學副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","版畫、藝術與人文教材教法、現代藝術、","基礎設計、美術心理學、兒童美術評量、美術",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/84/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '郭美女', 
                        staffTitle: ' 國立東華大學藝術創意產業學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立台灣師範大學國文研究所 博士","《研究專長》 ","東方文化藝術實踐、漢字歷史經典研究、書寫與文化",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/72/cover_2015-12-12-10-05-26qj43rllrxm2i52jci5mtnxla2015-03-05-09-33-21threiu453qku2q45gwytdfqk1.jpg",
                            type: '美感人才',
                            
                        title: '曾逸仁', 
                        staffTitle: ' 國立臺東大學音樂系教授兼系主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立東華大學藝術創意產業學系教授","Professor, Department of Art &amp; Creative Industry, National Dong Hwa University, Taiwan, ROC.","英國倫敦羅漢普頓大學藝術與設計教育博士","Ph.D, Art &amp; Design Education, Roehampton University London, England","曾任國立東華大學和花蓮教育大學視覺藝術教育研究所所長","Director, Institute of Visual Art Education, National Hualien Education University","Director, Institute of Visual Art Education, National Dong Hwa University",] }
                    },{
                        src:"https://www.inarts.edu.tw/uploads/member/avatar/55/cover____.jpg",
                        type: '美感人才',
                        title: '鍾怡慧', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                            text: ["《學、經歷》","國立臺灣師範大學哲學博士",]
                        }
                    },]
                },
                {
                    bookMarkTitle: '諮詢委員',
                    link: '/staffPage/mark3',
                    articleList: [{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/184/cover____2.png",
                            type: '美感人才',
                            
                        title: '丁鳳珍', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立成功大學中國文學系碩士班 ","東海大學中國文學系博士班 ","東海大學中國文學系兼任助理教授","靜宜大學人文科兼任助理教授","國立臺中教育大學臺灣語文學系助理教授","國立臺中教育大學臺灣語文學系副教授",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/145/cover____2.jpg",
                            type: '美感人才',
                            
                        title: '王 璟 ', 
                        staffTitle: ' 國立臺中教育大學臺灣語文學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","台語文學創作、台語文學研究、台語教材教法研究、歌仔冊研究、台語歌謠研究、台灣文學研究、 現代文學研究、應用台文及中文寫作教學"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/128/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '王友輝', 
                        staffTitle: ' 致理科技大學通識教育中心助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立臺灣師範大學國文研究所博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/172/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '王麗雁', 
                        staffTitle: ' 國立臺東大學兒童文學研究所副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","國文","閱讀及寫作","應用文及習作","人文類通識課程",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/202/cover____.jpg",
                            type: '美感人才',
                            
                        title: '王婉容 ', 
                        staffTitle: ' 國立彰化師範大學藝術教育研究所副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立藝術學院戲劇研究所戲劇創作組藝術碩士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/189/cover____.jpg",
                            type: '美感人才',
                            
                        title: '王盈丰', 
                        staffTitle: ' 國立臺南大學戲劇創作與應用學系教授兼國際事務處國際長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","兒童戲劇、劇本創作、表導演創作",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/185/cover____.jpg",
                            type: '美感人才',
                            
                        title: '王雅茵', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國Claremont Graduate University, Educational Studies博士 ",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/195/cover____.jpg",
                            type: '美感人才',
                            
                        title: '孔崇旭', 
                        staffTitle: ' 國立臺中教育大學英語學系副教授兼系主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","創造力教育、多元文化教育、英語科技學科教學知能（TPACK）、科技輔助英語教學"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/122/cover_IMG_3334.JPG",
                            type: '美感人才',
                            
                        title: '石素錦', 
                        staffTitle: ' 國立臺中教育大學資訊工程學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立交通大學資訊工程博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/138/cover____1.png",
                            type: '美感人才',
                            
                        title: '田秀蘭 	', 
                        staffTitle: ' 國立高雄師範大學英語學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","數位學習、遊戲式學習、互動式多媒體教材設計、電子書設計、視覺化程式設計、人機互動設計、APP軟體設計",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/159/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '丘永福', 
                        staffTitle: ' 國立臺灣師範大學教育心理與輔導學系教授兼系主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國德州休士頓大學 Ph.D. in Applied Linguistics and TESOL, University of Houston",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/165/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '江學瀅', 
                        staffTitle: ' 東方設計學院文化創意設計研究所專案教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","英語教學 (閱讀教學、師資培訓)暨兒童英語教學、英美文學(小說、戲劇)、應用語言學 (認知心理學、語言習得、社會語言學)、電腦輔助英語教學、語言分析專題研究、兒童文學與教材編撰研究",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/86/cover______.jpg",
                            type: '美感人才',
                            
                        title: '江映碧', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","中國文化大學舞蹈音樂科畢業","英國國家舞蹈碩士","《研究專長》","舞蹈教材教法、動作分析、當代舞蹈發展史、舞蹈教學、舞蹈課程研究、舞蹈創作、舞蹈教育理論專題、藝術與人文表演藝術教材教法",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/174/cover_cover______5_.jpg",
                            type: '美感人才',
                            
                        title: '伍鴻沂', 
                        staffTitle: ' 中國文化大學舞蹈學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國賓州州立大學(課程與教學、音樂)哲學博士 ","奧地利國家小提琴文憑",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/199/cover____.jpg",
                            type: '美感人才',
                            
                        title: '何文玲', 
                        staffTitle: ' 國立屏東教育大學音樂學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","小提琴教學、管絃樂團指揮、人才發現與培育、一般音樂教育、音樂教育議題研討",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/155/cover____2.jpg",
                            type: '美感人才',
                            
                        title: '何育真', 
                        staffTitle: ' 國立嘉義大學視覺藝術學系暨研究所副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立雲林科技大學設計學研究所博士","美國伊利諾大學藝術教育碩士","國立台灣師範大學美術學系學士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/191/cover____.jpg",
                            type: '美感人才',
                            
                        title: '呂香珠', 
                        staffTitle: ' 國立臺東大學音樂系助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","藝術與設計教育、藝術實務研究、藝術批評教學理論，藝術理論，藝術創作"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/153/cover____2.jpg",
                            type: '美感人才',
                            
                        title: '吳岱融 ', 
                        staffTitle: ' 國立臺中教育大學體育學系教授兼系主任（已退休）',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立臺灣師範大學音樂教育博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/186/cover____3.jpg",
                            type: '美感人才',
                            
                        title: '吳建昇', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立成功大學歷史所碩士","國立成功大學歷史所博士","台南應用科技大學通識教育中心系助理教授",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/139/cover____3.png",
                            type: '美感人才',
                            
                        title: '吳淑禎', 
                        staffTitle: ' 國立嘉義大學應用歷史學系助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","台灣史、地方區域研究、台灣地方發展、社區總體營造、民間宗教研究",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/182/cover____.jpg",
                            type: '美感人才',
                            
                        title: '李源順', 
                        staffTitle: ' 國立臺灣師範大學 師資培育與就業輔導處副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立彰化師範大學 輔導與諮商學系博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/161/cover____.jpg",
                            type: '美感人才',
                            
                        title: '余季音', 
                        staffTitle: ' 台北市立大學數學系含數學教育碩士班專任教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","師資培育、輔導與諮商、生涯與學習",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/41/cover____.png",
                            type: '美感人才',
                            
                        title: '余昭玟', 
                        staffTitle: ' 國立清華大學藝術與設計學系助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立台灣師範大學數學學系博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/44/cover____.JPG",
                            type: '美感人才',
                            
                        title: '余瑞琳', 
                        staffTitle: ' 國立屏東大學中國語文學系退休教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","數學教育(教師專業發展、課程、教學、學生認知、評量)","數學素養、資訊融入數學教育","提出: 數學感教育理論、教學多元優選","網站:   數學教師知識庫(http://www.MTedu.uTaipei.edu.tw )"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/148/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '佘瑞琳', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立臺灣大學碩士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/133/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '林佳範', 
                        staffTitle: ' 國立臺灣大學化學系講師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","化學教育","化學實驗教學與評量","化學實驗多媒體教學"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/196/cover____.jpg",
                            type: '美感人才',
                            
                        title: '林國瑞', 
                        staffTitle: ' 國立臺灣師範大學公民教育與活動領導學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","英國亞伯丁大學法律學博士",] }
                    },{
                        src:"https://www.inarts.edu.tw/uploads/member/avatar/211/cover____1.png",
                        type: '美感人才',
                        
                        title: '林演慶', 
                        staffTitle: ' 臺北市立大學體育學系教授兼系主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","學生權利、教育法、人權教育、法治教育、哈伯瑪斯",] }
                    },{
                        src:"https://www.inarts.edu.tw/uploads/member/avatar/127/cover____2.jpg",
                        type: '美感人才',
                        title: '林玫君', 
                        staffTitle: ' 亞東技術學院工商業設計系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國北科羅拉大學運動教育博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/134/cover_______.jpg",
                            type: '美感人才',
                            
                        title: '林聖欽', 
                        staffTitle: ' 國立臺南大學戲劇創作與應用學系教授兼任藝術學院院長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","運動教育、體育行政、運動管理"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/144/cover_______.jpg",
                            type: '美感人才',
                            
                        title: '林逢祺 ', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","教育哲學、教育美學",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/136/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '林震煌 ', 
                        staffTitle: ' 國立臺灣師範大學教育學系教授兼系主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","日本九州大學應用化學系博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/198/cover____.jpg",
                            type: '美感人才',
                            
                        title: '林靜兒', 
                        staffTitle: ' 國立臺灣師範大學化學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","氣體感測技術、電噴灑質譜技術、表面增強拉曼光譜技術、LabVIEW程式在儀器分析化學上的應用、光譜、質譜、層析分離、儀器設計",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/123/cover____.jpg",
                            type: '美感人才',
                            
                        title: '忻愛莉', 
                        staffTitle: ' 國立臺中教育大學體育學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立臺灣師範大學體育學系教育學博士","國立臺灣師範大學體育學系教育學碩士","中國文化大學理學院體育學系國術組理學士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/143/cover_______.jpg",
                            type: '美感人才',
                            
                        title: '胡益進', 
                        staffTitle: ' 國立高雄師範大學英語學系教授兼系主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","身體活動心理學、動作行為學、動作控制、動作發展、動作學習、老化與身體活動"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/164/cover____.JPG",
                            type: '美感人才',
                            
                        title: '洪瓊君', 
                        staffTitle: ' 國立臺灣師範大學 健康促進與衛生教育學系教授兼系主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","清華大學語言學博士 Ph.D. in Linguistics, National Tsing Hua University",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/175/cover____2.jpg",
                            type: '美感人才',
                            
                        title: '姚村雄', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立雲林科技大學設計學博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/42/cover____.jpg",
                            type: '美感人才',
                            
                        title: '馬行誼', 
                        staffTitle: ' 國立高雄師範大學視覺設計系教授兼藝術學院院長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","設計理論、設計文化、設計史、包裝設計",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/187/cover____.jpg",
                            type: '美感人才',
                            
                        title: '徐榮崇', 
                        staffTitle: ' 國立臺中教育大學語文教育學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立中正大學中國文學研究所文學博士","國立臺中師範學院國民教育研究所碩士","國立臺中師範學院語文教育學系學士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/188/cover____.jpg",
                            type: '美感人才',
                            
                        title: '許民陽', 
                        staffTitle: ' 臺北市立大學歷史與地理學系(地理組)教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","中國思想史,國語文教材教法"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/52/cover____.JPG",
                            type: '美感人才',
                            
                        title: '許淑娟', 
                        staffTitle: '臺北市立大學地球環境暨生物資源學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","中國文化大學地理研究所博士","台灣師範大學地理研究所碩士","台北市立師範學院社會科教育學系學士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/43/cover____.jpg",
                            type: '美感人才',
                            
                        title: '許秀霞', 
                        staffTitle: ' 國立高雄師範大學地理學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","海外華人研究、國際遷移、澳洲研究、加拿大研究、社會影響評估、環境社會學、戶外教學、環境步道規劃"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/162/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '張弘旻', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","美國北伊利諾大學藝術教育博士(Ph.D. in Art Education)","美國密蘇里大學教育碩士 (Master of Arts)",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/137/cover______.jpg",
                            type: '美感人才',
                            
                        title: '張文華', 
                        staffTitle: ' 國立臺北教育大學藝術與造形設計學系兼任暨玄奘大學藝術與創意設計學系專任助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","藝術教育"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/22/cover____.jpg",
                            type: '美感人才',
                            
                        title: '張曉華', 
                        staffTitle: ' 國立臺灣師範大學 科學教育研究所教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國愛荷華大學科學教育研究所博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/146/cover______.jpg",
                            type: '美感人才',
                            
                        title: '張永達', 
                        staffTitle: ' 國立臺灣藝術大學戲劇學系教授(退休)',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","中學科學師資培育、科學課程、專業成長、生物教育",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/210/cover____2.png",
                            type: '美感人才',
                            
                        title: '張淑芳', 
                        staffTitle: ' 國立臺灣師範大學生命科學系副教授兼科教中心企劃組組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","紐約大學SEHNAP學院戲劇教育學碩士","國防外語學校軍官英文召訓班畢業","政戰學校影劇系學士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/142/cover____3.png",
                            type: '美感人才',
                            
                        title: '張玉山', 
                        staffTitle: ' 國立臺中教育大學教育學系副教授（退休）',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","戲劇原理、西洋戲劇與劇場史等；兒童劇場、創作性戲劇、戲劇治療、藝術與人文教材教法九年一貫表演藝術",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/192/cover____.png",
                            type: '美感人才',
                            
                        title: '張秀潔', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ['暨臺北市立大學師資培育及職涯發展中心兼任教授'] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/166/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '張連強', 
                        staffTitle: '  臺北市內湖區麗山國民小學校長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","臺北市立大學視覺藝術研究所碩士","臺北市國民教育輔導團卓越藝術計畫總召","臺北市士林區溪山國小校長","臺北市國民教育輔導團生活課程副團長","藝術與人文領域團員",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/129/cover_______.jpg",
                            type: '美感人才',
                            
                        title: '陳仁富', 
                        staffTitle: ' 國立臺灣藝術大學戲劇學系助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","藝術教育、教育實習、課程設計與發展"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/141/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '陳俊文', 
                        staffTitle: ' 國立屏東大學幼兒教育學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立中央大學中文系戲曲組博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/197/cover____.jpg",
                            type: '美感人才',
                            
                        title: '陳信亨', 
                        staffTitle: ' 國立臺北藝術大學藝術與人文教育研究所助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","表演、戲劇教育、創作性戲劇、中國戲曲、導演、即興表演"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/26/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '陳晞如', 
                        staffTitle: ' 國立臺中教育大學體育學系助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國賓州州立大學 課程與教學（幼教組）博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/203/cover____.jpg",
                            type: '美感人才',
                            
                        title: '陳曉嫻', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國奧勒岡大學音樂教育哲學博士","教育部國家教育研究院藝術與人文教科書審查委員","教育部藝術與人文學習領域輔導群委員","國立臺北教育大學、臺北市立教育大學音樂學系（碩士班）兼任教授",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/167/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '陳淳迪', 
                        staffTitle: ' 國立臺中教育大學通識教育中心教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","音樂資優教育、歌唱與樂器的學習順序與成效、幼兒音樂教育、教學法在國小藝術與人文的應用"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/168/cover_cover______1_.jpg",
                            type: '美感人才',
                            
                        title: '陳美然', 
                        staffTitle: ' 國立臺北教育大學藝術與造型設計學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","Ph.D. in Visual &amp; Information, Coventry University ",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/205/cover___1.jpg",
                            type: '美感人才',
                            
                        title: '陳芳', 
                        staffTitle: ' 臺北市立大學音樂學系講師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","消費性設計，使用性分析、數位與協同設計，設計溝通、數位學習，設計教學",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/32/cover____.jpg",
                            type: '美感人才',
                            
                        title: '陳藝苑', 
                        staffTitle: ' 國立臺灣師範大學國文學系暨研究所專任教授暨表演藝術研究所兼任教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","私立中國文化大學音樂碩士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/201/cover____.jpg",
                            type: '美感人才',
                            
                        title: '陳錦忠', 
                        staffTitle: ' 國立屏東大學音樂學系專任教授(退休)',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","藝術與人文教學研究、音樂教育、音樂欣賞教學、鍵盤樂"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/180/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '郭美女', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","義大利國立米蘭音樂學院聲樂演唱文憑",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/190/cover____1.png",
                            type: '美感人才',
                            
                        title: '連經憶', 
                        staffTitle: ' 國立臺東大學音樂系教授兼系主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","聲樂主、副修；兒童音樂劇；合唱藝術與人文領域；原住民音樂",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/126/cover_______.png",
                            type: '美感人才',
                            
                        title: '黃瑞菘', 
                        staffTitle: ' 國立嘉義大學應用化學系暨研究所助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國密西西比大學化學系博士","台北榮民總醫院醫研部研究助理","台灣神隆股份有限公司","嘉義大學應用化學系專案助理教授",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/48/cover____.jpg",
                            type: '美感人才',
                            
                        title: '黃福坤', 
                        staffTitle: ' 國立臺南大學動畫媒體設計研究所副教授兼動畫所所長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","分析化學"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/207/cover____1.JPG",
                            type: '美感人才',
                            
                        title: '黃雅文', 
                        staffTitle: ' 國立臺灣師範大學物理學系教授(退休)',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","雲林科技大學設計學博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/54/cover____.jpg",
                            type: '美感人才',
                            
                        title: '黃雯娟', 
                        staffTitle: ' 亞洲大學健康產業管理學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","動畫設計、空間設計、互動媒體、場景設計",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/200/cover____1.png",
                            type: '美感人才',
                            
                        title: '彭立勛', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","澳洲南昆士蘭大學(Univ. of Southern Queensland) 視覺藝術研究所博士","巴黎第八大學 (Univ. Paris VIII) 造形藝術研究所碩士 ","國立巴黎瑟基藝術學院造形表現研究所碩士(DNSEP, ENSA Paris-Cergy) ","國立巴黎高等工藝學院(ENSAAMA)彩繪玻璃修復暨創作證書 ","巴黎第八大學 (Univ. Paris VIII)造形藝術系學士","國立台灣藝術專科學校美術科西畫組畢業",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/58/cover_173024141.jpg",
                            type: '美感人才',
                            
                        title: '彭翠萍', 
                        staffTitle: ' 國立雲林科技大學創意生活設計系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","視覺文化、流行設計、設計史、後殖民理論、彩繪玻璃"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/53/cover____.png",
                            type: '美感人才',
                            
                        title: '楊護源', 
                        staffTitle: ' 國立東華大學音樂學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","美國音樂學院藝術博士","國立臺灣師範大學音樂研究所碩士(指揮組)",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/163/cover____.jpg",
                            type: '美感人才',
                            
                        title: '楊麗中', 
                        staffTitle: ' 	國立高雄師範大學臺灣歷史文化及語言研究所副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","鋼琴、合唱指揮、兒童樂隊、管絃樂指揮",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/51/cover____.jpg",
                            type: '美感人才',
                            
                        title: '廖秋娥', 
                        staffTitle: ' 臺北市立大學英語教學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立中正大學歷史學博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/140/cover____2.jpg",
                            type: '美感人才',
                            
                        title: '蔡居澤', 
                        staffTitle: ' 國立臺東大學文化資源與休閒產業學系副教授(退休)',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","臺灣歷史研究、區域研究、史料研究"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/181/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '蔡美玲', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立中正大學成人及繼續教育學系碩士 ","98-100學年度嘉義縣立阿里山國民中小學校長","101-103學年度嘉義縣立六嘉國民中學校長","99-101年度嘉義縣原住民族部落大學副校長兼執行長","87-97學年度嘉義縣國民教育輔導團 國中組 自然領域(理化科)輔導員","98-103學年度嘉義縣國民教育輔導團 國中組 藝術與人文領域副召集人"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/13/cover____.jpg",
                            type: '美感人才',
                            
                        title: '蔡芷芬', 
                        staffTitle: ' 嘉義縣立六嘉國民中學校長(退休)',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","美國紐約普拉特藝術學院藝術創作碩士及藝術史碩士","國立臺北藝術大學藝術創作學士"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/135/cover____.jpg",
                            type: '美感人才',
                            
                        title: '劉仲倫 	', 
                        staffTitle: ' 國立臺灣師範大學美術學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","台灣劇場史、文化研究、環境美學",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/170/cover_cover______3_.jpg",
                            type: '美感人才',
                            
                        title: '劉淑英', 
                        staffTitle: ' 靜宜大學台文學系助理教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","英國Roehampton大學舞蹈教育學哲學博士","美國UCLA編舞藝術碩士","國立藝術學院舞蹈系(第一屆)藝術學士","雲門舞集舞者與編舞者","國立台北藝術大學舞蹈系兼任副教授",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/37/cover____.jpg",
                            type: '美感人才',
                            
                        title: '劉豐榮', 
                        staffTitle: ' 國立清華大學幼兒教育學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","創造性舞蹈教學、兒童律動教學、幼兒劇編導、舞蹈創作、表演藝術教材教法、舞蹈課程研究、舞蹈教育理論專題、跨領域藝術課程"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/169/cover_cover______2_.jpg",
                            type: '美感人才',
                            
                        title: '潘宇文', 
                        staffTitle: ' 國立嘉義大學視覺藝術系暨研究所教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立台灣師範大學美術系學士","國立台灣師範大學美術系碩士","美國伊利諾大學藝術教育博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/177/cover_cover________2_.jpg",
                            type: '美感人才',
                            
                        title: '鄭方靖', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國加州奧克蘭市（Oakland）Holy Names College音樂研究所，Kodaly音樂教學法研究組，主修樂器：鋼琴 副修：管風琴、聲樂","國立台南大學藝術學院音樂系教授（現任） ","台灣柯大宜音樂教育學會第一任理事長","美國Stanford大學及Hartford大學訪問學者","國科會乙等獎助 (民國83、84、86、87、88 )","教育部96獎勵師資培育典範實施計劃論文發表『智能式及本土化之「音樂基礎訓練」教學』獲獎（2007）",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/183/cover____1.png",
                            type: '美感人才',
                            
                        title: '鄭玉卿', 
                        staffTitle: ' 國立台南大學藝術學院音樂系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","音樂教學法之理論與實務、音樂基礎訓練、台灣音樂與教育運用、鋼琴教學法、音樂教育哲學與心理學",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/173/cover_cover________1_.jpg",
                            type: '美感人才',
                            
                        title: '蕭寶玲', 
                        staffTitle: ' 臺北市立大學教育學系教授兼教務長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立臺灣師範大學教育研究所博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/194/cover____.jpg",
                            type: '美感人才',
                            
                        title: '賴阿福', 
                        staffTitle: ' 國立臺中教育大學美術學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","教育史、教育理論基礎、教育社會學、課程與教學、師資培育"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/209/cover_____1.JPG",
                            type: '美感人才',
                            
                        title: '錢富美', 
                        staffTitle: ' 臺北市立大學資訊科學系副教授兼系主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","美國德州理工大學藝術教育博士 ",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/45/cover____.jpg",
                            type: '美感人才',
                            
                        title: '謝佳叡', 
                        staffTitle: ' 國立臺中教育大學區域與社會發展學系講師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學術專長》"," 插畫、電腦繪圖、平面設計、藝術課程設計 《研究領域》 兒童繪本創作、通識藝術教育、跨領域藝術教育",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/208/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '謝如山', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","伊利諾大學香檳分校課程與教學系數學教育組哲學博士","伊利諾大學香檳分校教育心理學系教育統計與測驗組博士候選人","伊利諾大學香檳分校教育心理學系教育統計與測驗組教育碩士","國立台北教育大學初等教育學系教育行政組教育學士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/31/cover____.jpg",
                            type: '美感人才',
                            
                        title: '謝苑玫', 
                        staffTitle: ' 國立臺灣藝術大學師資培育中心教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》 ","課程發展與設計、普通數學、數學科教材教法、教學理論、行動研究專題",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/88/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '戴君安', 
                        staffTitle: ' 國立臺南大學音樂學系教授(退休)',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立臺灣師範大學音樂研究所碩士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/50/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '魏秀珍', 
                        staffTitle: ' 台南應用科技大學教授兼系主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","音樂教育研究方法、音樂教育心理學、音樂教育測驗、音樂教學評量、鍵盤樂器團體教學、合奏教學、音樂教學媒體、資訊融入音樂教學、音樂教學策略"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/193/cover____.jpg",
                            type: '美感人才',
                            
                        title: '魏麗敏', 
                        staffTitle: ' 國立臺灣師範大學人類發展與家庭學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","英國瑟瑞大學舞蹈研究博士 Surrey University (U.K.)","《研究專長》","西洋舞蹈史、兒童舞蹈教育、舞蹈教學、跨文化舞蹈研究、現代舞蹈教材教法、現代舞蹈教學實習、兒童身心發展、兒童遊戲與舞蹈",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/156/cover____2.jpg",
                            type: '美感人才',
                            
                        title: '顏若映', 
                        staffTitle: ' 國立臺中教育大學諮商與應用心理學系教授兼師培處處長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立臺灣師範大學人類發展與家庭學系博士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/57/cover_7-1.jpg",
                            type: '美感人才',
                            
                        title: '羅中峰', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","中國美術學院美術學科 博士","國立臺灣大學社會學研究所博士","國立臺灣大學社會學研究所碩士","國立成功大學電機工程系學士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/179/cover____2.jpg",
                            type: '美感人才',
                            
                        title: '羅美蘭', 
                        staffTitle: ' 佛光大學文化資產與創意學系副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["佛光大學教務處	副教務長","佛光大學教學卓越計畫辦公室  組長","佛光大學文化資產與創意學系  副教授",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/178/cover_cover______7_.jpg",
                            type: '美感人才',
                            
                        title: '羅雅柔', 
                        staffTitle: ' 國立東華大學藝術創意產業學系教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《研究專長》","藝術研究"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/171/cover____.JPG",
                            type: '美感人才',
                            
                        title: '蘇郁惠', 
                        staffTitle: ' 國立臺灣體育運動大學副教授',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》 ","國立東華大學藝術創意產業學系教授","Professor, Department of Art &amp; Creative Industry, National Dong Hwa University, Taiwan, ROC.","英國倫敦羅漢普頓大學藝術與設計教育博士","Ph.D, Art &amp; Design Education, Roehampton University London, England","曾任國立東華大學和花蓮教育大學視覺藝術教育研究所所長","Director, Institute of Visual Art Education, National Hualien Education University","Director, Institute of Visual Art Education, National Dong Hwa University",] }
                    },]
                },
                {
                    bookMarkTitle: '種子學校教師',
                    link: '/staffPage/mark4',
                    articleList: [{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/20/cover____.jpg",
                            type: '美感人才',
                            
                        title: '王姿翔', 
                        staffTitle: ' 國立屏東高級中學美術科專任教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立臺北教育大學  教育經營與管理研究所","國立臺南大學  美術學系","95-98學年度澎湖縣國民教育輔導團 國中組 藝術與人文領域輔導員","98-104學年度澎湖縣國民教育輔導團 國中組 藝術與人文領域  主任輔導員","《教學專長》","版畫.多媒材"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/18/cover____.jpg",
                            type: '美感人才',
                            
                        title: '王怡樺', 
                        staffTitle: ' 澎湖縣立澎南國民中學視覺藝術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","MA, Applied Linguistics &amp; English Language Teaching, King’s College London","國立高雄師範大學英語學系","《教學專長》","英語文指導"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/14/cover____.jpg",
                            type: '美感人才',
                            
                        title: '方美琪', 
                        staffTitle: ' 國立屏東高級中學英文科專任教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立師範大學音樂研究所碩士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/73/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '巫培爾', 
                        staffTitle: ' 臺北市立永春高中音樂/藝術生活專任教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立彰化師範大學美術學系","《教學專長》","美術教學"] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/19/cover____.jpg",
                            type: '美感人才',
                            
                        title: '許育菁', 
                        staffTitle: ' 國立臺東高級中學教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立臺灣師範大學美術系研究所碩士","《研究專長》","美術教學研究",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/68/cover____1.jpg",
                            type: '美感人才',
                            
                        title: '張力中', 
                        staffTitle: ' 國立屏東高級中學美術科專任教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/69/cover____.PNG",
                            type: '美感人才',
                            
                        title: '張文琪', 
                        staffTitle: ' 花蓮縣立國風國民中學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《學、經歷》","國立高雄師範大學教育學系研究所碩士","《學、經歷》","國立臺灣師範大學美術學系",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/12/cover____4.jpg",
                            type: '美感人才',
                            
                        title: '張綺真', 
                        staffTitle: ' 高雄市立文府國民中學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《教學專長》","學習共同體與眾理解的課程設計、藝文社群經營、藝文跨域整合","《學、經歷》","國立彰化師範大學國文教學碩士","國立台灣師範大學國文系",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/16/cover________.jpg",
                            type: '美感人才',
                            
                        title: '陳玉燕', 
                        staffTitle: ' 新北市立竹圍高中視覺藝術科教師兼任新北市國中藝文輔導小組專任輔導員',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《教學專長》","國中國文","《學、經歷》","國立彰化師範大學地理教學碩士","國立高雄師範大學地理系","國立台灣藝術大學表演藝術第二專長",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/15/cover________.JPG",
                            type: '美感人才',
                            
                        title: '陳育暄', 
                        staffTitle: ' 彰化縣和群國中國文教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《教學專長》","國中地理與表演藝術","《學、經歷》","國立臺灣師範大學美術學系、美術研究所碩士",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/21/cover____.JPG",
                            type: '美感人才',
                            
                        title: '湯香櫻', 
                        staffTitle: ' 彰化縣和群國中地理與表藝教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《教學專長》","視覺藝術、美術資優教育","《學、經歷》","國立台灣師大音樂系學士及指揮組碩士","屏中海洋男聲合唱團指揮","The Pure純粹人聲樂團總監","高雄市青少年交響樂團指揮",] }
                    },{
                            src:"https://www.inarts.edu.tw/uploads/member/avatar/17/cover____.jpg",
                            type: '美感人才',
                            
                        title: '黃錦蘭', 
                        staffTitle: ' 花蓮縣立國風國民中學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: ["《教學專長》","音樂教育、低音提琴演奏、管弦樂團與合唱指揮"] }
                    },]
                },
                {
                    bookMarkTitle: '中等學校實驗教師',
                    link: '/staffPage/mark5',
                    articleList: [{
                            type: '美感人才',
                        title: '王佑甄', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            type: '美感人才',
                            
                        title: '王博彥', 
                        staffTitle: ' 國立玉井高級工商職業學校國文教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '王姿翔', 
                        staffTitle: ' 高雄市私立高苑工商職業學校教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '王榮俊', 
                        staffTitle: ' 澎湖縣澎南國中藝文教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '方姿文', 
                        staffTitle: ' 臺南市立沙崙國民中學教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '朱庭君', 
                        staffTitle: ' 高雄市立小港高級中學美術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '朱恆賦', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '朱玉芳', 
                        staffTitle: ' 臺中市立潭子國民中學教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '李婉琪', 
                        staffTitle: ' 國立羅東高級中學國文教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '李宜蓁', 
                        staffTitle: ' 金門縣立金沙國中視覺藝術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '李牧倚', 
                        staffTitle: ' 國立臺中文華高級中學教學組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '李玉桂', 
                        staffTitle: ' 基隆市立成功國民中學美術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '何翊嘉', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '阮士恩', 
                        staffTitle: ' 新北市竹圍高中(含國中部)實研組組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '周幸蓉', 
                        staffTitle: ' 臺東縣立新生國中教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '邱子翎 ', 
                        staffTitle: ' 嘉義市私立宏仁女子高級中學美術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '林佳玫', 
                        staffTitle: ' 臺南市私立育德工業家事職業學校教學組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '林怡君', 
                        staffTitle: ' 宜蘭縣立復興國中美術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '林波斯', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '侯威家', 
                        staffTitle: ' 國立羅東高級中學教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '洪慧霖', 
                        staffTitle: ' 雲林縣立斗南高級中學教學組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '姜昌明', 
                        staffTitle: ' 高雄市立小港高級中學歷史教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '高嘉宏', 
                        staffTitle: ' 國立武陵高中美術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '徐韻琴', 
                        staffTitle: ' 國立臺中文華高級中學讀者服務組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '徐順乾', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '徐鳳翎', 
                        staffTitle: ' 國立玉井高級工商職業學校教學組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '涂裕佳', 
                        staffTitle: ' 臺中市私立大明高級中學教學組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '唐廷俊', 
                        staffTitle: ' 國立中央大學附屬中壢高中美術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '翁雅慧', 
                        staffTitle: '  臺北市立東湖國民中學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '張世宗', 
                        staffTitle: ' 花蓮縣國風國中行政組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '張以佳', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '張興蘭', 
                        staffTitle: ' 高雄市私立高苑工商職業學校美工科主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '張金漢', 
                        staffTitle: ' 高雄市立文府國民中學教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '張銘修', 
                        staffTitle: ' 新北市立二重國民中學教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '張靜嫻', 
                        staffTitle: ' 嘉義市立玉山國中藝文教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '陳婉嫈', 
                        staffTitle: ' 國立彰化高級中學美術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '陳懿如', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '陳曉螢', 
                        staffTitle: ' 高雄市立一甲國民中學輔導組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '陳榮泰', 
                        staffTitle: ' 臺中市立臺中第一高級中學特教組專案助理',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '陳永男', 
                        staffTitle: ' 臺南市私立長榮女子高級中學學務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '陳錦慧', 
                        staffTitle: ' 新北市立石碇高中教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '郭家綸', 
                        staffTitle: ' 私立曙光女子高中美術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '郭玨絹', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '郭育君', 
                        staffTitle: ' 國立屏東女子高級中學美術教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '郭靜宜', 
                        staffTitle: ' 臺南市立崇明國民中學輔導組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '莊瑋婷 ', 
                        staffTitle: ' 高雄市立小港高級中學藝術生活教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '梁蓓禎', 
                        staffTitle: ' 臺北市立五常國民中學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '黃兆伸', 
                        staffTitle: ' 高雄市立龍華國民中學音樂教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '黃昭純', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '黃智聆', 
                        staffTitle: ' 新北市立二重國民中學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '黃珮玲', 
                        staffTitle: ' 臺南市立後港國民中學教導主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '黃珮綺', 
                        staffTitle: ' 雲林縣立斗南高級中學國文教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '黃璃華 ', 
                        staffTitle: ' 嘉義市立南興國中教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '曾惠君', 
                        staffTitle: ' 臺南市私立育德工業家事職業學校教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '曾慶良', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '彭義婷', 
                        staffTitle: ' 臺北市永春高中實研組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '楊仲勛', 
                        staffTitle: ' 國立苗栗高中特教組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '楊庭青', 
                        staffTitle: ' 臺中市立豐東國民中學生活教育副組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '楊曉娥', 
                        staffTitle: ' 國立玉井高級工商職業學校國文教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '楊梅秀', 
                        staffTitle: ' 彰化縣立和群國民中學教務處幹事',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '楊欣慈', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '楊秋芳', 
                        staffTitle: ' 高雄市立小港高級中學教學組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '葉佳慈', 
                        staffTitle: ' 國立東石高級中學數學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '廖偲淨', 
                        staffTitle: ' 國立屏東高中實研組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '廖定詳', 
                        staffTitle: ' 臺中市私立大明高級中學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '熊世明', 
                        staffTitle: ' 雲林縣私立正心中學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '劉斐綾', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '鄭倖宜', 
                        staffTitle: ' 雲林縣立斗南高級中學音樂教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '鄭皓文', 
                        staffTitle: ' 國立玉井高級工商職業學校國文教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '蔡佩玲', 
                        staffTitle: ' 嘉義市私立宏仁女子高級中學教學組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '蕭美蓉', 
                        staffTitle: ' 嘉義縣立鹿草國中設備組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '蕭雯', 
                        staffTitle: ' 桃園市私立漢英高中註冊組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '賴俊滄', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '謝明哲', 
                        staffTitle: ' 嘉義市私立宏仁女子高級中學教學組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '謝翠玲', 
                        staffTitle: ' 臺南市立佳里國民中學教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '顏嘉禾', 
                        staffTitle: ' 國立臺東高中國文教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },]
                },
                {
                    bookMarkTitle: '國小階段實驗教師',
                    link: '/staffPage/mark6',
                    articleList: [{
                            src:"",
                            type: '美感人才',
                            
                        title: '丘雪琪', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '任培榕', 
                        staffTitle: ' 國立屏東大學附設實驗國民小學研究處主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '任秀玲', 
                        staffTitle: ' 桃園市平鎮區北勢國民小學文書組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '何雪芳', 
                        staffTitle: ' 屏東縣潮州鎮光春國民小學教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '余旻諺', 
                        staffTitle: ' 雲林縣元長鄉元長國民小學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '侯昭妃', 
                        staffTitle: ' 花蓮縣花蓮市忠孝國民小學學務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '傅思瑋', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '傅慧雯', 
                        staffTitle: ' 金門縣烈嶼鄉上岐國民小學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '兵春滿', 
                        staffTitle: ' 彰化縣田尾鄉田尾國民小學註冊組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '劉俊宏', 
                        staffTitle: ' 新北市八里區米倉國民小學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '劉元弼', 
                        staffTitle: ' 桃園市新屋區啟文國民小學校長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '劉向欣', 
                        staffTitle: ' 苗栗縣泰安鄉象鼻國民小學教導主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '劉宜政', 
                        staffTitle: '',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '劉宜芳', 
                        staffTitle: ' 屏東縣東港鎮東興國民小學教務主任',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '劉欣琪', 
                        staffTitle: ' 新北市樹林區育林國民小學課研註冊組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '劉燕妮', 
                        staffTitle: ' 國立臺南大學附設實驗國民小學教師',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '劉秀真', 
                        staffTitle: ' 南投縣中寮鄉永康國民小學教學組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },{
                            src:"",
                            type: '美感人才',
                            
                        title: '劉芳婷', 
                        staffTitle: ' 臺北市內湖區碧湖國民小學教學組長',
                        content: {
                            video:[""],
                            link:[''],
                            src:[''],
                        text: [] }
                    },]
                }
            ]
        }
    },
    mounted:function(){
        var path = this.$route.params.categoryid;
        var pathIdx = this.bookmarkList.findIndex(function(item){
            return item.link.includes(path);         
            });
        this.articleListIdx =pathIdx;
    }
}
</script>

<style lang="sass">
</style>

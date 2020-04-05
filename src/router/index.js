import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/views/mainPage/mainPage.vue'
import newsPage from '@/views/newsPage'
import article from '@/components/article'
import postArticle from '@/components/postArticle.vue'
import tabs from '@/components/tabs_head.vue'
import otherWeb from '@/views/otherWebPage'
import QA from '@/views/footer/QAPage'
import activityPage from '@/views/activityPage.vue'
import staffPage from '@/views/staffPage.vue'
import tutorialPage from '@/views/tutorialPage.vue'
import contectPage from '@/views/footer/contectPage.vue'
import webTreePage from '@/views/footer/webTreePage.vue'
import cardView from '@/components/cardView.vue'
import lessonArticle from '@/components/lessonArticle.vue'

Vue.use(Router)
export default new Router({
    routes:[
          {
            path: '/',
            component: mainPage,
            
          },
          {
            path: '/section/:pageid/category/:categoryid',
            component: newsPage
          },
          {
            path: '/category/:pageid',
            component: tabs
          },
          {
            path: '/post/:postid',
            component: postArticle
          },
          {
            path: '/page/:pageid',
            component: article,
          },
          {
            path: '/contact/:pageid',
            component: contectPage
          },
          {
            path: '/link/:pageid',
            component: otherWeb
          },
          {
            path: '/module/:pageid',
            component: tutorialPage,
            children: [
                {path: 'category/:categoryid',component: cardView},
                {path: 'post/:postid',component: lessonArticle}
            ]
          },
          {
            path: '/hr/:pageid',
            component: staffPage,
            children: [
                {path: 'category/:categoryid',component: cardView},
                {path: 'post/:postid',component: postArticle}
            ]
          },
          {
            path: '/map/:pageid',
            component: webTreePage
          },
          {
            path: '/collapse/:pageid',
            component: QA,
          },
          {
            path: '/activity/:pageid',
            component: activityPage
          },
          {
            path: '/search',
            component: article
          },
          {
            path: '/tag',
            component: tabs
          }
  ],
  mode: 'history'
})

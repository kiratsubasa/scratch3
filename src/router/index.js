import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/views/mainPage/mainPage.vue'
import newsPage from '@/views/newsPage'
import article from '@/components/article'
// import resultPage from '@/views/resultPage'
import lawPage from '@/views/lawPage'
// import ListTextonly from '@/components/ListTextonly'
// import planIntro from '@/views/planIntroPage'
// import articlewithbookmark from '@/components/articlewithbookmark'
import otherWeb from '@/views/otherWebPage'
import QA from '@/views/footer/QAPage'
import activityPage from '@/views/activityPage.vue'
import staffPage from '@/views/staffPage.vue'
import tutorialPage from '@/views/tutorialPage.vue'
import contectPage from '@/views/footer/contectPage.vue'
// import publishPage from '@/views/footer/publishPage.vue'
// import questionnairePage from '@/views/footer/questionnairePage.vue'
// import recordPage from '@/views/footer/recordPage.vue'
import webTreePage from '@/views/footer/webTreePage.vue'
import staffListView from '@/components/staffListView.vue'
import ListView from '@/components/ListView.vue'
import cardView from '@/components/cardView.vue'

Vue.use(Router)
export default new Router({
    routes:[
          {
            path: '/',
            component: mainPage,
          },
          {
            path: '/section/:sectionId',
            component: newsPage
          },
          {
            path: '/categories/:categoriesId',
            component: lawPage
          },
          {
            path: '/post/:postId',
            component: article
          },
          {
            path: '/page/:pageId',
            component: article,
          },
          {
            path: '/contact',
            component: contectPage
          },
          {
            path: '/link',
            component: otherWeb
          },
          {
            path: '/module/:moduleId',
            component: tutorialPage,
            children: [
                {path: 'tutorial:id',component: article},
                {path: ':id',component: ListView}
            ]
          },
          {
            path: '/hr',
            component: staffPage,
            children: [
                {path: ':hrId',component: staffListView}
            ]
          },
          {
            path: '/map',
            component: webTreePage
          },
          {
            path: '/collapse/:collapseId',
            component: QA,
          },
          {
            path: '/activity/:activityId',
            component: activityPage,
            children: [
                {path: 'activity:id',component: article},
                {path: ':id',component: cardView}
            ]
          },
          {
            path: '/search',
            component: article
          }        
  ],
  mode: 'history'
})

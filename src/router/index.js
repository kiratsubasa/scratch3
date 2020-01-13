import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/views/mainPage/mainPage.vue'
import newsPage from '@/views/newsPage'
import article from '@/components/article'
import resultPage from '@/views/resultPage'
import lawPage from '@/views/lawPage'
import ListTextonly from '@/components/ListTextonly'
import planIntro from '@/views/planIntroPage'
// import articlewithbookmark from '@/components/articlewithbookmark'
import otherWeb from '@/views/otherWebPage'
import QA from '@/views/footer/QAPage'
import activityPage from '@/views/activityPage.vue'
import staffPage from '@/views/staffPage.vue'
import tutorialPage from '@/views/tutorialPage.vue'
import contectPage from '@/views/footer/contectPage.vue'
import publishPage from '@/views/footer/publishPage.vue'
import questionnairePage from '@/views/footer/questionnairePage.vue'
import recordPage from '@/views/footer/recordPage.vue'
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
          path: '/newsPage',
          component: newsPage,
          children:[
            {
              path: 'news:id',component: article
            },
            {
              path: ':id',component: ListView
            }
          ]
          },
          {
            path: '/resultPage',
            component: resultPage,
            children: [
              {
                path: 'result:id',component: article
              },
              {
                path: ':id',component: ListView
              }
            ]
          },
          {
            path: '/lawPage',
            component: lawPage,
            children: [
                {path: 'mark:mark',component: ListTextonly}
            ]
          },
          {
            path: '/planIntro',
            component: planIntro,
          },
          {
            path: '/otherWeb/:id',
            component: otherWeb
          },
          {
            path: '/QA/:id',
            component: QA,
          },
          {
            path: '/activityPage',
            component: activityPage,
            children: [
                {path: 'activity:id',component: article},
                {path: ':id',component: cardView}
            ]
          },
          {
            path: '/staffPage',
            component: staffPage,
            children: [
                {path: 'mark:id',component: staffListView}
            ]
          },
          {
            path: '/tutorialPage',
            component: tutorialPage,
            children: [
                {path: 'tutorial:id',component: article},
                {path: ':id',component: ListView}
            ]
          },
          {
            path: '/contectPage',
            component: contectPage
          },
          {
            path: '/publishPage',
            component: publishPage,
            children: [
              {path: 'publish:id',component: article},
              {path: 'card',component: cardView}
          ]
          },
          {
            path: '/questionnairePage',
            component: questionnairePage,
            children: [
              {path: 'questionnaire:id',component: article},
              {path: 'card',component: cardView}
          ]
          },
          {
            path: '/recordPage',
            component: recordPage,
            children:[
              {
                path: 'record:id',component: article
              }
            ]
          },
          {
            path: '/webTreePage',
            component: webTreePage
          }
  ],
  mode: 'history'
})

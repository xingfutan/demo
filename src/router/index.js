import Vue from 'vue'
import Router from 'vue-router'
import KManagement from '@/components/KManagement'
import KCharm from '@/components/KCharm'
import KBadge from '@/components/KBadge'
import KCompetition from '@/components/KCompetition'
import KRankingList from '@/components/KRankingList'
import Nav from '@/components/Nav'
import Gift from '@/components/Gift'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/management',
      name: 'KManagement',
      component: KManagement
    },
    {
      path: '/charm',
      name: 'KCharm',
      component: KCharm
    },
    {
      path: '/badge',
      name: 'KBadge',
      component: KBadge
    },
    {
      path: '/competition',
      name: 'KCompetition',
      component: KCompetition
    },
    {
      path: '/ranking',
      name: 'KRankingList',
      component: KRankingList
    },
    {
      path: '/gift',
      name: 'Gift',
      component: Gift
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import KManagement from '@/components/KManagement'
import KCharm from '@/components/KCharm'
import KBadge from '@/components/KBadge'
import KCompetition from '@/components/KCompetition'
import KRankingList from '@/components/KRankingList'
import Nav from '@/components/Nav'


Vue.use(Router)

axios.defaults.baseURL = 'http://111.230.135.221:3000';
Vue.use(VueAxios, axios)
Vue.axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWJfdXVpZCI6ImUxNTUyZjUzMWI4ZTQ0MTU5NTRjZmU3NDAxY2ZhNzg4IiwibWJfb3Blbl9pZCI6Im9NZGR4dnpxcmpiTXBPVC13Qnd1R3FmX1lxemsiLCJtYl9zZXgiOjAsIm1iX25pY2tuYW1lIjoia2luZ3NvbiIsIm1iX2F2YXRhcl91cmwiOiJodHRwczovL3d4LnFsb2dvLmNuL21taGVhZC9QaWFqeFNxQlJhRUppYWFWbmhBQ05UZHRWZ1h2RWlhYmhlUm1nYThOb0NpY2Nac2FCcjQ2dGN6bEhnLzAiLCJtYl91bmlvbmlkIjoib1Z0emh3LVNWMEMzYmpCTnlhMmdGN18ydWZEYyIsIm1iX3Bob25lIjpudWxsLCJtYl9pZF9jYXJkIjpudWxsLCJtYl9yZWFsX25hbWUiOiIiLCJtYl9sdiI6MCwibWJfb3Blbl9pZF94Y3giOm51bGwsIm1iX2dvbGQiOjAsIm1iX3Bvd2VyIjoiMCIsIm1iX2NoYXJtIjoiMCIsIm1iX2xlYXZlX3RpbWUiOiIwIiwibWJfZW50ZXJfdGltZSI6IjAiLCJtYl9jcmVhdGVfYXQiOiIxNTA5ODAwMjgzNzAwIiwibWJfdXBkYXRlX2F0IjoiMCIsIm1iX2RlbGV0ZV9hdCI6IjAiLCJleHBpcmVzSW5NaW51dGVzIjo0MzIwMCwiaWF0IjoxNTA5ODgyNDQzfQ.7Mxrk0VH4RwDWgbcKWNkWfcpPDitzBnaS338H8bhFA4';



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
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import KManagement from '@/components/KManagement'
import KCharm from '@/components/KCharm'
import KBadge from '@/components/KBadge'
import KCompetition from '@/components/KCompetition'
import KRankingList from '@/components/KRankingList'

Vue.use(Router)

Vue.use(VueAxios, axios)
Vue.axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWJfdXVpZCI6IjExMTExMTExIiwibWJfb3Blbl9pZCI6Im9xTWFId1Vjck5yTWZzb1M2NFVNUzdjSzh6ZUUiLCJtYl9zZXgiOjAsIm1iX25pY2tuYW1lIjoia2luZ3NvbiIsIm1iX2F2YXRhcl91cmwiOiJodHRwczovL3d4LnFsb2dvLmNuL21taGVhZC9QaWFqeFNxQlJhRUppYWFWbmhBQ05UZHRWZ1h2RWlhYmhlUm1nYThOb0NpY2Nac2FCcjQ2dGN6bEhnLzAiLCJtYl91bmlvbmlkIjoib1Z0emh3LVNWMEMzYmpCTnlhMmdGN18ydWZEYyIsIm1iX3Bob25lIjpudWxsLCJtYl9pZF9jYXJkIjpudWxsLCJtYl9yZWFsX25hbWUiOiIiLCJtYl9sdiI6MCwibWJfb3Blbl9pZF94Y3giOm51bGwsIm1iX2dvbGQiOjk5OTkwMCwibWJfcG93ZXIiOjEwLCJtYl9zdGFyZHVzdCI6MTMxNCwibWJfY2hhcm0iOjQzMTMwLCJtYl9oaWdoZXN0X2dhbWVfbHYiOjEsIm1iX3ZpcDFfaW52YWxpZF9hdCI6IjE1MTU2MDQ0OTM1NTEiLCJtYl92aXAyX2ludmFsaWRfYXQiOiIwIiwibWJfdmlwM19pbnZhbGlkX2F0IjoiMTUyNTk3MjQ5MzU1MSIsIm1iX2xlYXZlX3RpbWUiOiIwIiwibWJfZW50ZXJfdGltZSI6IjAiLCJtYl9jcmVhdGVfYXQiOiIxNTA5ODAwMjgzNzAwIiwibWJfdXBkYXRlX2F0IjoiMCIsIm1iX2RlbGV0ZV9hdCI6IjAiLCJleHBpcmVzSW5NaW51dGVzIjo0MzIwMCwiaWF0IjoxNTExMDc5MTg1fQ.3qYu-5cUzIKhTpu2rxDmyXkuawQ-aM3P4FAhCPk9vrw'
export default new Router({
  routes: [
    {
      path: '/',
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

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
import socketIo from 'socket.io-client'
import VueSocketio from 'vue-socket.io'

import VueScroller from 'vue-scroller'
import moment from "moment";
import VueMomentJS from "vue-momentjs";

Vue.use(VueMomentJS, moment);

Vue.use(VueScroller)

let options = {
  query: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWJfdXVpZCI6IjExMTExMTExIiwibWJfb3Blbl9pZCI6Im9xTWFId1Vjck5yTWZzb1M2NFVNUzdjSzh6ZUUiLCJtYl9zZXgiOjAsIm1iX25pY2tuYW1lIjoia2luZ3NvbiIsIm1iX2F2YXRhcl91cmwiOiJodHRwczovL3d4LnFsb2dvLmNuL21taGVhZC9QaWFqeFNxQlJhRUppYWFWbmhBQ05UZHRWZ1h2RWlhYmhlUm1nYThOb0NpY2Nac2FCcjQ2dGN6bEhnLzAiLCJtYl91bmlvbmlkIjoib1Z0emh3LVNWMEMzYmpCTnlhMmdGN18ydWZEYyIsIm1iX3Bob25lIjpudWxsLCJtYl9pZF9jYXJkIjpudWxsLCJtYl9yZWFsX25hbWUiOiIiLCJtYl9sdiI6MCwibWJfb3Blbl9pZF94Y3giOm51bGwsIm1iX2dvbGQiOjEwMDAwNDIsIm1iX3Bvd2VyIjoxMCwibWJfc3RhcmR1c3QiOjEwMDAwOTk5LCJtYl9jaGFybSI6NDMxMzAsIm1iX2hpZ2hlc3RfZ2FtZV9sdiI6MTYsIm1iX3ZpcDFfaW52YWxpZF9hdCI6IjE1MTU2MDQ0OTM1NTEiLCJtYl92aXAyX2ludmFsaWRfYXQiOiIwIiwibWJfdmlwM19pbnZhbGlkX2F0IjoiMTUyNTk3MjQ5MzU1MSIsIm1iX2xlYXZlX3RpbWUiOiIxNTExNTQ0ODUwODczIiwibWJfZW50ZXJfdGltZSI6IjE1MTE1NDQ0NjYxMDkiLCJtYl9jcmVhdGVfYXQiOiIxNTA5ODAwMjgzNzAwIiwibWJfdXBkYXRlX2F0IjoiMCIsIm1iX2RlbGV0ZV9hdCI6IjAiLCJleHBpcmVzSW5NaW51dGVzIjo0MzIwMCwiaWF0IjoxNTExNjc3MDI0fQ.X5Udo2Fynu_U0L9QX2aTIyGKjVQyhIb-Sp0RIFCFmcQ',
  }
}
const io = socketIo('ws://111.230.135.221:3000', options)
Vue.use(VueSocketio, io);

axios.defaults.baseURL = 'http://111.230.135.221:3000';
Vue.use(VueAxios, axios)
Vue.axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibWJfdXVpZCI6IjExMTExMTExIiwibWJfb3Blbl9pZCI6Im9xTWFId1Vjck5yTWZzb1M2NFVNUzdjSzh6ZUUiLCJtYl9zZXgiOjAsIm1iX25pY2tuYW1lIjoia2luZ3NvbiIsIm1iX2F2YXRhcl91cmwiOiJodHRwczovL3d4LnFsb2dvLmNuL21taGVhZC9QaWFqeFNxQlJhRUppYWFWbmhBQ05UZHRWZ1h2RWlhYmhlUm1nYThOb0NpY2Nac2FCcjQ2dGN6bEhnLzAiLCJtYl91bmlvbmlkIjoib1Z0emh3LVNWMEMzYmpCTnlhMmdGN18ydWZEYyIsIm1iX3Bob25lIjpudWxsLCJtYl9pZF9jYXJkIjpudWxsLCJtYl9yZWFsX25hbWUiOiIiLCJtYl9sdiI6MCwibWJfb3Blbl9pZF94Y3giOm51bGwsIm1iX2dvbGQiOjk5OTkwMCwibWJfcG93ZXIiOjEwLCJtYl9zdGFyZHVzdCI6MTMxNCwibWJfY2hhcm0iOjQzMTMwLCJtYl9oaWdoZXN0X2dhbWVfbHYiOjEsIm1iX3ZpcDFfaW52YWxpZF9hdCI6IjE1MTU2MDQ0OTM1NTEiLCJtYl92aXAyX2ludmFsaWRfYXQiOiIwIiwibWJfdmlwM19pbnZhbGlkX2F0IjoiMTUyNTk3MjQ5MzU1MSIsIm1iX2xlYXZlX3RpbWUiOiIwIiwibWJfZW50ZXJfdGltZSI6IjAiLCJtYl9jcmVhdGVfYXQiOiIxNTA5ODAwMjgzNzAwIiwibWJfdXBkYXRlX2F0IjoiMCIsIm1iX2RlbGV0ZV9hdCI6IjAiLCJleHBpcmVzSW5NaW51dGVzIjo0MzIwMCwiaWF0IjoxNTExMDc5MTg1fQ.3qYu-5cUzIKhTpu2rxDmyXkuawQ-aM3P4FAhCPk9vrw'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

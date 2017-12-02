<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'

  export default {
  name: 'app',
//  mounted () {
//    this.axios.get('/wechat/jssdk/signature?url=http://server.kl-esports.com/').then((res) => {
//      console.log(res.data.data)
//      wx.config(res.data.data)
//      wx.ready(function(){
//        wx.scanQRCode({
//          desc: 'scanQRCode desc',
//          needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
//          scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
//          success: function (res) {
//            window.alert(res)
//          },
//          error: function(res){
//            window.alert(res)
//            if(res.errMsg.indexOf('function_not_exist') > 0){
//              alert('版本过低请升级')
//            }
//          }
//        });
//      });
//      wx.error(function(res){
//        console.log(res)
//      })
//    })
//  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

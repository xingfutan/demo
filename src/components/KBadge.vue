<template>
  <div>
    <div class="title">
      <div class="title-text">魅力星尘</div>
    </div>
    <div class="cardContainer" v-if="mb_current_vip">
      <img class="card" v-if="card && mb_current_vip === 1" @click="card=!card" src="../assets/vip1.png">
      <img class="card" v-if="card && mb_current_vip === 2" @click="card=!card" src="../assets/vip2.png">
      <img class="card" v-if="card && mb_current_vip === 3" @click="card=!card" src="../assets/vip3.png">
      <img class="card" v-if="!card" @click="card=!card" src='../assets/vip-back.png'>
      <img class="qrcode" v-if="!card" :src="`http://111.230.135.221:3000/user/qrCode?type=1&mb_uuid=${mb_uuid}`">
    </div>
    <div style="margin-top: 50px" v-else>
      <img :src="`http://111.230.135.221:3000/user/qrCode?type=1&mb_uuid=${mb_uuid}`">
    </div>
    <div class="badge-num">
      <div>昵   称：{{nickname}}</div>
      <div>段   位：{{level}}</div>
      <div>财 力 值：{{gold}}</div>
      <div>魅 力 值：{{charm}}</div>
      <div>战 力 值：{{attack}}</div>
    </div>
    <div class="badge-join">
      <div><u @click="show_picture = true">加入{{group}}群</u></div>
    </div>
    <pic :visible.sync='show_picture' @hide= 'show_picture = false' :url="group_qrcode"></pic>
  </div>
</template>
<style scoped>
  .title {
    height: 140px;
    border-bottom:2px solid #03587C;
  }

  .title-text {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
    border: 2px solid #FFF;
    border-radius: 20px;
  }

  .badge {
    height: 300px;
    margin-top: 40px;
    margin-left: 10%;
    margin-right: 10%;
    border: 2px solid #ccc;
    border-radius: 25px;
  }

  .badge img {
    display: inline;
    float: left;
    border: 2px solid #ccc;
    margin-left: 40px;
    margin-top: 30px;
    width: 150px;
    height: 150px;
  }

  .badge .badge-info {
    display: inline;
    float: left;
    margin-left: 10%;
    margin-top: 40px;
  }

  #badge-level {
    font-size: 40px;
    text-align: left;
    color: #ffffff;
  }

  #badge-nickname {
    font-size: 40px;
    color: #ffffff;
  }

  .badge-num {
    margin-top: 40px;
    margin-left: 10%;
    color: #ffffff;
    float: left;
  }

  .badge-num div{
    font-size: 30px;
    text-align: left;
  }

  .badge-join{
    margin-top: 40px;
    margin-left: 10%;
    float: left;
    clear: both;
  }

  .badge-join div {
    color: blue;
    float: left;
    text-decoration: blue;
  }

  .qrcode{
    height: 175px;
    width: 175px;
    top: 80px;
    left: 500px;
    position: absolute;
    margin: auto;
  }

  .cardContainer{
    width: auto;
    height: 450px;
    position: relative;
  }

  .card {
    width: 650px;
    height: 350px;
    position: absolute;
    left: 50px;
    top: 50px;
    margin: auto;
  }

</style>
<script>
  import {GAMELV} from '../util/dictionary'
  import Pic from './Picture'
  export default {
    data () {
      return {
        nickname: '****',
        level: '****',
        gold: '****',
        charm: '****',
        attack: '****',
        qrcode: '',
        mb_uuid: '',
        mb_current_vip: '',
        card: true,
        group: '',
        group_qrcode: '',
        show_picture: false
      }
    },
    components: {
      Pic
    },
    beforeMount() {
      this.axios.get('/user/baseInfo').then(result => {
        if (result.data && result.data.code === 200) {
          this.nickname = result.data.data.mb_nickname;
          this.mb_uuid = result.data.data.mb_uuid;
          this.gold = result.data.data.mb_gold_heapup;
          this.charm = result.data.data.mb_charm;
          this.attack = result.data.data.mb_power;
          this.mb_current_vip = result.data.data.mb_current_vip;
          this.level = GAMELV[result.data.data.mb_highest_game_lv] || '';
        }
      }).catch(window.alert);
      this.axios.get('/user/wechatGroupCode').then(result => {
        if (result.data && result.data.code === 200) {
          this.group = result.data.data.g_desc
          this.group_qrcode = result.data.data.g_url
        }
      }).catch(window.alert);
    }
  }
</script>

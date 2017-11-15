<template>
  <div>
    <div class="title">
      <div class="title-text">魅力星尘</div>
    </div>
    <div id='badge' class="badge">
      <img src='../assets/a.png'>
      <div class="badge-info">
        <div id='badge-nickname'>{{nickname}}</div>
        <div id='badge-level'>{{level}}</div>
      </div>
    </div>
    <div class="badge-num">
      <div>K币余额：{{gold}}</div>
      <div>魅 力 值：{{charm}}</div>
      <div>战 力 值：{{attack}}</div>
    </div>
    <div class="badge-join">
      <div><u>加入{{level}}群</u></div>
    </div>
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

</style>
<script>
  import {GAMELV} from '../util/dictionary'
  export default {
    data () {
      return {
        nickname: '****',
        level: '****',
        gold: '****',
        charm: '****',
        attack: '****',
        qrcode: '',
      }
    },
    beforeMount() {
      this.axios.get('/user/baseInfo').then(result => {
        if (result.data && result.data.code === 200) {
          this.nickname = result.data.data.mb_nickname;
          this.gold = result.data.data.mb_gold;
          this.charm = result.data.data.mb_charm;
          this.attack = result.data.data.mb_power;
          this.level = GAMELV[result.data.data.mb_highest_game_lv] || '';
        }
      }).catch(window.alert);
      this.axios.get('/user/wechatGroupCode').then(result => {
        if (result.data && result.data.code === 200) {
          console.log(result.data.data)
        }
      })
    }
  }
</script>

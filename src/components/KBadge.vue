<template>
  <div>
    <div id='badge' class="badge">
      <img src='../assets/a.png'>
      <div class="badge-info">
        <div id='badge-nickname'>{{nickname}}</div>
        <div id='badge-level'>{{level}}</div>
      </div>
    </div>
    <div class="badge-num">
      <div>K币余额：{{gold}}</div>
      <div>魅力值：{{charm}}</div>
      <div>战力值：{{attack}}</div>
    </div>
    <div class="badge-join">
      <div><u>加入{{level}}群</u></div>
    </div>
    <div class="nav">
      <router-link class="nav-item" to="/charm">魅力</router-link>
      <router-link class="nav-item" to="/">K币</router-link>
    </div>
    <div class="nav">
      <router-link class="nav-item" to="/ranking">排行榜</router-link>
      <router-link class="nav-item" to="/competition">竞猜</router-link>
    </div>
  </div>
</template>
<style>
  .badge {
    margin-top: 0.3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    border: 2px solid #ccc;
    border-radius: 25px;
    height: 3rem;
  }

  .badge img {
    display: inline;
    float: left;
    border: 2px solid #ccc;
    margin-left: 1rem;
    margin-top: 0.3rem;
  }

  .badge .badge-info {
    display: inline;
    float: left;
    margin-left: 1rem;
    margin-top: 0.3rem;
  }

  #badge-level {
    font-size: 40px;
    text-align: left;
  }

  #badge-nickname {
    font-size: 40px;
  }

  .badge-num {
    margin-top: 0.3rem;
    margin-left: 1rem;
    float: left;
  }

  .badge-num div{
    font-size: 30px;
    text-align: left;
  }

  .badge-join{
    margin-top: 0.3rem;
    margin-left: 1rem;
    float: left;
    clear: both;
  }

  .badge-join div {
    color: blue;
    float: left;
    text-decoration: blue;
  }




  .nav {
    clear: both;
    height: 80px;
    line-height: 80px;
    display: flex;
    text-align: center;
  }

  .nav-item {
    flex: 1;
    text-decoration: none;
  }

  .nav-item:link, .nav-item:visited {
    background-color: white;
    color: black;
  }

  .nav-item:hover, .nav-item:active {
    color: white;
    background-color: #C8C6C6;
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

<template>
  <div>
    <div class="title">
      <div class="title-text">K币管理</div>
    </div>
    <div class="icon-bar">
      <div class="icon-bar-item icon-bar-title">K币余额</div>
      <div class="icon-bar-item icon-bar-more">费用规则</div>
      <div class="icon-bar-item icon-bar-more" @click="$router.push('/bill?type=gold')">账单记录</div>
    </div>
    <div class="info-board">
      <div class="info-board-body">{{mb_gold}}K币</div>
      <div class="info-board-more">已使用星空时间：{{consumeTime}}分钟</div>
    </div>
    <div class="icon-bar">
      <div class="icon-bar-item icon-bar-title">财力值</div>
    </div>
    <div class="info-board">
      <div class="info-board-body">{{mb_gold_heapup}}</div>
    </div>
    <div class="icon-bar">
      <div class="icon-bar-item icon-bar-title">财力排行榜</div>
    </div>
    <div class="info-board">
      <div class="info-board-body">{{goldRank}}</div>
      <div class="info-board-unit">位</div>
      <div class="info-board-more ranking-more" @click="$router.push('/ranking?tag=gold')">查看完整排名</div>
    </div>
    <div class="nav">
      <div class="nav-item nav-item-left" @click="show_recharge = true">充值</div>
      <div class="nav-item nav-item-right" @click="show_give = true">赠送</div>
    </div>
    <give-gold :visible.sync='show_give' @hide-give= 'show_give = false'></give-gold>
    <recharge :visible.sync='show_recharge' @hide-recharge= 'show_recharge = false'></recharge>
  </div>
</template>
<style scoped>
  .title {
    height: 140px;
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
  .icon-bar {
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    color: #fff;
    background-color: #231927;
    border-top:2px solid #03587C;
    border-bottom:2px solid #03587C;
  }

  .icon-bar-item {
    display: inline;
  }

  .icon-bar-title {
    float: left;
    margin-left: 30px;
  }

  .icon-bar-more {
    float: right;
    margin-right: 30px;
  }

  .info-board {
    height: 200px;
    width: auto;
    color: #fff;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 30px;
    font-weight:bold;
    position: relative;
  }

  .info-board-body {
    font-size: 80px;
  }

  .info-board-unit {
    color: #1DACD9;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    position: absolute;
    border:2px solid #1DACD9;
    border-radius: 20px;
    top: 0px;
    right: 250px
  }

  .info-board-more {
    font-size: 30px;
  }

  .ranking-more {
    text-align: right;
  }

  .nav {
    height: 80px;
    line-height: 80px;
    width: 100%;
    text-align: center;
    position:absolute;
    bottom:0;
    color: #fff;
    font-weight:bold;
  }

  .nav-item {
    height: 80px;
    line-height: 80px;
    width: 50%;
    display: inline;
    float:left;
    text-decoration: none;

  }

  .nav-item-left {
    background-color: #1C3183;
  }

  .nav-item-right {
    background-color: #1B215D;
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
  import GiveGold from './KGive.vue'
  import Recharge from './Recharge.vue'
  export default {
    name: 'management',
    components: {
      GiveGold,
      Recharge,
    },
    data () {
      return {
        mb_gold: '***',
        mb_gold_heapup: '***',
        consumeTime: '***',
        goldRank: '***',
        show_recharge: false,
        show_give: false,
      }
    },
    beforeMount() {
      this.axios.get('/user/baseInfo').then(result => {
        if (result.data && result.data.code === 200) {
          this.mb_gold = result.data.data.mb_gold;
          this.consumeTime = result.data.data.consumeTime ? Math.ceil(result.data.data.consumeTime / 60) : 0;
          this.goldRank = result.data.data.goldRank;
          this.mb_gold_heapup = result.data.data.mb_gold_heapup;
        }
      }).catch(window.alert);
    }
  }
</script>

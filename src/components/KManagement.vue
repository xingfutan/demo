<template>
  <div>
    <div class="icon-bar">
      <span>费用规则</span>
      <span>账单记录</span>
    </div>
    <div id='balance' class="info-board">
      <div id='balance-title' class="info-board-title">K币余额</div>
      <div id='balance-count' class="info-board-body">{{balance_count}}</div>
      <div id='balance-time'>消耗星空时间：{{balance_time}}分钟</div>
    </div>
    <div id='financial-ranking' class="info-board">
      <div id='ranking-title' class="info-board-title">财力排行榜</div>
      <div id='ranking-prize' class="info-board-body">{{ranking_prize}}位</div>
      <div id='ranking-more'>查看完整排名</div>
    </div>
    <div class="nav">
      <div class="nav-item" @click="show_charging = true">充值</div>
      <div class="nav-item" @click="showModal">赠送</div>
    </div>
    <div class="nav">
      <router-link class="nav-item" to="/charm">魅力</router-link>
      <router-link class="nav-item" to="/badge">徽章</router-link>
    </div>
    <div class="nav">
      <router-link class="nav-item" to="/ranking">排行榜</router-link>
      <router-link class="nav-item" to="/competition">竞猜</router-link>
    </div>
  </div>
</template>
<style>
  .icon-bar {
    text-align: right;
    font-size: 28px;
  }

  .info-board {
    width: auto;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    margin-top: 2rem;
  }

  .info-board-title {
    font-size: 28px;
    text-align: left;
  }

  .info-board-body {
    font-size: 80px;
  }

  #ranking-more {
    margin-top: 0.1rem;
    font-size: 28px;
    text-align: right;
  }

  #balance-time {
    font-size: 28px;
  }

  .nav {
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
  export default {
    data () {
      return {
        balance_count: '***',
        balance_time: '***',
        ranking_prize: '***',
        show_charging: false,
        show_give: false,
        give_visible: true
      }
    },
    beforeMount () {
      this.axios.get('/user/gold').then(result => {
        if (result.data && result.data.code === 200) {
          this.balance_count = result.data.data.mb_gold
          this.balance_time = result.data.data.pay_per_minute
          this.ranking_prize = result.data.data.rank
        }
      }).catch(window.alert)
    },
    methods: {
      showModal () {
        console.log(this.$refs.give1)
        this.$refs.give1.visible = true
      }
    }
  }
</script>

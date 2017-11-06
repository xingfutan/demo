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
  </div>
</template>
<style>
  .icon-bar{
    text-align: right;
    font-size: 28px;
  }
  .info-board{
    width: auto;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    margin-top: 2rem;
  }
  .info-board-title{
    font-size: 28px;
    text-align: left;
  }
  .info-board-body{
    font-size: 80px;
  }
  #ranking-more{
    margin-top: 0.1rem;
    font-size: 28px;
    text-align: right;
  }
  #balance-time{
    font-size: 28px;
  }
</style>q
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        balance_count: '***',
        balance_time: '***',
        ranking_prize: '***',
      }
    },
    beforeMount() {
      this.axios.get('/user/gold').then(result => {
        if(result.data && result.data.code === 200){
          this.balance_count = result.data.data.mb_gold;
          this.balance_time = result.data.data.pay_per_minute;
          this.ranking_prize = result.data.data.rank;
        }
      }).catch(window.alert);
    }
  }
</script>

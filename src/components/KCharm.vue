<template>
  <div>
    <div id='charm-count'>
      <div id='charm-count-title'>当前魅力值</div>
      <div id='charm-count-number'>{{charm_count}}星辰</div>
    </div>
    <div id='charm-ranking'>
      <div id='charm-ranking-title'>魅力榜排名</div>
      <div id='charm-ranking-prize'>{{charm_ranking_prize}}</div>
      <div id='charm-ranking-more'>查看完整排名</div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data () {
      return {
        charm_count: '***',
        charm_ranking_prize: '***'
      }
    },
    beforeMount () {
      this.axios.get('/user/charm').then(result => {
        if (result.data && result.data.code === 200) {
          console.log(result.data)
          this.charm_count = result.data.data.mb_charm
          this.charm_ranking_prize = result.data.data.rank
        }
      }).catch(window.alert)
    }
  }
</script>

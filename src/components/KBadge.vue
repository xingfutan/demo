<template>
  <div>
    <div id='badge'>
      <div id='badge-nickname'>{{nickname}}</div>
      <div id='badge-level'>{{level}}</div>
    </div>
    <div class="badge-info">K币余额：{{gold}}</div>
    <div class="badge-info">魅力值：{{charm}}</div>
    <div class="badge-info">战力值：{{attack}}</div>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data () {
      return {
        nickname: '***',
        level: '倔强青铜III',
        gold: '****',
        charm: '****',
        attack: '****'
      }
    },
    beforeMount () {
      this.axios.get('/user/baseInfo').then(result => {
        if (result.data && result.data.code === 200) {
          this.nickname = result.data.data.mb_nickname
          this.gold = result.data.data.mb_gold
          this.charm = result.data.data.mb_charm
          this.attack = result.data.data.mb_power
//          this.mb_highest_game_lv = result.data.data.mb_highest_game_lv
        }
      }).catch(window.alert)
    }
  }
</script>

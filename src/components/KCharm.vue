<template>
  <div>
    <div class="title">
      <div class="title-text">魅力星尘</div>
    </div>
    <div class="icon-bar">
      <div class="icon-bar-item icon-bar-title">剩余星尘</div>
    </div>
    <div class="info-board">
      <div class="info-board-body">{{mb_stardust}}星尘</div>
    </div>
    <div class="icon-bar">
      <div class="icon-bar-item icon-bar-title">当前魅力值</div>
    </div>
    <div class="info-board">
      <div class="info-board-body">{{mb_charm}}</div>
    </div>
    <div class="icon-bar">
      <div class="icon-bar-item icon-bar-title">魅力榜排名</div>
    </div>
    <div class="info-board">
      <div class="info-board-body">{{charmRank}}</div>
      <div class="info-board-unit">位</div>
      <div class="info-board-more ranking-more" @click="$router.push('/ranking?tag=charm')">查看完整排名</div>
    </div>
    <div class="nav">
      <div class="nav-item nav-item-left" @click="$router.push('/gift')">兑换礼物</div>
      <div class="nav-item nav-item-right" @click="show_give = true">赠送</div>
    </div>
  <give :visible.synv='show_give' @hide-give= 'show_give = false'></give>
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
    height: 160px;
    width: auto;
    color: #fff;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 80px;
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
    position: relative;
    border:2px solid #1DACD9;
    top: -45%;
    left: 55%;
    border-radius: 20px;
  }

  .info-board-more {
    font-size: 30px;
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

</style>
<script>
  import Give from './KGive.vue'
  export default {
    data () {
      return {
        mb_charm: '***',
        charmRank: '***',
        mb_stardust: '***',
        show_give: false,
      }
    },
    components: {
      Give,
    },
    beforeMount() {
      this.axios.get('/user/baseInfo').then(result => {
        if(result.data && result.data.code === 200){
          console.log(result.data)
          this.mb_charm = result.data.data.mb_charm;
          this.charmRank = result.data.data.charmRank;
          this.mb_stardust = result.data.data.mb_stardust;
        }
      }).catch(window.alert);
    }
  }
</script>

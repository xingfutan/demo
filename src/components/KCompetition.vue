<template>
  <div class="container">
    <div class="title">
      <div class="title-text">排行榜</div>
    </div>
    <div class="icon-bar">
      <div class="icon-bar-item icon-bar-title">K币余额</div>
      <div class="icon-bar-item icon-bar-more">投注记录</div>
    </div>
    <div class="info-board">
      <div class="info-board-body">{{gold}}</div>
    </div>
    <div>
      <div class="vs" v-for="game in games">
        <div class="vs-left">
          <div class="vs-left-title">蓝方</div>
          <div class="vs-left-list">
            <ul>
              <li><img class="vs-icon" :src="game.members[0].mb_avatar_url"/>{{game.members[0].mb_nickname}}</li>
              <li><img class="vs-icon" :src="game.members[1].mb_avatar_url"/>{{game.members[1].mb_nickname}}</li>
              <li><img class="vs-icon" :src="game.members[2].mb_avatar_url"/>{{game.members[2].mb_nickname}}</li>
              <li><img class="vs-icon" :src="game.members[3].mb_avatar_url"/>{{game.members[3].mb_nickname}}</li>
              <li><img class="vs-icon" :src="game.members[4].mb_avatar_url"/>{{game.members[4].mb_nickname}}</li>
            </ul>
          </div>
          <div class="vs-rate">1.5倍</div>
          <div class="vs-win">蓝方胜</div>
        </div>
        <div class="vs-middle">
          <div class="vs-middle-title">{{getStatus(game.r_status)}}</div>
          <div class="vs-middle-time">08:00</div>
          <div class="vs-middle-icon">V.S</div>
        </div>
        <div class="vs-right">
          <div class="vs-right-title">红方</div>
          <div class="vs-right-list">
            <ul>
              <li>{{game.members[5].mb_nickname}}<img class="vs-icon" :src="game.members[5].mb_avatar_url"/></li>
              <li>{{game.members[6].mb_nickname}}<img class="vs-icon" :src="game.members[6].mb_avatar_url"/></li>
              <li>{{game.members[7].mb_nickname}}<img class="vs-icon" :src="game.members[7].mb_avatar_url"/></li>
              <li>{{game.members[8].mb_nickname}}<img class="vs-icon" :src="game.members[8].mb_avatar_url"/></li>
              <li>{{game.members[9].mb_nickname}}<img class="vs-icon" :src="game.members[9].mb_avatar_url"/></li>
            </ul>
          </div>
          <div class="vs-rate">1.2倍</div>
          <div class="vs-win">红方胜</div>
        </div>
      </div>
    </div>

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
    border-top: 2px solid #03587C;
    border-bottom: 2px solid #03587C;
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

  .vs-icon {
    height: 80px;
    width: 80px;
  }

  .info-board {
    height: 240px;
    width: auto;
    color: #fff;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 100px;
    font-weight: bold;
    border-bottom: 2px solid #03587C;
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
    border: 2px solid #1DACD9;
    top: -45%;
    left: 55%;
    border-radius: 20px;
  }

  .info-board-more {
    font-size: 30px;
  }

  .vs {
    width: 100%;
    color: #ffffff;
    margin-top: 20px;
    font-size: 30px;
    height: 700px;
    border-bottom: 2px solid #1DACD9;
  }

  .vs-left {
    list-style: none;
    display: inline;
    float: left;
    text-align: left;
    margin-left: 3%;
    width: 30%;
  }

  .vs-middle {
    width: 34%;
    display: inline;
    float: left;
  }

  .vs-right {
    width: 30%;
    list-style: none;
    display: inline;
    float: right;
    text-align: right;
    margin-right: 3%;
  }

  .vs-left ul {
    list-style: none;
  }

  .vs-right ul {
    list-style: none;
  }

  .vs-left ul li {
    height: 100px;
    line-height: 100px;
  }

  .vs-right ul li {
    height: 100px;
    line-height: 100px;
  }

  .vs-left-list {
    margin-top: 10px;
  }

  .vs-right-list {
    margin-top: 10px;
  }

  .vs-middle-icon {
    font-size: 160px;
    margin-top: 100px;
  }

  .vs-left-title {
    color: blue;
  }

  .vs-right-title {
    color: red;
  }

  .vs-rate {
    margin-top: 10px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  .vs-win {
    margin-top: 10px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #ffffff;
  }
</style>
<script>
  import Give from './KGive.vue'
  export default {
    data () {
      return {
        games: [],
        gold: '',
      }
    },
    components: {
      Give,
    },
    beforeMount() {
      this.axios.get('/user/gameRoomInfo').then(result => {
        if (result.data && result.data.code === 200) {
          this.games = result.data.data;
        }
      }).catch(window.alert);
      this.axios.get('/user/gold').then(result => {
        if (result.data && result.data.code === 200) {
          this.gold = result.data.data.mb_gold;
        }
      }).catch(window.alert);
    },
    methods: {
      getStatus(status){
        const STATUS = ['未开始', '进行中', '已结束', '已结算'];
        return STATUS[status] || '状态异常';
      }
    }
  }
</script>

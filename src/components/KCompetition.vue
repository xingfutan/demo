<template>
  <div class="container">
    <scroller :on-infinite="infinite">
      <div class="title">
        <div class="title-text">竞猜</div>
      </div>
      <div class="icon-bar">
        <div class="icon-bar-item icon-bar-title">K币余额</div>
        <div class="icon-bar-item icon-bar-more" @click="$router.push('/bill?type=gold_stake')">投注记录</div>
      </div>
      <div class="info-board">
        <div class="info-board-body">{{gold}}K币</div>
      </div>
      <div>
        <div class="vs" v-for="game in games">
          <div class="vs-left">
            <div class="vs-left-title">蓝方</div>
            <div class="vs-left-list">
              <ul v-if="game.members && game.members.length">
                <li>
                  <img class="vs-icon-left" @click="showUserInfo(game.members[0].rm_member_id)"
                       :src="game.members[0].mb_avatar_url"/>
                  <div class="member-info-left">
                    <div v-if="game.r_status === 3">{{game.members[0].rm_gift}}</div>
                    <div>{{getLevel(game.members[0].mb_highest_game_lv)}}</div>
                  </div>
                </li>
                <li><img class="vs-icon-left" @click="showUserInfo(game.members[1].rm_member_id)"
                         :src="game.members[1].mb_avatar_url"/>
                  <div class="member-info-left">
                    <div v-if="game.r_status === 3">{{game.members[1].rm_gift}}</div>
                    <div>{{getLevel(game.members[1].mb_highest_game_lv)}}</div>
                  </div>
                </li>
                <li><img class="vs-icon-left" @click="showUserInfo(game.members[2].rm_member_id)"
                         :src="game.members[2].mb_avatar_url"/>
                  <div class="member-info-left">
                    <div v-if="game.r_status === 3">{{game.members[2].rm_gift}}</div>
                    <div>{{getLevel(game.members[2].mb_highest_game_lv)}}</div>
                  </div>
                </li>
                <li><img class="vs-icon-left" @click="showUserInfo(game.members[3].rm_member_id)"
                         :src="game.members[3].mb_avatar_url"/>
                  <div class="member-info-left">
                    <div v-if="game.r_status === 3">{{game.members[3].rm_gift}}</div>
                    <div>{{getLevel(game.members[3].mb_highest_game_lv)}}</div>
                  </div>
                </li>
                <li><img class="vs-icon-left" @click="showUserInfo(game.members[4].rm_member_id)"
                         :src="game.members[4].mb_avatar_url"/>
                  <div class="member-info-left">
                    <div v-if="game.r_status === 3">{{game.members[4].rm_gift}}</div>
                    <div>{{getLevel(game.members[4].mb_highest_game_lv)}}</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="vs-rate">{{game.rateBlue && game.rateBlue.toFixed(2)}}倍</div>
            <div class="vs-win" @click="userBet(game.r_id, 'blue')">蓝方胜</div>
          </div>
          <div class="vs-middle">
            <div class="vs-middle-title">{{getStatus(game.r_status)}}</div>
            <div class="vs-middle-time">场次：{{game.r_id}}</div>
            <div class="vs-middle-icon">V.S</div>
          </div>
          <div class="vs-right">
            <div class="vs-right-title">红方</div>
            <div class="vs-right-list">
              <ul v-if="game.members && game.members.length">
                <li>
                  <img class="vs-icon-right"
                       @click="showUserInfo(game.members[5].rm_member_id)"
                       :src="game.members[5].mb_avatar_url"/>
                  <div class="member-info-right">
                    <div v-if="game.r_status === 3">{{game.members[5].rm_gift}}</div>
                    <div>{{getLevel(game.members[5].mb_highest_game_lv)}}</div>
                  </div>
                </li>
                <li>
                  <img class="vs-icon-right"
                       @click="showUserInfo(game.members[6].rm_member_id)"
                       :src="game.members[6].mb_avatar_url"/>
                  <div class="member-info-right">
                    <div v-if="game.r_status === 3">{{game.members[6].rm_gift}}</div>
                    <div>{{getLevel(game.members[6].mb_highest_game_lv)}}</div>
                  </div>
                </li>
                <li>
                  <img class="vs-icon-right"
                       @click="showUserInfo(game.members[7].rm_member_id)"
                       :src="game.members[7].mb_avatar_url"/>
                  <div class="member-info-right">
                    <div v-if="game.r_status === 3">{{game.members[7].rm_gift}}</div>
                    <div>{{getLevel(game.members[7].mb_highest_game_lv)}}</div>
                  </div>
                </li>
                <li>
                  <img class="vs-icon-right"
                       @click="showUserInfo(game.members[8].rm_member_id)"
                       :src="game.members[8].mb_avatar_url"/>
                  <div class="member-info-right">
                    <div v-if="game.r_status === 3">{{game.members[8].rm_gift}}</div>
                    <div>{{getLevel(game.members[8].mb_highest_game_lv)}}</div>
                  </div>
                </li>
                <li>
                  <img class="vs-icon-right"
                       @click="showUserInfo(game.members[9].rm_member_id)"
                       :src="game.members[9].mb_avatar_url"/>
                  <div class="member-info-right">
                    <div v-if="game.r_status === 3">{{game.members[9].rm_gift}}</div>
                    <div>{{getLevel(game.members[9].mb_highest_game_lv)}}</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="vs-rate">{{game.rateRed && game.rateRed.toFixed(2)}}倍</div>
            <div class="vs-win" @click="userBet(game.r_id, 'red')">红方胜</div>
          </div>
        </div>
      </div>
    </scroller>
    <bet :visible.sync='showBet' :s_team='win' :s_room_id='room' @hide-give='showBet = false' ref='bet'></bet>
    <user-info :visible.sync='showUser' :user="user" @hide='showUser = false' ref='userInfo'></user-info>
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

  .vs-icon-left {
    float: left;
    height: 80px;
    width: 80px;
  }

  .vs-icon-right {
    float: right;
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
    width: 35%;
  }

  .vs-middle {
    width: 24%;
    display: inline;
    float: left;
  }

  .vs-right {
    width: 35%;
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
    height: 500px;
    margin-top: 10px;
  }

  .vs-right-list {
    height: 500px;
    margin-top: 10px;
  }

  .vs-middle-icon {
    font-size: 100px;
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
    border: 2px solid #ffffff;
    border-radius: 20px;
  }

  .game-list {
    margin-top: 560px;
  }

  .member-info-left {
    display: inline;
    float: left;
    line-height: 40px;
  }

  .member-info-right {
    display: inline;
    float: right;
    line-height: 40px;
  }
</style>
<script>
  import Bet from './Bet.vue'
  import {GAMELV} from '../util/dictionary'
  import UserInfo from './UserInfo'

  export default {
    data () {
      return {
        games: [],
        gold: '',
        page: 0,
        showBet: false,
        room: '',
        win: '',
        showUser: false,
        user: {}
      }
    },
    components: {
      Bet,
      UserInfo
    },
    beforeMount() {
      this.axios.get('/user/gold').then(result => {
        if (result.data && result.data.code === 200) {
          this.gold = result.data.data.mb_gold;
        }
      }).catch(window.alert);
    },
    sockets: {
      connect: function () {
        console.log('socket connected')
      },
      stopBet: function (val) {
        console.log(this.games)
        const index = this._.findIndex(this.games, val)
        if (index !== -1) {
          this.games[index].r_status = 2
        }
      },
      gameOver: function (val) {
        //{r_id:1, win:'red',red:{mvp:1},blue:{mvp:8}}
        const index = this._.findIndex(this.games, {r_id: val.r_id});
        if (index !== -1) {
          this.games[index].r_status = 3
        }
      },
      winRate: function (val) {
        // {r_id:1,rateRed:1,rateBlue:1,totalRed:0,totalBlue:0}
        const index = this._.findIndex(this.games, {r_id: val.r_id});
        if (index !== -1) {
          this.games[index].rateRed = val.rateRed
          this.games[index].rateBlue = val.rateBlue
          this.games[index].totalRed = val.totalRed
          this.games[index].totalBlue = val.totalBlue
        }
      }
    },
    methods: {
      userBet(id, win){
        this.room = id
        this.win = win
        this.showBet = true
      },
      infinite(done){
        if (this.page === null) return done(true)
        this.axios.get('/user/gameRoomInfo', { params: { page_index: this.page + 1, page_size: 10 } }).then(result => {
          if (result.data && result.data.code === 200) {
            console.log(result.data.data.list.length)
            this.games = this.games.concat(result.data.data.list)
            console.log(this.games.length)
            this.page += 1
            if (result.data.data.list.length < 10) {
              this.page = null
            }
            done()
          }
        }).catch(window.alert);
      },
      getStatus(status){
        switch (status) {
          case 1:
            return '投注中'
            break
          case 2:
            return '进行中'
            break
          case 3:
            return '已结束'
            break
          case 4:
            return '已结算'
            break
          default:
            return '异常'
        }
      },
      getLevel(level){
        return GAMELV[level] || '无'
      },
      showUserInfo(id){
        const url = `/user/${id}/userInfo`
        this.axios.get(url).then(result => {
          if (result.data && result.data.code === 200 && result.data.status === 'OK' && result.data.data.exist === true) {
            this.user = result.data.data
          } else {
            this.user = {}
          }
        }).catch(window.alert);
        this.showUser = true
      }
    }
  }
</script>

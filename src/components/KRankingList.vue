<template>
  <div class="container">
    <scroller :on-infinite="infinite" ref='scroller1'>
      <div class="title">
        <div class="title-text">排行榜</div>
      </div>
      <div class="header">{{title}}</div>
      <div class="portrait" v-if='rankingList.length'>
        <div class="portrait_div">
          <div class="portrait_icon">
            <img :src="rankingList[1].mb_avatar_url" @click="showUserInfo(rankingList[1].mb_uuid)">
          </div>
          <div>{{rankingList[1].mb_nickname || '无'}}</div>
          <div>第二名</div>
          <div class="portrait_button" @click="showGiveModal(rankingList[1].mb_uuid)">
            赠送
          </div>
        </div>
        <div class="portrait_div_large">
          <div class="portrait_icon_large">
            <img :src="rankingList[0].mb_avatar_url" @click="showUserInfo(rankingList[0].mb_uuid)">
          </div>
          <div>{{rankingList[0].mb_nickname || '无'}}</div>
          <div>第一名</div>
          <div class="portrait_button" @click="showGiveModal(rankingList[0].mb_uuid)">
            赠送
          </div>
        </div>
        <div class="portrait_div">
          <div class="portrait_icon">
            <img :src="rankingList[2].mb_avatar_url" @click="showUserInfo(rankingList[2].mb_uuid)">
          </div>
          <div>{{rankingList[2].mb_nickname || '无'}}</div>
          <div>第三名</div>
          <div class="portrait_button" @click="showGiveModal(rankingList[2].mb_uuid)">
            赠送
          </div>
        </div>
      </div>

      <div class="rankingList" v-if='rankingList.length > 3'>
        <ul v-for='(ranking, index ) in rankingList'>
          <li v-if="index > 2">
            <div class="rankingItem">
              <div class="rankingIndex">{{index + 1}}</div>
              <div class="rankingIcon"><img class="other-icon" @click="showUserInfo(ranking.mb_uuid)" :src="ranking.mb_avatar_url"></div>
              <div class="rankingNickname">{{ranking.mb_nickname}}</div>
              <div class="rankingDistance">距离前一名{{rankingList[index-1][`mb_${type}`] - ranking[`mb_${type}`]}}{{typeName}}
              </div>
              <div class="raningSend" @click="showGiveModal(ranking.mb_uuid)">赠
              </div>
            </div>
          </li>
        </ul>
      </div>
    </scroller>
      <div class="nav">
        <div class="nav-item nav-item-left" @click="getRanking('gold')">财力</div>
        <div class="nav-item nav-item-right" @click="getRanking('charm')">魅力</div>
        <div class="nav-item nav-item-left" @click="getRanking('power')">战力</div>
      </div>
    <give :visible.sync='show_give_charm' @hide-give='show_give_charm = false' ref='give-charm'></give>
    <user-info :visible.sync='showUser' :user="user" @hide='showUser = false' ref='userInfo'></user-info>
  </div>
</template>
<script>
  import Give from './KGive.vue'
  import UserInfo from './UserInfo'
  export default {
    data () {
      return {
        type: '',
        page: 0,
        rankingList: [],
        show_give_charm: false,
        show_give_gold: false,
        showUser: false,
        user: {}
      }
    },

    components: {
      Give,
      UserInfo
    },
    computed: {
      typeName: function () {
        switch (this.type) {
          case 'power':
            return '战力'
            break
          case 'charm':
            return '魅力星尘'
            break
          default:
            return 'K币'
        }
      },
      title: function () {
        switch (this.type) {
          case 'power':
            return '战力榜'
            break
          case 'charm':
            return '魅力榜'
            break
          default:
            return '财力榜'
        }
      }
    },
    methods: {
      infinite(done){
        if(this.page === null) return done()
        this.axios.get(`/user/top/${this.type}`, {params: {page_index: this.page + 1, page_size: 10}}).then(result => {
          if (result.data && result.data.code === 200) {
            console.log(result.data.data.list.length)
            this.rankingList = this.rankingList.concat(result.data.data.list)
            this.page += 1
            if(result.data.data.list.length < 10){
              this.page = null
            }
            done()
          }
        }).catch(window.alert)
      },
      getRanking(type){
        this.rankingList = []
        this.type = type
        this.page = 0
      },
      showGiveModal(id){
        this.$refs[`give-charm`].member_id = id
        this[`show_give_charm`] = true
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
    },
    beforeMount() {
      this.type = 'gold'
      if (this.$route.query && this.$route.query.tag) {
        this.type = this.$route.query.tag
      }
    }
  }
</script>
<style scoped>

  .title {
    height: 140px;
    border-bottom: 2px solid #03587C;
  }

  .title-text {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
    border: 2px solid #FFF;
    border-radius: 20px;
  }

  .header {
    font-weight: bold;
    font-size: 80px;
    color: #ffffff;
  }

  .container {
    width: auto;
  }

  .portrait {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #03587C;
  }

  .portrait_div {
    color: #ffffff;
    width: 32%;
    margin-top: 30px;
  }

  .portrait_div_large {
    color: #ffffff;
    width: 34%;
    font-weight: bold;
  }

  .portrait_button {
    color: #ffffff;
    border: 2px solid #ffffff;
    margin: 10px 15% 10px 15%;
    border-radius: 10px;
  }

  .rankingList {
    text-align: left;
  }

  .rankingList span {
    font-size: 20px;
    width: auto;
  }

  .rankingList ul li {
    list-style: none;
    width: auto;
  }

  .portrait_icon img {
    width: 120px;
    height: 120px;
    border-radius: 60px;
  }

  .portrait_icon_large img {
    width: 150px;
    height: 150px;
    border-radius: 75px;
  }

  .rankingItem {
    width: auto;
    height: 120px;
    line-height: 120px;
    color: #ffffff;
  }

  .rankingIndex {
    display: inline;
    float: left;
    width: 10%;
    font-size: 20px;
    text-align: center;
  }

  .rankingNickname {
    display: inline;
    float: left;
    width: 20%;
    font-size: 20px;
    overflow: hidden;
  }

  .rankingDistance {
    display: inline;
    float: left;
    width: 45%;
    font-size: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .rankingSend {
    display: inline;
    float: left;
    width: 10%;
  }

  .rankingIcon {
    display: inline;
    float: left;
    width: 15%;
  }

  .other-icon {
    width: 60px;
    height: auto;
  }

  .nav {
    height: 80px;
    line-height: 80px;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    color: #fff;
    font-weight: bold;
  }

  .nav-item {
    height: 80px;
    line-height: 80px;
    width: 33.3%;
    display: inline;
    float: left;
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

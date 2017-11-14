<template>
  <div class="container">
    <div class="title">
      <div class="title-text">魅力星尘</div>
    </div>
    <div class="header">魅力榜</div>
    <div class="portrait">
      <div class="portrait_div">
        <div class="portrait_icon">
          <img src="../assets/icon.jpeg">
        </div>
        <div>{{ranking2.mb_nickname || '无'}}</div>
        <div>第二名</div>
        <div class="portrait_button" @click="showGiveModal(ranking2.id)" v-show='type === "charm" || type === "gold"'>
          赠送
        </div>
      </div>
      <div class="portrait_div_large">
        <div class="portrait_icon_large">
          <img src="../assets/icon.jpeg">
        </div>
        <div>{{ranking1.mb_nickname || '无'}}</div>
        <div>第一名</div>
        <div class="portrait_button" @click="showGiveModal(ranking1.id)" v-show='type === "charm" || type === "gold"'>
          赠送
        </div>
      </div>
      <div class="portrait_div">
        <div class="portrait_icon">
          <img src="../assets/icon.jpeg">
        </div>
        <div>{{ranking3.mb_nickname || '无'}}</div>
        <div>第三名</div>
        <div class="portrait_button" @click="showGiveModal(ranking3.id)" v-show='type === "charm" || type === "gold"'>
          赠送
        </div>
      </div>
    </div>

    <div class="rankingList" v-if='rankingOther.length'>
      <ul v-for='(ranking, index ) in rankingOther'>
        <li>
          <div class="rankingItem">
            <div class="rankingIndex">{{index + 4}}</div>
            <div class="rankingIcon"><img class="other-icon" src="../assets/icon.jpeg"></div>
            <div class="rankingNickname">{{ranking.mb_nickname}}</div>
            <div class="rankingDistance">距离前一名{{index ? rankingOther[index-1][`mb_${type}`] - ranking[`mb_${type}`] :
              ranking3[`mb_${type}`] - ranking[`mb_${type}`]}}{{typeName}}
            </div>
            <div class="raningSend" @click="showGiveModal(ranking.id)" v-show='type === "charm" || type === "gold"'>赠
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="nav">
      <div class="nav-item nav-item-left" @click="getRanking('gold')">财力</div>
      <div class="nav-item nav-item-right" @click="getRanking('charm')">魅力</div>
      <div class="nav-item nav-item-left" @click="getRanking('power')">战力</div>
    </div>
    <give :visible.sync='show_give_charm' @hide-give='show_give_charm = false' ref='give-charm'></give>
    <give-gold :visible.sync='show_give_gold' @hide-give='show_give_gold = false' ref='give-gold'></give-gold>
  </div>
</template>
<script>
  import Give from './KGive.vue'
  import GiveGold from './GiveGold.vue'
  export default {
    data () {
      return {
        type: '',
        ranking1: '',
        ranking2: '',
        ranking3: '',
        rankingOther: [],
        show_give_charm: false,
        show_give_gold: false,
      }
    },
    components: {
      Give,
      GiveGold
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
      }
    },
    methods: {
      getRanking(type){
        this.axios.get(`/user/top/${type}`).then(result => {
          if (result.data && result.data.code === 200) {
            console.log(type)
            this.type = type;
            this.ranking1 = result.data.data[0] || {};
            this.ranking2 = result.data.data[1] || {};
            this.ranking3 = result.data.data[2] || {};
            this.rankingOther = result.data.data.slice(3);
          }
        }).catch(window.alert);
      },
      showGiveModal(id){
        this.$refs[`give-${this.type}`].member_id = id
        this[`show_give_${this.type}`] = true
      }
    },
    beforeMount() {
      this.getRanking('gold');
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
    border: 1px solid #ffffff;
    margin: 10px 15% 10px 15%;
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
    overflow: hidden;
  }

  .rankingSend {
    display: inline;
    float: left;
    width: 10%;
  }
  .rankingIcon{
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
    position: fixed;
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

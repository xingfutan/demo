<template>
  <div class="container">
    <header><h1>魅力榜</h1></header>

    <div class="portrait">
      <div class="portrait_div">
        <div class="portrait_icon">
          <img src="../assets/icon.jpeg">
        </div>
        <div>{{ranking2.mb_nickname || '无'}}</div>
        <div>第二名</div>
        <div>
          <button @click="showGiveModal(ranking2.id)" v-show='type === "charm" || type === "gold"'>赠送</button>
        </div>
      </div>
      <div class="portrait_div">
        <div class="portrait_icon">
          <img src="../assets/icon.jpeg">
        </div>
        <div>{{ranking1.mb_nickname || '无'}}</div>
        <div>第一名</div>
        <div>
          <button @click="showGiveModal(ranking1.id)" v-show='type === "charm" || type === "gold"'>赠送</button>
        </div>
      </div>
      <div class="portrait_div">
        <div class="portrait_icon">
          <img src="../assets/icon.jpeg">
        </div>
        <div>{{ranking3.mb_nickname || '无'}}</div>
        <div>第三名</div>
        <div>
          <button @click="showGiveModal(ranking3.id)" v-show='type === "charm" || type === "gold"'>赠送</button>
        </div>
      </div>
    </div>

    <div class="rankingList" v-if='rankingOther.length'>
      <ul v-for='(ranking, index ) in rankingOther'>
        <li class="rankingItem">
          <div class="rankingIndex">{{index + 4}}</div>
          <img class="other-icon" src="../assets/icon.jpeg">
          <div class="rankingNickname">{{ranking.mb_nickname}}</div>
          <div class="rankingDistance">距离前一名{{index ? rankingOther[index-1][`mb_${type}`] - ranking[`mb_${type}`] : ranking3[`mb_${type}`] - ranking[`mb_${type}`]}}{{typeName}}</div>
          <button class="raningSend" @click="showGiveModal(ranking.id)" v-show='type === "charm" || type === "gold"'>赠</button>
        </li>
      </ul>
    </div>
    <div class="nav">
      <div class="nav-item" @click="getRanking('gold')">财力</div>
      <div class="nav-item" @click="getRanking('charm')">魅力</div>
      <div class="nav-item" @click="getRanking('power')">战力</div>
    </div>
    <give :visible.sync='show_give_charm' @hide-give= 'show_give_charm = false' ref='give-charm'></give>
    <give-gold :visible.sync='show_give_gold' @hide-give= 'show_give_gold = false' ref='give-gold'></give-gold>
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
    components:{
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
<style>
  .container {
    width: auto;
    margin: 0.3rem;
  }

  .container .portrait {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #ccc;
  }

  .container .portrait .portrait_div {
    width: 32%;
  }

  .container .rankingList {
    text-align: left;
  }

  .container .rankingList span {
    font-size: 20px;
  }

  .container .rankingList ul li {
    list-style: none;
  }

  .portrait_icon img{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.75rem;
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

  .rankingIndex{
    display: inline;
    width: 10%;
    font-size: 20px;
  }

  .rankingNickname{
    display: inline;
    width: 15%;
    font-size: 20px;
    overflow:hidden;
  }

  .rankingDistance{
    display: inline;
     width: 25%;
    font-size: 20px;
    overflow:hidden;
   }

  .rankingSend{
    display: inline;
    width: 10%;
  }

  .other-icon {
    width: 10%;
    height: auto;
  }


</style>

<template>
  <div class="container">
    <header><h1>魅力榜</h1></header>

    <div class="portrait">
      <div class="portrait_div" v-if='ranking2'>
        <div>头像</div>
        <div>{{ranking2.mb_nickname}}</div>
        <div>第二名</div>
        <div>
          <button>赠送</button>
        </div>
      </div>
      <div class="portrait_div" v-if='ranking1'>
        <div>头像</div>
        <div>{{ranking1.mb_nickname}}</div>
        <div>第一名</div>
        <div>
          <button>赠送</button>
        </div>
      </div>
      <div class="portrait_div" v-if='ranking3'>
        <div>头像</div>
        <div>{{ranking3.mb_nickname}}</div>
        <div>第三名</div>
        <div>
          <button>赠送</button>
        </div>
      </div>
    </div>

    <div class="rankingList" v-if='rankingOther.length'>
      <ul v-for='ranking in rankingOther'>
        <li>
          <span>4</span>
          <img src="logo.png"/>
          <span>{{ranking.mb_nickname}}</span>
          <span>距离前一名30000魅力星尘...</span>
          <button>赠</button>
        </li>
      </ul>
    </div>
    <div class="nav">
      <div class="nav-item" @click="getRanking('gold')">财力</div>
      <div class="nav-item" @click="getRanking('charm')">魅力</div>
      <div class="nav-item" @click="getRanking('power')">战力</div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        type:'',
        ranking1: '',
        ranking2: '',
        ranking3: '',
        rankingOther: [],
      }
    },
    methods:{
      getRanking(type){
        this.axios.get(`/user/top/${type}`).then(result => {
          if (result.data && result.data.code === 200) {
            console.log(type)
            this.type = type;
            this.ranking1 = result.data.data[0];
            this.ranking2 = result.data.data[1];
            this.ranking3 = result.data.data[2];
            this.rankingOther = result.data.data.slice(3);
          }
        }).catch(window.alert);
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

  .container .rankingList ul li {
    list-style: none;
  }
</style>

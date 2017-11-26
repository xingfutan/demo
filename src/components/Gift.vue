<template>
  <div class="container">
    <scroller :on-infinite="infinite">
      <div class="title">
        <div class="title-text">兑换礼品</div>
      </div>
      <div class="good-list">
        <div class="good-item" v-for="(good, index) in goods">
          <div class="good-id">{{good.good_id}}</div>
          <div class="good-picture">
            <img class="icon" :src="good.good_picture"/>
          </div>
          <div class="good-info">
            {{good.good_desc}}
          </div>
          <div class="good-button" @click="$router.push('/badge')">兑换</div>
        </div>
      </div>
    </scroller>
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

  .good-list {
    height: auto;
  }

  .good-item {
    color: #ffffff;
    height: 150px;
    border: 1px solid #1DACD9;
    margin-top: 10px;
    line-height: 150px;
  }

  .good-item div {
    display: inline;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .good-picture {
    margin-left: 2%;
    width: 15%;

  }

  .good-picture img{
    vertical-align: middle;
  }

  .good-info {
    margin-left: 2%;
    width: 55%;
    text-align: left;
  }

  .good-button {
    margin-left: 2%;
    margin-right: 2%;
    width: 15%;

  }

  .good-id {
    margin-left: 2%;
    width: 5%;
  }

  .icon {
    height: 80px;
    width: 80px;
  }

</style>
<script>
  export default {
    data () {
      return {
        goods: [],
        page: 0,
      }
    },
    methods: {
      infinite(done){
        if (this.page === null) return done(true)
        this.axios.get('/user/goodsInfo', { params: { page_index: this.page + 1, page_size: 20 } }).then(result => {
          if (result.data && result.data.code === 200) {
            this.goods = this.goods.concat(result.data.data.list)
            this.page += 1
            if (result.data.data.list.length < 10) {
              this.page = null
            }
            done()
          }
        }).catch(window.alert);
      }
    }
  }
</script>

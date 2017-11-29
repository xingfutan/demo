<template>
  <div class="container">
    <scroller :on-infinite="infinite">
      <div class="title">
        <div class="title-text">账单</div>
      </div>
      <div class="bill-list" v-for="(bill, index) in bills">
        <div class="bill-item">
          <div class="bill-icon">
            <img class="icon" src="../assets/a.png"/>
          </div>
          <div class="good-info">
            <div class="bill-desc">{{bill.desc}}</div>
            <div class="bill-date">{{format(bill.time)}}</div>
          </div>
          <div class="bill-num">{{bill[type]}}</div>
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

  .bill-item {
    height: 160px;
    line-height: 160px;
    width: auto;
    line-height: 80px;
    background-color: #231927;
    border-top: 2px solid #03587C;
    color: #ffffff;
  }

  .icon {
    height: 80px;
    width: 80px;
  }

  .bill-icon {
    margin-left: 20px;
    display: inline;
    float: left;
    line-height: 160px;
  }

  .bill-icon img {
    vertical-align: middle;
    border-radius: 40px;
  }

  .good-info {
    display: inline;
    float: left;
    margin-left: 50px;
    margin-top: 20px
  }

  .bill-desc {
    font-weight: bold;
    font-size: 30px;
    height: 40px;
  }

  .bill-time {
    color: gray;
    height: 40px;
  }

  .bill-num {
    margin-right: 30px;
    margin-top: 40px;
    font-size: 40px;
    font-weight: bold;
    display: inline;
    float: right;
  }


</style>
<script>
  export default {
    data () {
      return {
        bills: [],
        page: 0,
        type: ''
      }
    },
    methods: {
      infinite(done){
        if (this.page === null) return done(true)
        this.axios.get('/order/tradeDetail', {
          params: {
            type: this.type,
            page_index: this.page + 1,
            page_size: 20
          }
        }).then(result => {
          if (result.data && result.data.code === 200) {
            this.bills = this.bills.concat(result.data.data.trade_detail)
            this.page += 1
            if (result.data.data.trade_detail.length < 10) {
              this.page = null
            }
            done()
          }
        }).catch(window.alert);
      },
      format(data){
        return this.$moment(data).format('YYYY-MM-DD HH:mm:SS');
      }
    },
    beforeMount(){
      this.type = 'gold'
      if (this.$route.query && this.$route.query.type) {
        this.type = this.$route.query.type
      }
    }
  }
</script>

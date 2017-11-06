<template>
  <div>
    <div class="icon-bar">
      <span>费用规则</span>
      <span>账单记录</span>
    </div>
    <div id='balance' class="info-board">
      <div id='balance-title' class="info-board-title">K币余额</div>
      <div id='balance-count' class="info-board-body">{{balance_count}}</div>
      <div id='balance-time'>消耗星空时间：{{balance_time}}分钟</div>
    </div>
    <div id='financial-ranking' class="info-board">
      <div id='ranking-title' class="info-board-title">财力排行榜</div>
      <div id='ranking-prize' class="info-board-body">{{ranking_prize}}位</div>
      <div id='ranking-more'>查看完整排名</div>
    </div>
    <div class="nav">
      <div class="nav-item" @click="show_charging = true">充值</div>
      <div class="nav-item" @click="show_give = true">赠送</div>
    </div>
    <div class="nav">
      <router-link class="nav-item" to="/charm">魅力</router-link>
      <router-link class="nav-item" to="/badge">徽章</router-link>
    </div>
    <div class="nav">
      <router-link class="nav-item" to="/ranking">排行榜</router-link>
      <router-link class="nav-item" to="/competition">竞猜</router-link>
    </div>

    <div v-show='show_charging'>
      <button id="show-modal">赠送</button>
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  在线充值
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  <div class="give_body_container">
                    <div class="give_body_active">
                      <div class="give_body_div">
                        <div>2000K币</div>
                        <div>200元</div>
                        <div>赠1个月</div>
                        <div>青铜会员</div>
                      </div>
                    </div>
                    <div class="give_body">
                      <div class="give_body_div">
                        <div>4000K币</div>
                        <div>400元</div>
                        <div>赠1个月</div>
                        <div>钻石会员</div>
                      </div>
                    </div>
                    <div class="give_body">
                      <div class="give_body_div">
                        <div>6000K币</div>
                        <div>600元</div>
                        <div>赠1个月</div>
                        <div>王者会员</div>
                      </div>
                    </div>
                  </div>
                  <div class="text_left">
                    <div>王者会员特权：</div>
                    <div>
                      每日获赠50K币，自动发放至会员所在店铺的账户中，可用于现场消费。
                    </div>
                  </div>
                  <div class="text_left">
                    <div>自定义充值金额</div>
                    <input type="text" placeholder="请输入充值金额"/>
                  </div>
                  <div class="text_left">
                    <input type='radio'/>青铜会员
                    <input type='radio'/>钻石会员
                    <input type='radio'/>王者会员
                  </div>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="show_charging = false">
                    确认充值
                  </button>
                </slot>
              </div>

            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-show='show_give'>
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                <slot name="header">
                  赠送魅力星辰
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  <div class="give_body_container">
                    <div class="give_body">
                      <div class="give_body_div">
                        <div><img src="logo.png"/></div>
                        <div>1</div>
                        <div>星尘</div>
                        <div>2k币</div>
                      </div>
                    </div>
                    <div class="give_body">
                      <div class="give_body_div">
                        <div><img src="logo.png"/></div>
                        <div>1</div>
                        <div>星尘</div>
                        <div>2k币</div>
                      </div>
                    </div>
                    <div class="give_body">
                      <div class="give_body_div">
                        <div><img src="logo.png"/></div>
                        <div>1</div>
                        <div>星尘</div>
                        <div>2k币</div>
                      </div>
                    </div>
                    <div class="give_body">
                      <div class="give_body_div">
                        <div><img src="logo.png"/></div>
                        <div>1</div>
                        <div>星尘</div>
                        <div>2k币</div>
                      </div>
                    </div>
                    <div class="give_body">
                      <div class="give_body_div">
                        <div><img src="logo.png"/></div>
                        <div>1</div>
                        <div>星尘</div>
                        <div>2k币</div>
                      </div>
                    </div>
                    <div class="give_body">
                      <div class="give_body_div">
                        <div><img src="logo.png"/></div>
                        <div>1</div>
                        <div>星尘</div>
                        <div>2k币</div>
                      </div>
                    </div>
                  </div>

                  <br>
                  <div>
                    接收人：<input type='text' placeholder="请输入会员卡号">
                    <span>蔡金生</span>
                  </div>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <button class="modal-default-button" @click="show_give =false">
                    确认赠送
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<style>
  .icon-bar {
    text-align: right;
    font-size: 28px;
  }

  .info-board {
    width: auto;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    margin-top: 2rem;
  }

  .info-board-title {
    font-size: 28px;
    text-align: left;
  }

  .info-board-body {
    font-size: 80px;
  }

  #ranking-more {
    margin-top: 0.1rem;
    font-size: 28px;
    text-align: right;
  }

  #balance-time {
    font-size: 28px;
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

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: auto;
    margin: 0.4rem;
    padding: 0.2rem 0.3rem;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-footer {
    margin: 0.2rem 0;
    height: 0.8rem;
    position: relative;
  }

  .modal-default-button {
    float: right;
    line-height: 0.8rem;
    font-size: 0.24rem;
  }

  .give_body_container {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .give_body_container .give_body {
    width: 32%;
    height: 3rem;
    border: 1px solid #ccc;
    margin-bottom: 0.2rem;
  }

  .give_body_container .give_body_active {
    width: 32%;
    height: 3rem;
    border: 2px solid blue;
    margin-bottom: 0.2rem;
  }

  .give_body_container .give_body .give_body_div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-content: space-between;
  }

  .give_body_container .give_body .give_body_div div:first-child {
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 0.56rem;
    font-weight: bold;
  }

  .give_body_container .give_body .give_body_div div:nth-child(4) {

  }

  .give_body_container .give_body_active .give_body_div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-content: space-between;
  }

  .give_body_container .give_body_active .give_body_div div:first-child {
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 0.56rem;
    font-weight: bold;
  }

  .text_left {
    text-align: left;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: auto;
    margin: 0.4rem;
    padding: 0.2rem 0.3rem;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-footer {
    margin: 0.2rem 0;
    height: 0.8rem;
    position: relative;
  }

  .modal-default-button {
    float: right;
    line-height: 0.8rem;
    font-size: 0.24rem;
  }

  .give_body_container {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .give_body_container .give_body {
    width: 32%;
    height: 3rem;
    border: 1px solid #ccc;
    margin-bottom: 0.2rem;
  }

  .give_body_container .give_body_active {
    width: 32%;
    height: 3rem;
    border: 2px solid blue;
    margin-bottom: 0.2rem;
  }

  .give_body_container .give_body .give_body_div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-content: space-between;
  }

  .give_body_container .give_body .give_body_div div:first-child {
    height: 1.4rem;
    display: flex;
  }

  .give_body_container .give_body .give_body_div div:nth-child(4) {
    text-align: right;
    margin-right: 0.2rem;
  }

  .give_body_container .give_body_active .give_body_div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-content: space-between;
  }

  .give_body_container .give_body_active .give_body_div div:first-child {
    height: 1.4rem;
    display: flex;
  }

  .give_body_container .give_body_active .give_body_div div:nth-child(4) {
    text-align: right;
    margin-right: 0.2rem;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        balance_count: '***',
        balance_time: '***',
        ranking_prize: '***',
        show_charging: false,
        show_give: false,
      }
    },
    beforeMount() {
      this.axios.get('/user/gold').then(result => {
        if (result.data && result.data.code === 200) {
          this.balance_count = result.data.data.mb_gold;
          this.balance_time = result.data.data.pay_per_minute;
          this.ranking_prize = result.data.data.rank;
        }
      }).catch(window.alert);
    }
  }
</script>

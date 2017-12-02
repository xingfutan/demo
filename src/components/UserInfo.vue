<template>
  <div v-show='visible'>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                用户信息
              </slot>
              <div class="close-icon" @click="hideModal">
                <img src="../assets/close.png"/>
              </div>
            </div>
            <div class="modal-body">
              <slot name="body">
                <div class="info-group">
                  <div class="info-title">
                    昵称
                  </div>
                  :
                  <div class="info-body">
                    {{user.mb_nickname}}
                  </div>
                </div>
                <div class="info-group">
                  <div class="info-title">
                    性别
                  </div>
                  :
                  <div class="info-body">
                    {{user.mb_sex}}
                  </div>
                </div>
                <div class="info-group">
                  <div class="info-title">
                    头像
                  </div>
                  :
                  <div class="info-body">
                    <img class="icon" :src="user.mb_avatar_url">
                  </div>
                </div>
                <div class="info-group">
                  <div class="info-title">
                    段位
                  </div>
                  :
                  <div class="info-body">
                    {{user.mb_highest_game_lv}}
                  </div>
                </div>
                <div class="info-group">
                  <div class="info-title">
                    财力
                  </div>
                  :
                  <div class="info-body">
                    {{user.mb_gold_heapup}}
                  </div>
                </div>
                <div class="info-group">
                  <div class="info-title">
                    K币
                  </div>
                  :
                  <div class="info-body">
                    {{user.mb_gold}}
                  </div>
                </div>
                <div class="info-group">
                  <div class="info-title">
                    魅力
                  </div>
                  :
                  <div class="info-body">
                    {{user.mb_charm}}
                  </div>
                </div>
                <div class="info-group">
                  <div class="info-title">
                    星尘
                  </div>
                  :
                  <div class="info-body">
                    {{user.mb_stardust}}
                  </div>
                </div>
                <div class="info-group">
                  <div class="info-title">
                    战力
                  </div>
                  :
                  <div class="info-body">
                    {{user.mb_power}}
                  </div>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'userInfo',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      user: {
        type: Object,
        default: {}
      }
    },
    methods: {
      hideModal() {
        this.$emit('hide')
      }
    }
  }
</script>
<style scoped>
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

  .close-icon {
    display: inline;
    float: right;
  }

  .close-icon img {
    width: 40px;
    height: 40px;
  }

  .info-group{
    font-size: 30px;
    height: 80px;
    line-height: 80px;
    text-align: left;
  }

  .info-title{
    display: inline;
  }

  .info-body{
    display: inline;
  }

  .icon{
    vertical-align:middle;
    width: 80px;
    height: 80px;
  }
</style>

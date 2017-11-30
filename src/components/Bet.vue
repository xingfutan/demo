<template>
  <div v-show='visible'>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                竞猜下注
              </slot>
              <div class="close-icon" @click="hideModal">
                <img src="../assets/close.png"/>
              </div>
            </div>
            <div class="modal-body">
              <slot name="body">
                <div>
                  场次：{{s_room_id}}
                </div>
                <div>
                  押注队伍：{{s_team === 'red' ? '红方' : '蓝方'}}
                </div>
                <div class="stake-num">
                  {{s_stake}}
                </div>
                <div class="stake">
                  <div class="stake-btn" @click="s_stake >= 10000 ? s_stake -= 10000 : s_stake = 0">-10000</div>
                  <div class="stake-btn" @click="s_stake >= 100 ? s_stake -= 100 : s_stake = 0">-100</div>
                  <div class="stake-btn" @click="s_stake += 100">+100</div>
                  <div class="stake-btn" @click="s_stake += 10000">+10000</div>
                  </div>
                <br>
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="give">
                  确认下注
                </button>
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
    name: 'bet',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      s_team: {
        type: String
      },
      s_room_id: {
        type: String
      }
    },
    data() {
      return {
        s_stake: 0
      }
    },
    methods: {
      hideModal() {
        this.$emit('hide-give')
      },
      give() {
        const data = {s_team: this.s_team, s_stake: this.s_stake, s_room_id: this.s_room_id}
        this.axios.post(`/user/room/stake`, data).then(result => {
          if (result.data && result.data.code === 200) {
            if(result.data.status === 'OK') window.alert('下注成功')
            else window.alert(result.data.msg)
          }else {
            window.alert(result.data.msg)
          }
          this.hideModal()
        }).catch(window.alert);
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
    margin: 40px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header{
    font-size: 50px;
    font-weight: bold;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  .modal-body {
    margin: 20px 0;
    font-size: 30px;
  }

  .modal-footer {
    margin: 20px 0;
    height: 80px;
    position: relative;
  }

  .modal-default-button {
    float: right;
    line-height: 80px;
    font-size: 24px;
    border: 1px solid gray;
    border-radius: 20px;
  }

  .stake{
    margin-top: 50px;
  }

  .stake-btn{
    font-size: 30px;
    font-weight: bold;
    display: inline-block;
    width: 18%;
    height: 50px;
    line-height: 50px;
    border: 2px solid gray;
    border-radius: 10px;
    margin: 0 10px;
  }

  .stake-num{
    margin-top: 50px;
    font-size: 80px;
    font-weight: bold;
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

  .close-icon {
    display: inline;
    float: right;
  }

  .close-icon img{
    width: 40px;
    height: 40px;
  }
</style>

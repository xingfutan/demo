<template>
  <div v-show='visible'>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                赠送K币
              </slot>
            </div>
            <div class="modal-body">
              <slot name="body">
                <div>
                  k  币：<input type='text' placeholder="请输入K币数量" v-model="kCorn">
                </div>
                <br>
                <div>
                  接收人：<input type='text' placeholder="请输入会员卡号" v-model="member_id" @input="getUserName">
                  <span>{{user_name}}</span>
                </div>
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <button class="modal-default-button" @click="give">
                  确认赠送
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
    name: 'give',
    props: {
      visible: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        kCorn: null,
        user_name: null,
        member_id: null
      }
    },
    methods: {
      hideModal() {
        this.$emit('hide-give')
      },
      getUserName() {
        this.user_name = '';
        if (this.member_id) {
          this.axios.get(`/user/${this.member_id}/nickname`).then(result => {
            if (result.data && result.data.code === 200) {
              if(result.data.data && result.data.data.exist) this.user_name = result.data.data.nickname
              else this.user_name = '用户不存在'
            }
          }).catch(window.alert);
        }
      },
      give() {
        const body = {toUser: this.member_id, gold: this.kCorn}
        if(!body.toUser) return window.alert('请输入赠送用户id')
        if(!body.gold) return window.alert('请输入赠送k币数量')
        this.axios.post(`/user/giveGold`, body).then(result => {
          if (result.data && result.data.code === 200) {
            if(result.data.status === 'OK') window.alert('赠送成功')
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
<style>
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

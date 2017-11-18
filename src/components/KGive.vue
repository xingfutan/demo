<template>
  <div v-show='visible'>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                赠送魅力星辰
              </slot>
              <div class="close-icon" @click="hideModal">
                <img src="../assets/close.png"/>
              </div>
            </div>
            <div class="modal-body">
              <slot name="body">
                <div class="give_body_container">
                  <div v-for='(option, index) in options'
                       v-bind:class="{give_body: !option.onSelect, give_body_active: option.onSelect}"
                       @click="onSelect(index)">
                    <div class="give_body_div">
                      <div><img src="../assets/a.png"/></div>
                      <div>{{option.dust}}</div>
                      <div>星尘</div>
                      <div>{{option.kCorn}}k币</div>
                    </div>
                  </div>
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
        dust: 0,
        kCorn: 0,
        user_name: '',
        member_id: '',
        options: [
          { onSelect: false, dust: 1, kCorn: 2 },
          { onSelect: false, dust: 8, kCorn: 10 },
          { onSelect: false, dust: 45, kCorn: 50 },
          { onSelect: false, dust: 99, kCorn: 99 },
          { onSelect: false, dust: 520, kCorn: 520 },
          { onSelect: false, dust: 1314, kCorn: 1314 }
        ]
      }
    },
    methods: {
      hideModal() {
        this.$emit('hide-give')
      },
      onSelect(j) {
        this.options.forEach((o, i) => {
          if (o.onSelect) {
            this.options[i].onSelect = false;
          }
        })
        this.options[j].onSelect = true;
        this.dust = this.options[j].dust;
        this.kCorn = this.options[j].kCorn;
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
        const body = {toUser: this.member_id, giftId: getGiftId(this.options)}
        if(!body.toUser) return window.alert('请输入赠送用户id')
        if(!body.giftId) return window.alert('请选择对应的礼包')
        this.axios.post(`/user/giveGift`, body).then(result => {
          if (result.data && result.data.code === 200) {
            if(result.data.status === 'OK') window.alert('赠送成功')
            else window.alert(result.data.msg)
          }else {
            window.alert(result.data.msg)
          }
          this.hideModal()
        }).catch(window.alert);
        function getGiftId(options) {
          for (let i = 0; i < options.length; i++){
            if(options[i].onSelect){
              return i + 1;
            }
          }
        }
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
    width: auto;
    border-bottom: 1px solid #ccc;
    font-size: 50px;
    line-height: 40px;
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

  .close-icon {
    display: inline;
    float: right;
   }

  .close-icon img{
    width: 40px;
    height: 40px;
  }
</style>

<template>
  <div class="container">
    <div class="title">
      <div class="title-text">排行榜</div>
    </div>
    <div class="icon-bar">
      <div class="icon-bar-item icon-bar-title">K币余额</div>
      <div class="icon-bar-item icon-bar-more">投注记录</div>
    </div>
    <div class="info-board">
      <div class="info-board-body">40000</div>
    </div>
    <div>
      <div class="vs">
        <div class="one">
          <div class="title">蓝方</div>
          <div class="list">
            <ul>
              <li><img src="../assets/icon.jpeg"/>白金</li>
              <li><img src="../assets/icon.jpeg"/>白金</li>
              <li><img src="../assets/icon.jpeg"/>白金</li>
              <li><img src="../assets/icon.jpeg"/>白金</li>
              <li><img src="../assets/icon.jpeg"/>白金</li>
            </ul>
          </div>
          <div class="margin30">1.5倍</div>
          <div class="result">蓝方胜</div>
        </div>
        <div class="two">
          <div class="title">正在进行中</div>
          <div class="time">08:00</div>
          <div class="vs_word">V.S</div>
        </div>
        <div class="three">
          <div class="title">红方</div>
          <div class="list">
            <ul>
              <li>白金<img src="../assets/icon.jpeg"/></li>
              <li>白金<img src="../assets/icon.jpeg"/></li>
              <li>白金<img src="../assets/icon.jpeg"/></li>
              <li>白金<img src="../assets/icon.jpeg"/></li>
              <li>白金<img src="../assets/icon.jpeg"/></li>
            </ul>
          </div>
          <div class="margin30">1.2倍</div>
          <div class="result">红方输</div>
        </div>
      </div>
    </div>

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

  .icon-bar {
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    color: #fff;
    background-color: #231927;
    border-top:2px solid #03587C;
    border-bottom:2px solid #03587C;
  }

  .icon-bar-item {
    display: inline;
  }

  .icon-bar-title {
    float: left;
    margin-left: 30px;
  }

  .icon-bar-more {
    float: right;
    margin-right: 30px;
  }

  .info-board {
    height: 240px;
    width: auto;
    color: #fff;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 100px;
    font-weight:bold;
    border-bottom:2px solid #03587C;
  }

  .info-board-body {
    font-size: 80px;
  }

  .info-board-unit {
    color: #1DACD9;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    position: relative;
    border:2px solid #1DACD9;
    top: -45%;
    left: 55%;
    border-radius: 20px;
  }

  .info-board-more {
    font-size: 30px;
  }

  .container .vs {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .container .vs .one {
    margin: 0.3rem 0;
  }
  .container .vs .one .title{
    color: blue;
    height: 1rem;
  }
  .container .vs .one .list ul li{
    list-style: none;
    margin-left: -0.48rem;
    line-height: 0.8rem;
  }
  .container .vs .one .list img {

  }
  .container .vs .one .result {
    border: 1px solid #ccc;
    border-radius: 0.08rem;
    padding: 0.2rem 0.5rem;
  }
  .container .vs .two {
    margin: 0.3rem 0;
  }
  .container .vs .two .time{
    text-align: center;
  }
  .container .vs .two .vs_word {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .container .vs .three {
    margin: 0.3rem 0;
  }
  .container .vs .three .title{
    color: red;
    height: 1rem;
  }
  .container .vs .three .result {
    border: 1px solid #ccc;
    border-radius: 0.08rem;
    padding: 0.2rem 0.5rem;
  }
  .container .vs .three .list ul li{
    list-style: none;
    margin-left: -0.48rem;
    line-height: 0.8rem;
  }
  .container .margin30{
    margin: 0.3rem 0;
  }
</style>

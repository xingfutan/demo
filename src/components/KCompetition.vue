<template>
  <div class="container">
    <header>
      <div>K币余额</div>
      <div class="money">40000</div>
    </header>

    <div>
      <div class="vs">
        <div class="one">
          <div class="title">蓝方</div>
          <div class="list">
            <ul>
              <li><img src="logo.png"/>白金</li>
              <li><img src="logo.png"/>白金</li>
              <li><img src="logo.png"/>白金</li>
              <li><img src="logo.png"/>白金</li>
              <li><img src="logo.png"/>白金</li>
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
              <li>白金<img src="logo.png"/></li>
              <li>白金<img src="logo.png"/></li>
              <li>白金<img src="logo.png"/></li>
              <li>白金<img src="logo.png"/></li>
              <li>白金<img src="logo.png"/></li>
            </ul>
          </div>
          <div class="margin30">1.2倍</div>
          <div class="result">红方输</div>
        </div>
      </div>
    </div>

  </div>
</template>
<style>
  .container {
    width: auto;
    margin: 0.3rem;
    text-align: left;
  }
  header .money {
    font-size: 0.56rem;
    font-weight: bold;
    line-height: 1rem;
    border-bottom: 1px solid #ccc;
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

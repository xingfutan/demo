<template>
  <div class="container">
    <header><h1>魅力榜</h1></header>

    <div class="portrait">
      <div class="portrait_div">
        <div>头像</div>
        <div>名字</div>
        <div>第二名</div>
        <div><button>赠送</button></div>
      </div>
      <div class="portrait_div">
        <div>头像</div>
        <div>名字</div>
        <div>第一名</div>
        <div><button>赠送</button></div>
      </div>
      <div class="portrait_div">
        <div>头像</div>
        <div>名字</div>
        <div>第三名</div>
        <div><button>赠送</button></div>
      </div>
    </div>

    <div class="rankingList">
      <ul>
        <li>
          <span>4</span>
          <img src= "a.png" />
          <span>距离前一名30000魅力星尘...</span>
          <button>赠</button>
        </li>
        <li>
          <span>5</span>
          <img src= "a.png" />
          <span>距离前一名30000魅力星尘...</span>
          <button>赠</button>
        </li>
      </ul>
    </div>

  </div>
</template>
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
  .container .portrait .portrait_div{
    width: 32%;
  }
  .container .rankingList{
    text-align: left;
  }
  .container .rankingList ul li{
    list-style: none;
  }
</style>

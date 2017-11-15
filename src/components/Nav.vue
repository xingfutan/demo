<template>
  <div class="nav">
    <router-link class="nav-item" to="/charm">魅力</router-link>
    <router-link class="nav-item" to="/management">K币</router-link>
    <router-link class="nav-item" to="/badge">勋章</router-link>
    <router-link class="nav-item" to="/ranking">排行榜</router-link>
    <router-link class="nav-item" to="/competition">竞猜</router-link>
  </div>
</template>
<style scoped>
  .nav {
    height: 80px;
    line-height: 80px;
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight:bold;
  }

  .nav-item {
    height: 260px;
    line-height: 260px;
    font-size: 60px;
    width: 100%;
    display: inline;
    float:left;
    text-decoration: none;
    border: 2px solid #000000;

  }

  .nav-item-left {
    background-color: #1C3183;
  }

  .nav-item-right {
    background-color: #1B215D;
  }

  .nav-item:link, .nav-item:visited {
    background-color: white;
    color: black;
  }

  .nav-item:hover, .nav-item:active {
    color: white;
    background-color: #C8C6C6;
  }
</style>
<script>
</script>

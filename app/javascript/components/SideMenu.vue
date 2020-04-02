<template>
  <div class="side--menu" v-bind:class="{'menu-open': open}">
    <div class="side--menu--top">
      <div class="hide-btn">
        <i class="fas fa-times fa-lg"></i>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<style scoped>
  .side--menu{
    position: absolute;
    top: 0;
    right: -33%;
    z-index: 2;
    height: 100vh;
    width: 33%;
    background-color: #f5fcc1;
    margin-left: auto;
  }
  .side--menu--top{
    height: 70px;
    line-height: 70px;
  }
  .hide-btn{
    text-align: right;
    margin-right: 30px;
  }
  .menu-open{
    right: -33%;
    transition: .4s;
  }
</style>
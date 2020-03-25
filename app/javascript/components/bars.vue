<template>
  <!-- <div class="bars-component"> -->
    <!-- <sideMenu menu-open="open"></sideMenu> -->
    <div class="header__menu--bars" @click="openSideMenu">
      <i class="fas fa-bars fa-lg"></i>
    </div>
  <!-- </div> -->
</template>

<script>
import { BarsMenu } from "../packs/main"
console.log(BarsMenu)

export default {
  methods: {
    openSideMenu: function(){
      BarsMenu.$emit("openMenu")
    }
  }
}
</script>

<style scoped>
  .header__menu--bars{
    display: none;
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
  }

@media screen and (max-width: 959px) {
  .header__menu--bars{
    display: block;
  }
}

</style>
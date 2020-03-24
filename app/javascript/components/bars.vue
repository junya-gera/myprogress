<template>
  <div class="header__menu--bars">
    <i class="fas fa-bars fa-lg"></i>
  </div>
</template>

<script>
export default {
  
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
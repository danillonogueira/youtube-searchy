<template>

  <div class="display--home-group">
    <span class="display--home__title">{{ title }}</span>
    <div class="spinner" v-show="false"></div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      title: 'searchy',
    }
  }
}

</script>

<style scoped>

@import "../styles/home.css";

</style>
<template>

  <div class="display">  
    <transition name="router-anim" enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>  
  </div>
  
</template>

<script>

export default {}

</script>

<style scoped>

@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';
@import '../styles/display.css';

</style>
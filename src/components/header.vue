<template>

  <div class="header">
    <div class="logo-group">
        <div class="logo-group__logo">
          <i class="fab fa-youtube"></i>
        </div>            
        <span class="logo-group__title">{{ title }}</span>
    </div>
  </div>
  
</template>

<script>

export default {
  data () {
    return {
      title: 'searchy'
    }
  },
}

</script>

<style scoped>

@import "../styles/header.css";

</style>
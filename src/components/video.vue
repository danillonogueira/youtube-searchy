<template>

  <div class="frame-group">
      
    <div class="frame-group__video-wrapper">
      <iframe class="frame-group__video" v-bind:src="`https://www.youtube.com/embed/${id}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div class="frame-group__title">
      <span>{{ video.snippet.title }}</span>
    </div>
    
    <div class="frame-group__views">
      <span>{{ formatNumber(videoStats.viewCount) }} views</span>
    </div>

    <hr />
    
    <div class="frame-group__description">
      <span>{{ video.snippet.description }}</span>
    </div>     

    <div class="frame-group__navigation">
      <button class="frame-group__btn" v-on:click="routeBack">
        <i class="fas fa-arrow-left"></i>
      </button>     
    </div>

  </div>

</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id,
      video: this.$store.getters.getVideo,
      videoStats: this.$store.getters.getVideoStats
    }
  },
  methods: {
    routeBack() {
      window.history.back();
    },
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
}

</script>

<style scoped>

@import "../styles/video.css";

</style>
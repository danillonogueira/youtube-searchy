<template>
  
  <div class="display__results">
    
    <div class="video-container" v-for="video in list" :key="video.index">        
              
      <div class="video-card">
        
        <div class="video-card__header">
          <div class="video-card__header-top">
            <div class="video-card__icon-wrapper">
              <i class="fas  fa-play-circle  video-card__icon" v-on:click="selectVideo(video, video.id.videoId)"></i>
            </div>
            <div class="video-card__info">
              <span class="video-card__title" v-on:click="selectVideo(video, video.id.videoId)">{{ video.snippet.title | formatTitle }}</span>
              <span class="video-card__channel">{{ video.snippet.channelTitle | formatChannel }}</span>           
            </div>              
          </div>
          <span class="video-card__description">{{ video.snippet.description }}</span>
        </div>

        <div class="video-card__thumbnail-wrapper" v-on:click="selectVideo(video, video.id.videoId)">          
          <img class="video-card__thumbnail" :src="video.snippet.thumbnails.high.url">
        </div>
                  
      </div>
    
    </div>
    
  </div>
  
</template>

<script>

export default {
  computed: {
    list() {
      return this.$store.getters.getList;
    }
  },
  methods: {
    selectVideo(video, id) {
      this.$http.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyC-kb72FZNPNGyCtrpxnBl-UsEw1-xGfc0`)
      .then(response => response.json())
      .then(data => {
        this.$store.commit('storeSelectedVideo', video);
        this.$store.commit('storeSelectedVideoStats', data.items[0].statistics);     
      })
      .then(() => this.$router.push(`/list/${id}`))
      .catch(() => {
        this.$router.push('/empty');
      });      
    }
  },
  filters: {
    formatTitle(title) {
      if (title.length > 47) {
        return `${title.slice(0, 46)}...`;
      } 
      return title;
    },
    formatChannel(channel) {
      if (channel.length > 25) {
        return `${channel.slice(0, 24)}...`;
      } 
      return channel;
    }
  }
}

</script>

<style scoped>

@import "../styles/list.css";

</style>
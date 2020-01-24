<template>

  <div class="input-group">
    <input type="text" class="input-group__input" placeholder="Search for a video here!" spellcheck="false" 
    v-model="inputValue" v-on:keyup.enter="getVideos(inputValue)">
    <button class="input-group__btn" v-on:click="getVideos(inputValue)" v-bind:class="{'input-group__btn--active': getBtnState()}">
      <i class="fas  fa-search  input-group__icon"></i>
    </button>    
  </div>
  
</template>

<script>

export default {
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    getVideos(input) {
      if (input !== '') {
        this.$http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${input}&type=video&key=AIzaSyDR3bjsBTUZpcPAYU1GP1GATl6DgFp9ee0`)
          .then(response => response.json())
          .then(data => {
            (data.items.length !== 0)
              ? this.$store.commit('storeList', data.items)
              : this.reject();                            
          })
          .then(() => {       
            this.$router.push('/list');    
          })
          .catch(() => {
            this.$router.push('/empty');
          })
      }      
    },
    getBtnState() {
      if (this.inputValue !== '') {
        return true;
      }
    }
  } 
}

</script>

<style scoped>

@import "../styles/input.css";

</style>
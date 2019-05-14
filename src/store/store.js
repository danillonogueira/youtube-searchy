import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    videos: null,
    selectedVideo: null,
    selectedVideoStats: null,
  },
  getters: {
    getList: state => {
      return state.videos;
    },
    getVideo: state => {
      return state.selectedVideo;
    },
    getVideoStats: state => {
      return state.selectedVideoStats;
    }
  },
  mutations: {
    storeList: (state, data) => {
      state.videos = data;
    },
    storeSelectedVideoStats: (state, data) => {
      state.selectedVideoStats = data;
    },
    storeSelectedVideo: (state, data) => {
      state.selectedVideo = data;
    }
  }
});
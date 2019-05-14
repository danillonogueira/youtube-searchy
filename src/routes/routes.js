import List from '../components/list.vue';
import Video from '../components/video.vue';
import Home from '../components/home-state.vue';
import Empty from '../components/empty-state.vue';

export default [
  {
    path: '/',
    component: Home
  },
  { 
    path: '/list', 
    component: List
  },
  {
    path: '/list/:id',
    component: Video
  },
  {
    path: '/empty',
    component: Empty
  }
]
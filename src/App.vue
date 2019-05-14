<template>

  <div id ="app" class="container">
    <app-header></app-header>
    <app-input></app-input>
    <app-display></app-display>
  </div>

</template>

<script>

import Header from './components/header.vue';
import Input from './components/input.vue';
import Display from './components/display.vue';

export default {
  components: {
    'app-header': Header,
    'app-input': Input,
    'app-display': Display
  }
}

</script>

<style>

@import "./styles/container.css";

</style>
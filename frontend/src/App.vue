<template>
  <div class="w-full" id="app">
    <div id="nav" class="w-full border-b py-4">
      <div class="w-2/3 mx-auto flex justify-between">
        <router-link class="mx-4" to="/">Home</router-link>
        <router-link class="mx-4" to="/track">Track</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import './assets/index.css';

export default {

}
</script>

<style>
</style>

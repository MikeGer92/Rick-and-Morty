<script setup>

</script>

<template>
  <header class="header">
    <h1>The Rick and Morty API</h1>
  </header>
  <div class="main">
    <div class="maingrid__left"></div>
    <div class="maingrid__right"></div>
  </div>

</template>

<script setup>
import {usePersonsStore } from './stores/PersonsStore'
const personStore = usePersonsStore()

</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
  padding: 100px 0;
  color: rgb(32, 35, 41);
  border: none;
  font-weight: 900;
  font-size: 5.625rem;
}
.main {
  display: flex;
}

</style>

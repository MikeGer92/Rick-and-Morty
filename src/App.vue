<script setup>

</script>

<template>
  <header class="header">
    <h1>The Rick and Morty API</h1>
  </header>
  <div class="main">
    <PersonCard v-for="person of personStore.persons" :key="person.id" :person="person"></PersonCard>
    <div class="main__left"></div>
    <div class="main__right"></div>
    <!-- <PersonCard :person="personStore.person"></PersonCard> -->
  </div>

</template>

<script setup>
import PersonCard from './components/PersonCard.vue'
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
  width: 80%;
  height: 500px;
  margin: 0 auto;
}

</style>

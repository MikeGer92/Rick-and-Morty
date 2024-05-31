<script setup>

</script>

<template>
  <header class="header">
    <h1>The Rick and Morty API</h1>
  </header>
  <div class="main">
    <PersonCard 
      v-for="person of personStore.persons" 
      :key="person.id" 
      :person="person"
      :episod="getEpisodName(`${person.episode}`)">
    </PersonCard>
    <div class="main__left"></div>
    <div class="main__right"></div>
    <!-- <PersonCard :person="personStore.person"></PersonCard> -->
  </div>

</template>

<script setup>
import PersonCard from './components/PersonCard.vue'
import {usePersonsStore } from './stores/PersonsStore'
import {useEpisodsStore } from './stores/EpisodsStore'

const personStore = usePersonsStore()
const episodStore = useEpisodsStore()

const getEpisodName = ((adr) => {
  const url = adr
  const strs = url.split('/')
  const id = strs.at(-1)
  console.log(id)
  let episodsAll = episodStore.episods
  let name = episodsAll.find(ep => ep.id == id).name
  console.log(name)
  return name
}) 



</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
  padding: 20px 0;
  color: rgb(32, 35, 41);
  border: none;
  font-weight: 900;
  font-size: 5.625rem;
}
.main {
  display: flex;
  justify-content: center;
  margin: 20px;
}

</style>

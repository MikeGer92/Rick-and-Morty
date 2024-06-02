<script setup>

</script>

<template>
  <header class="header">
    <h1>The Rick and Morty API</h1>
  </header>
  <Filters :statusPage="paginationStatusChange"></Filters>
  <div v-if="personStore.loading">Загрузка...</div>
  <div v-else>
    <div class="main">
      <PersonCard 
        v-for="person of personStore.persons" 
        :key="person.id" 
        :person="person"
        :episod="getEpisodName(`${person.episode[0]}`)">
      </PersonCard>
    </div>
    <Paginate 
      :getPage="paginationChange"
    />
  </div>

</template>

<script setup>
import PersonCard from './components/PersonCard.vue'
import Paginate from './components/Paginate.vue'
import Filters from './components/Filters.vue'
import { usePersonsStore } from './stores/PersonsStore'
import { ref, onBeforeMount } from 'vue'

const personStore = usePersonsStore()

const getApi = () => {
  personStore.getPagePersons(1)
}

onBeforeMount(() => {
  getApi()
})

const getEpisodName = (adr) => {
  const url = adr
  const strs = url.split('/')
  const id = strs.at(-1)
  const name = personStore.episodes.find(el => el.id == id)
  if(!name) {
    return 'unknown'
  }
  return name.name
}

function paginationChange(data) {
  personStore.setCurrentPage(data.pageNumber)
  personStore.getPagePersons(data.pageNumber)
}
function paginationStatusChange(data) {
  return data.pageNumber
}


</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
  padding: 20px 0;
  color: rgb(32, 35, 41);
  border: none;
  font-weight: 900;
  font-size: 3.625rem;
}
.main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
}

</style>

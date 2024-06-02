<script setup>

</script>

<template>
  <header class="header">
    <h1>The Rick and Morty API</h1>
  </header>
  <div class="manage">
    <button
    @click="getApi()"
    >Применить</button>
    <span v-if="selected"> Фильтрация: {{ selected }}</span>
    <span v-else> Выбрать фильтр</span>

    <select v-model="selected" value="selected">
      <option v-for="option in filterOptions" :key="option">
        {{ option }}
      </option>
    </select>
    <input v-show="selected=='по имени'" value="Введите имя">
    <span v-if="selectedStatus&&selected!='по имени'"> Выбран статус: {{ selectedStatus }}</span>
    <span v-else v-show="selected=='по статусу'"> Выбрать статус</span>
    <select 
      v-model="selectedStatus" 
      v-show="selected=='по статусу'" 
    >
      <option v-for="status in statusValue" :key="status">
        {{ status }}
      </option>
    </select>
  </div>
  <div class="main">
    <PersonCard 
      v-for="person of personStore.persons" 
      :key="person.id" 
      :person="person"
      :episod="getEpisodName(`${person.episode[0]}`)">
    </PersonCard>
  </div>
  <Paginate></Paginate>

</template>

<script setup>
import PersonCard from './components/PersonCard.vue'
import Paginate from './components/Paginate.vue'
import { usePersonsStore } from './stores/PersonsStore'
import { ref, onBeforeMount } from 'vue'


const page = ref(1)

const selected = ref('')
const selectedStatus = ref('')

const personStore = usePersonsStore()

const getApi = () => {
  personStore.getAllPersons()
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
  // console.log(Promise.resolve(name))
}

const filterOptions = ref(['по имени', 'по статусу'])
const statusValue = ref(['Alive', 'Dead', 'unknown'])

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
.manage {
  display: flex;
  justify-content: center;
  & span {
    margin: 0 20px;
  }
  & select {
    width: 200px;
    height: 29.25px;
    font-size: 16px;
    color: black;
    margin: 0 20px;
  }
}

</style>

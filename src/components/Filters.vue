<template lang="">
<div class="manage">
    <button
    @click="getFilter"
    >Применить</button>
    <span v-if="selected"> Фильтрация: {{ selected }}</span>
    <span v-else> Выбрать фильтр</span>

    <select v-model="selected" value="selected">
      <option v-for="option in filterOptions" :key="option">
        {{ option }}
      </option>
    </select>
    <input 
      v-show="selected=='по имени'" 
      value="Введите имя"
      v-model='personName'
    >
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
</template>
<script setup>

import { ref } from 'vue'
import { usePersonsStore } from '../stores/PersonsStore'
const props = defineProps({
  statusPage: {
    type: Function,
    required: true,
  },
})

const personStore = usePersonsStore()

const selected = ref('')
const selectedStatus = ref('')
const personName = ref('')

const filterOptions = ref(['по имени', 'по статусу'])
const statusValue = ref(['Alive', 'Dead', 'unknown'])


const getFilter = () => {
  if (selected.value == 'по статусу') {
    personStore.setCurrentPage(1)
    personStore.getStutusPersons(1, selectedStatus.value)
  } else if (selected.value == 'по имени') {
    personStore.setCurrentPage(1)
    personStore.getNamePersons(1, personName.value)
  } else {
  }
}

</script>


<style lang="scss">
.manage {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
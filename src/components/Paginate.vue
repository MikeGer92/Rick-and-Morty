<template>
  <div class="paginate">
     <PaginationBar 
      v-model="pageNumberOperate" 
      :total-row="totalRow"
      :page-size-menu="false"
      :info="false"
      :first="true"
      :last="true"
      @change="getPage"
     />
  </div>

</template>

<script setup>
import { computed, ref, watch } from 'vue' 
import { usePersonsStore } from '../stores/PersonsStore'

const props = defineProps({
  getPage: {
    type: Function,
    required: true,
  },
})

const personStore = usePersonsStore()
let pageNumberOperate = ref(1)
const currPage = computed(() => personStore.currPage)
const maxPage = computed(() => personStore.maxPage);
const totalRow = computed(() => maxPage.value * 10);

watch(currPage, () => {
  if (currPage.value === 1) {
    pageNumberOperate = currPage.value
  }
})

</script>
<style lang="scss">
.paginate {
  display: flex;
  justify-content: space-around;
}
  
</style>
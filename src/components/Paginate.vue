<template>
  <div class="paginate">
     <PaginationBar 
     v-model="pageNumberOperate" 
    :total-row="totalRow"
    :page-size-menu="false"
    :pageSize="pageSize"
    :info="false"
    :first="true"
    :last="true"
     />
  </div>

</template>

<script setup>
import { ref } from 'vue'

const pageNumberOperate = ref(5)
const totalRow = ref(100)
// const pageSize = ref(20)

// function goToInputPage () {
//   if (!inputPageNumber.value) return

//   const newPageNumber = Number(inputPageNumber.value)

//   if (window.isNaN(newPageNumber)) {
//     inputPageNumber.value = ''
//     return
//   }
//   pageNumberOperate.value = newPageNumber
// }


</script>
<style lang="scss">
.paginate {
  display: flex;
  justify-content: space-around;
}
  
</style>
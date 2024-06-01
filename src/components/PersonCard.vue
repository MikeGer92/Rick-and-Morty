<template >
  <div class="card">
    <img class="card__image" :src="`${ person.image}`" :alt="`${ person.name }`">
    <div class="card__info">
       <div class="card__info_name">{{ person.name }}</div>
       <div class="card__info_options">
        <div class="card__info_options-point"></div>
        <div class="card__info_options-status">{{ person.status }}</div>
        <span> - </span>
        <div class="card__info_options-spec">{{ person.species }}</div>
       </div>
       <span class="card__info_span">Last known location:</span>
       <div class="card__info_span-name">{{ person.location.name }}</div>
        <span class="card__info_span">First seen in:</span>
       <div class="card__info_span-name">{{ episod }}</div>

    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  person: {
    type: Object,
    required: true,
    default: () => { }
  },
  episod: {
    type: String,
    required: true,
    default: () => ''
  }
})

</script>
<style lang="scss">
.card {
  width: 600px;
  height: 220px;
  display: flex;
  margin: 20px;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  &__image {
    display: flex;
  }
  &__info {
    flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    &_name {
      font-size: 1.25rem;
      font-weight: 800;
      line-height: 1.1;
    }
    &_options {
      display: flex;
      align-items: center;
      &-point {
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: rgb(85, 204, 68);
      }
      &-status {
        padding: 0 10px;
      }
      & span {
        padding: 0 5px;
      }
      &-spec {
        padding: 0 10px;
      }
    }
    &_span {
      color: rgb(158, 158, 158);
      &-name {
        &:hover {
          color: rgb(255, 152, 0);      
        }
       
      }
    }
  }
}
</style>
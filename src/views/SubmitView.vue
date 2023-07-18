<template>
  <div class="about">
    <h1>This is an Submit view page</h1>
    <div v-for="book in getBooks" :key="book.id">
      <h5>{{ book.name }}</h5>
      <h6>{{ book.discription }}</h6>

    </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default{
  computed:{
    ...mapGetters([
    'getBooks'
    ])
  }
}

</script>

<style>

</style>

<script setup>
import containerItem from './containerItem.vue'
import { mapGetters } from 'vuex'
</script>

<template>
  <RouterLink to="/SubmitView">Submit</RouterLink>
  <div v-for="todo in getBooks" :key="todo.id">
  <containerItem :postTitle='todo'></containerItem>

</div>
</template>
<script>
export default {
  data(){
    return{
      title:"learning vuex"
    }
  },
  computed:{
    ...mapGetters([
    'doneTodos',
    'capitalTods' ,
    'getBooks'
    ])
  }
}

</script>

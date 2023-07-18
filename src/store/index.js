// Create a new store instance.
import { createStore } from 'vuex'
const store = createStore({
    state () {
      return {
        books: [
          {
            name: "Vue2",
            discription: "Learn Vue from vuejs website",
            id: 1,
            done: true
          },
          {
            name: "Vue3",
            discription: "Learn Vue3 from vuejs website",
            id: 2,
            done: true
          },
        ],
      }
    },
    getters: {
      getBooks(state){
         return state.books
      }
    },
    mutations: {
      changestatueOfPrevious(state,payload){
           for(var i=0;i<state.books.length;i++){
            if(state.books[i].id == payload.id){
              state.books[i].done = true
            }
           }
      },
      addBook(state,payload){
        console.log("payload",payload);
        console.log("state before push",state.books);
         state.books.push(payload)
        console.log("state after push",state.books);
      },
      removeBook(state,payload){
        state.books.splice(state.books.indexOf(payload), 1);
       
      }
    }
  })

  export default store
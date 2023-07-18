<template>
  <div>
    <input v-model="propsObj.name" class="mr" :disabled="propsObj.done" :id="propsObj.id">
   
    <input v-model="propsObj.discription" class="mr" :disabled="propsObj.done" :id="propsObj.id">

    <button @click="increment()" class="mr">Add</button>
    <button @click="decrement(propsObj)" class="mr">Delete</button>
   <p v-if="isErrorName"> {{ this.isErrorMsg }}</p>
   <p v-if="isErrordiscription"> {{ this.isErrorMsgdiscription }}</p>
  </div>
</template>
<script>
export default {
  props: ['postTitle'],
  data(){
    return{
       propsObj:{},
       isErrorName:false,
       isErrorMsg:"",
       isErrordiscription:false,
       isErrorMsgdiscription:""
    }
  },
  created(){
   this.propsObj = this.postTitle
   
  },
  methods: {

  validation(){
    if(this.postTitle.name == ""){
          this.isErrorName =true
          this.isErrorMsg = "please fill firstname"
          return true
    }else{
      this.isErrorName = false

    }  
    
    if(this.postTitle.discription == ""){
          this.isErrordiscription =true
          this.isErrorMsgdiscription = "please fill discription "
          return true
    }else{
      this.isErrordiscription = false
      
    }      

  } , 
  increment() {

    if(this.validation()){
       return
    }

    
    var id = this.postTitle.id + 1

     var obj = {
        name:this.postTitle.name,
        discription:this.postTitle.discription,
        id:id,
        done:false
     }
      this.$store.commit('addBook',obj)
      var preObj = this.propsObj
     
      this.$store.commit('changestatueOfPrevious',preObj)
  },
  decrement(obj){
   
     this.$store.commit('removeBook',obj);
  }
  }
}
</script>
<style scoped>

.mr{
  margin: 10px;
}

.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>

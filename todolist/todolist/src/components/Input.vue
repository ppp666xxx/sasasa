<template >
  <div>
      <input type="text" v-model="inputValue"> 
      <button @click="add">add</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
 data(){
   return{
     inputValue:''
   }
 },
 methods: {
   ...mapActions(['UpdateListAction']),
   add(){
     let url='http://47.95.207.1:8080/v1/matter/add'
     this.$axios.post(url,{matter:this.inputValue})
     .then((data)=>{
       this.UpdateListAction()
     })
     
   }
 },
}
</script>
<template >
  <div>
      <ul>
        <li v-for = "(item,index) in list" :key='index'>
          {{item.matter}}
          <span v-if='item.state'>已完成</span>
          <button v-else @click="finish(item._id)"> 完成</button>
        </li>
      </ul> 
  </div>
</template>
<script>
// import  qs from  'qs'
import {mapGetters,mapActions} from 'vuex'
export default {
   computed: {
     ...mapGetters(['list'])
   },
   methods:{
     ...mapActions(['UpdateListAction']),
     finish(_id){
       let url='http://47.95.207.1:8080/v1/matter/update'
       this.$axios.post(url,{_id})
       .then((data)=>{
         this.UpdateListAction()
       })
     }
   },
   created() {
      this.UpdateListAction()
   },
}
</script>

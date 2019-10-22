import Vue from 'vue'
import Vuex from 'vuex'
import  axios from  '../axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[1,2,3],
    mode:-1//全不  1//已完成  -1 //未完成
  },
  getters:{
      list(state){
        let data=[]
        switch (state.mode) {
          case 0:
            data=state.list
            break;
          case 1:
              data=state.list.filter((item)=>{
                return item.state
              })
              break;
              case -1:
                data=state.list.filter((item)=>{
                  return !item.state
                })
                break;
          default:
            break;
        }
        return data
      }
  },
  mutations: {
    UpdateList(state,params){
      state.list=params
    },
    AddList(state,params){
      state.list.push(params)
    }
  },
  actions: {
    UpdateListAction({commit},params){
      let url='http://47.95.207.1:8080/v1/matter/get'
      let uid='5dae758927f7f15ff26e64c0'
       axios.post(url,{uid})
       .then((data)=>{
         // console.log('then',data)
         commit('UpdateList',data.list)
       }) 
    }
  }
})

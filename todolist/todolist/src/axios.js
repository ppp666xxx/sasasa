import  axios from  'axios'
import  qs  from  'qs'
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  //统一添加token 处理
  let  token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZGFlNzU4OTI3ZjdmMTVmZjI2ZTY0YzAiLCJpYXQiOjE1NzE3MTQ0NDksImV4cCI6MTU3MTcxODA0OX0.y-ZWZ8nqHK2KZybZ7kRT9IIgXQ5plpmMO-3zDwR8RS8'
  console.log('请求拦截器',config)
  let data=config.data 
  data.token=token
  data.uid='5dae758927f7f15ff26e64c0'
  config.data=qs.stringify(data)
  console.log(typeof config.data)
  // config.data='hehe=123'
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  console.log('响应拦截器',response)
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios
import axios from 'axios'

export default function request(config){
    const instance = axios.create({
      baseURL:"http://127.0.0.1:3000",
      timeout:5000
    })


    //发送request的拦截
    instance.interceptors.request.use(request=>{
      console.log("已经拦截到用户请求")
      return request
    },error=>{
      console.log("用户请求发送失败")
    })

    //服务器响应结果的拦截
    instance.interceptors.response.use(response=>{
      console.log("已经拦截到服务器响应")
      return response.data
    },error=>{
      console.log("用户请求发送失败")
    })

    return instance(config)
}
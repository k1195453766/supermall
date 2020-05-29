// 网络请求的封装
import axios from 'axios'

export default function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 请求拦截
    instance.interceptors.request.use(config => {
        // 这里可以处理：
        // 1. 给config中的数据添加一个其他的元素或者修改一些其他的数据
        // 2.在请求之前界面显示一个loading的效果，也可以在这里加
        // 3.在某些请求当中需要携带一些特殊的参数（如：token），也可以在这里验证


        // 此处必须把config返回，否则的化请求得不到返回结果
        return config;
    }, error => {
        console.log(error)
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    // 这里 instance本身返回一个 promise ，然后把这个promise对象的返回值return返回给调用的地方，调用的地方就可以通过.then的形式获取返回值
    return instance(config)

    // return new Promise((resolve, reject) => {
    //     // 设置全局的变量（这里不用，需要设置自己的变量）
    //     //axios.defaults.baseURL = 'http://123.207.32.32:8000'
    //     //axios.defaults.timeout = 5000
    //     const instance = axios.create({
    //         baseURL: 'http://123.207.32.32:8000',
    //         timeout: 5000
    //     })

    //     instance(config).then(res => {
    //         resolve(res)
    //     }).catch(e => {
    //         reject(e)
    //     })
    // })
}
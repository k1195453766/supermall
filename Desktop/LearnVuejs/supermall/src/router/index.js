import Vue from 'vue'
import Router from 'vue-router'

// 懒加载页面
const Home = () => import('../views/home/home')
const Type = () => import('../views/type/type')
const Cart = () => import('../views/cart/cart')
const My = () => import('../views/my/my')


Vue.use(Router)

// 解决两次访问相同路由地址报错(push)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 解决两次访问相同路由地址报错(replace)
Router.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/type',
    component: Type
  }, {
    path: '/cart',
    component: Cart
  }, {
    path: '/my',
    component: My
  }
]

export default new Router({
  routes,
  mode: 'history'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './api/mock'
import Cookie from 'js-cookie';

Vue.use(ElementUI);

Vue.config.productionTip = false

//添加全局前置守卫
router.beforeEach((to, from, next) => {
  //判断token是否存在
  const token = Cookie.get('token')

  //token不存在，说明当前用户未登录，应该跳转至登录页
  if(!token && to.name !== 'login') {
    next({name: 'login'})
  } else if(token && to.name === 'login') {       //token存在，说明当前用户登录，应该跳转至首页
    next({name: 'home'})
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

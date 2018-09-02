import Vue from 'vue'
import Router from 'vue-router'
import ShoppingCar from '../pages/ShoppingCar.vue'
import Detail from '../pages/Detail.vue'
import My from '../pages/my/my.vue';
import Home from '../pages/home/home.vue';



Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/shoppingCar',
      component: ShoppingCar
    },
    {

      path: '/detail/:url',
      component: Detail
    },

    {

      path: '/my',
      component: My
    },

    {
      path: '*',
      component: Home
    },
  ]
})

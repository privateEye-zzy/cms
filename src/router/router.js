import Vue from 'vue'
import Router from 'vue-router'
import user from 'utils/user'
Vue.use(Router)
const router = new Router({
  routes: [
  	{
      path: '/login',
      name: 'login',
      component: () => import('pages/login/login.vue')
    },
    {
      path: '/',
      name: '/',
      component: () => import('pages/list/list.vue')
    },
    {
      path: '/proAdd',
      name: 'proAdd',
      component: () => import('pages/list/proAdd.vue')
    },
    {
      path: '/proEdit',
      name: 'proEdit',
      component: () => import('pages/list/proEdit.vue')
    },
    {
      path: '/list2',
      name: 'list2',
      component: () => import('pages/list2/list2.vue')
    },
    {
      path: '/list3',
      name: 'list3',
      component: () => import('pages/list3/list3.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('pages/form/form.vue')
    },
  ]
})
router.beforeEach((to, from, next) => {
  let nameList = router.options.routes.map(item => item.name)
  if( nameList.includes(to.name) ) {
  if( to.name === 'login'){
  	user.clear()
  }
	if( to.name !== 'login' && !user.isLogin()){
		return next('/login')
	}
	window.scrollTo(0, 0)
	next()
  }else {
    // 错误页面跳转
    // router.replace('/error/route')
    return next('/login')
  }
})

export default router

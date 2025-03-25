import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ForgetView from './views/ForgetView.vue'
import DashboardView from './views/DashboardView.vue'
// import MailView from './views/MailView.vue'
import AppEmailBody from './components/AppEmailBody.vue'
import NotFoundPage from './views/NotFoundPage.vue'

const routes = [
  { path: '/login', component: LoginView, alias: '/' },
  { path: '/forget', component: ForgetView, meta: { cantEnter: true } },
  {
    path: '/dashboard',
    component: DashboardView,
    name: 'home',
    beforeEnter () {
      console.log('before enter')
    }
  },
  {
    path: '/mail',
    component: () => import('./views/MailView.vue'),
    children: [
      { path: ':mailId?', component: AppEmailBody, props: true }
    ],
    name: 'email'
  },
  { path: '/:notFound(.*)', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

// Router guards
router.beforeEach((to, from, next) => {
  console.log('before each')
  if (to.meta.cantEnter) {
    next({
      name: 'home'
    })
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // Используется, например, для ведения статистики по входу на определенную страницу
})

export default router

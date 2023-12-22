import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/QuestionnaireContent',
      name: 'QuestionnaireContent',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuestionnaireContent.vue')
    },
    {
      path: '/ConfirmationPage',
      name: 'ConfirmationPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ConfirmationPage.vue')
    },
    {
      path: '/QuestionnaireConfirmation',
      name: 'QuestionnaireConfirmation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuestionnaireConfirmation.vue')
    },
    {
      path: '/AddNewInformation',
      name: 'AddNewInformation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      redirect: '/AddNewInformation/Questionnaire',
      component: () => import('../views/AddNewInformation.vue'),
      children:[
        {
          path:'Questionnaire',
          component: () => import('../views/Questionnaire.vue'),
        },
        {
          path:'Topic',
          component: () => import('../views/Topic.vue'),
        },
      ]
    }
  ]
})

export default router

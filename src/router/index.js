import { createRouter, createWebHistory } from 'vue-router'
import CnxPage from '../views/CnxPage.vue'
import ScorePageAdmin from '../views/Admin/ScorePageAdmin.vue'
import ScorePageUser from '../views/User/ScorePageUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {path: '/',name: 'cnx',component: CnxPage},
      {path: '/score-admin',name: 'score-admin',component: ScorePageAdmin},
      {path: '/score-user',name: 'score-user',component: ScorePageUser}
  ]
})

export default router

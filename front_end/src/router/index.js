import { createRouter, createWebHistory } from 'vue-router';

import CnxPage from '@views/CnxPage.view.vue';

// Imports Admin
import AccueilPageAdmin from '@views/Admin/AccueilPageAdmin.view.vue';
import JeuxPageAdmin from '@views/Admin/JeuxPageAdmin.view.vue';
import EquipesPageAdmin from '@views/Admin/EquipesPageAdmin.view.vue';
import PlanningPageAdmin from '@views/Admin/PlanningPageAdmin.view.vue';
import ClassementPageAdmin from '@views/Admin/ClassementPageAdmin.view.vue';

// Imports User
import AccueilPageUser from '@views/User/AccueilPageUser.view.vue';
import JeuxPageUser from '@views/User/JeuxPageUser.view.vue';
import EquipesPageUser from '@views/User/EquipesPageUser.view.vue';
import PlanningPageUser from '@views/User/PlanningPageUser.view.vue';
import ClassementPageUser from '@views/User/ClassementPageUser.view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {path: '/',name: 'cnx',component: CnxPage},

      // Routes Admin
      {path: '/accueil-admin',name: 'accueil-admin',component: AccueilPageAdmin},
      {path: '/jeux-admin',name: 'jeux-admin',component: JeuxPageAdmin},
      {path: '/equipes-admin',name: 'equipes-admin',component: EquipesPageAdmin},
      {path: '/planning-admin',name: 'planning-admin',component: PlanningPageAdmin},
      {path: '/classement-admin',name: 'classement-admin',component: ClassementPageAdmin},
      
      // Routes User
      {path: '/accueil-user',name: 'accueil-user',component: AccueilPageUser},
      {path: '/jeux-user',name: 'jeux-user',component: JeuxPageUser},
      {path: '/equipes-user',name: 'equipes-user',component: EquipesPageUser},
      {path: '/planning-user',name: 'planning-user',component: PlanningPageUser},
      {path: '/classement-user',name: 'classement-user',component: ClassementPageUser},
  ]
})

export default router

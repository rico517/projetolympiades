import { createRouter, createWebHistory } from 'vue-router';
import NomPages from '../enums/NomPages.enum';
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
      {path: '/',name: NomPages.connexion,component: CnxPage},
      // Routes Admin
      {path: '/accueil-admin',name: NomPages.accueilAdmin,component: AccueilPageAdmin},
      {path: '/jeux-admin',name: NomPages.jeuxAdmin,component: JeuxPageAdmin},
      {path: '/equipes-admin',name: NomPages.equipesAdmin,component: EquipesPageAdmin},
      {path: '/planning-admin',name: NomPages.planningAdmin,component: PlanningPageAdmin},
      {path: '/classement-admin',name: NomPages.classementAdmin,component: ClassementPageAdmin},
      {path: '/jeu-template',name: NomPages.jeuxTemplateAdmin,component: JeuxTemplatePageAdmin}, // page template des jeux
      
      // Routes User
      {path: '/accueil-user',name: NomPages.accueilUser,component: AccueilPageUser},
      {path: '/jeux-user',name: NomPages.jeuxUser,component: JeuxPageUser},
      {path: '/equipes-user',name: NomPages.equipesUser,component: EquipesPageUser},
      {path: '/planning-user',name: NomPages.planningUser,component: PlanningPageUser},
      {path: '/classement-user',name: NomPages.classementUser,component: ClassementPageUser},
  ]
})

export default router

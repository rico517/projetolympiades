import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import NomPages from '../enums/NomPages.enum';
import CnxPage from '@views/CnxPage.view.vue';
import ErrorPage from '@views/Error.view.vue';

// Imports Admin
import AccueilPageAdmin from '@views/Admin/AccueilPageAdmin.view.vue';
import JeuxPageAdmin from '@views/Admin/JeuxPageAdmin.view.vue';
import EquipesPageAdmin from '@views/Admin/EquipesPageAdmin.view.vue';
import PlanningPageAdmin from '@views/Admin/PlanningPageAdmin.view.vue';
import ClassementPageAdmin from '@views/Admin/ClassementPageAdmin.view.vue';
import JeuxTemplatePageAdmin from '@views/Admin/JeuxTemplatePageAdminView.vue';

// Imports User
import AccueilPageUser from '@views/User/AccueilPageUser.view.vue';
import JeuxPageUser from '@views/User/JeuxPageUser.view.vue';
import EquipesPageUser from '@views/User/EquipesPageUser.view.vue';
import PlanningPageUser from '@views/User/PlanningPageUser.view.vue';
import ClassementPageUser from '@views/User/ClassementPageUser.view.vue';

const roles = {
  ADMIN: 2,
  USER: 1,
  AFK: 0,
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {path: '/',name: NomPages.connexion,component: CnxPage, meta: {requiredRole: roles.AFK,},},
      // Routes Admin
      {path: '/accueil-admin',name: NomPages.accueilAdmin,component: AccueilPageAdmin, meta: {requiredRole: roles.ADMIN,},},
      {path: '/jeux-admin',name: NomPages.jeuxAdmin,component: JeuxPageAdmin, meta: {requiredRole: roles.ADMIN,},},
      {path: '/equipes-admin',name: NomPages.equipesAdmin,component: EquipesPageAdmin, meta: {requiredRole: roles.ADMIN,},},
      {path: '/planning-admin',name: NomPages.planningAdmin,component: PlanningPageAdmin, meta: {requiredRole: roles.ADMIN,},},
      {path: '/classement-admin',name: NomPages.classementAdmin,component: ClassementPageAdmin, meta: {requiredRole: roles.ADMIN,},},
      {path: '/jeu-template',name: NomPages.jeuxTemplateAdmin,component: JeuxTemplatePageAdmin, meta: {requiredRole: roles.ADMIN,},}, // page template des jeux
      
      // Routes User
      {path: '/accueil-user',name: NomPages.accueilUser,component: AccueilPageUser, meta: {requiredRole: roles.USER,},},
      {path: '/jeux-user',name: NomPages.jeuxUser,component: JeuxPageUser, meta: {requiredRole: roles.USER,},},
      {path: '/equipes-user',name: NomPages.equipesUser,component: EquipesPageUser, meta: {requiredRole: roles.USER,},},
      {path: '/planning-user',name: NomPages.planningUser,component: PlanningPageUser, meta: {requiredRole: roles.USER,},},
      {path: '/classement-user',name: NomPages.classementUser,component: ClassementPageUser, meta: {requiredRole: roles.USER,},},

      {path: '/erreur',name: NomPages.erreur,component: ErrorPage,},
  ]
});

// router.beforeEach((to,from) =>  {
//   const requiredRole = to.meta.requiredRole;
//   const niveauCnx = store.state.niveauCnx;

//   if (requiredRole && requiredRole != niveauCnx) {
//     if(requiredRole == 1){
//       return router.push({ name: NomPages.accueilUser });
//     } 
//     else if (requiredRole == 2){
//       return router.push({ name: NomPages.accueilAdmin });
//     }
//     else if (requiredRole == 0){
//       return router.push({ name: NomPages.connexion });
//     }   
//   }

//   // if(requiredRole == undefined) {
//   //   return router.push({ name: NomPages.erreur });
//   // }
// })

export default router

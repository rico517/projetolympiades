import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';
import NomPages from '../enums/NomPages.enum';
import Roles from '../enums/Roles.enum';
import CnxPage from '@views/CnxPage.view.vue';
import ErreurPage from '@views/Erreur.view.vue';

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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {path: '/',name: NomPages.connexion,component: CnxPage, meta: {requiredRole: Roles.AFK,},},
      // Routes Admin
      {path: '/accueil-admin',name: NomPages.accueilAdmin,component: AccueilPageAdmin, meta: {requiredRole: Roles.ADMIN,},},
      {path: '/jeux-admin',name: NomPages.jeuxAdmin,component: JeuxPageAdmin, meta: {requiredRole: Roles.ADMIN,},},
      {path: '/equipes-admin',name: NomPages.equipesAdmin,component: EquipesPageAdmin, meta: {requiredRole: Roles.ADMIN,},},
      {path: '/planning-admin',name: NomPages.planningAdmin,component: PlanningPageAdmin, meta: {requiredRole: Roles.ADMIN,},},
      {path: '/classement-admin',name: NomPages.classementAdmin,component: ClassementPageAdmin, meta: {requiredRole: Roles.ADMIN,},},
      {path: '/jeu-template/:idJeu',name: NomPages.jeuxTemplateAdmin,component: JeuxTemplatePageAdmin, meta: {requiredRole: Roles.ADMIN,}, props:true}, // page template des jeux
      
      // Routes User
      {path: '/accueil-user',name: NomPages.accueilUser,component: AccueilPageUser, meta: {requiredRole: Roles.USER,},},
      {path: '/jeux-user',name: NomPages.jeuxUser,component: JeuxPageUser, meta: {requiredRole: Roles.USER,},},
      {path: '/equipes-user',name: NomPages.equipesUser,component: EquipesPageUser, meta: {requiredRole: Roles.USER,},},
      {path: '/planning-user',name: NomPages.planningUser,component: PlanningPageUser, meta: {requiredRole: Roles.USER,},},
      {path: '/classement-user',name: NomPages.classementUser,component: ClassementPageUser, meta: {requiredRole: Roles.USER,},},

      {path: '/:pathMatch(.*)*',name: NomPages.erreur ,component: ErreurPage,},
  ]
});

// Parametrer les changements de pages
router.beforeEach((to,from) =>  {
  const requiredRole = to.meta.requiredRole;
  const niveauCnx = store.state.niveauCnx;

  // Detecter si l'utilisateur essaie de se rendre sur une page ou il n'est pas autorise
  if (requiredRole && requiredRole != niveauCnx) {
    // Rediriger un simple utilisateur 
    if(niveauCnx == 1){
      return router.push({ name: NomPages.accueilUser });
    } 
    // Rediriger un admin
    else if (niveauCnx == 2){
      return router.push({ name: NomPages.accueilAdmin });
    }
    // Rediriger un utilisateur non connecte
    else if (niveauCnx == 0){
      return router.push({ name: NomPages.connexion });
    }   
  }
})

export default router

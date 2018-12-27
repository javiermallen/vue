import Vue from 'vue';
import Router from 'vue-router';

import Inicio from '@/pages/Inicio';
// import Admin from '@/pages/Admin';
import Carrito from '@/pages/Carrito';

// Componentes de Admin
import Index from '@/pages/admin/Index';
import Nuevo from '@/pages/admin/Nuevo';
import Productos from '@/pages/admin/Products';
import Editar from '@/pages/admin/Editar';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    },
    {
      path: '/carrito',
      name: 'Carrito',
      component: Carrito,
    },
    {
      path: '/admin',
      name: 'Admin',
      // Ruta del padre que ya es un componente
      component: Index,
      // Rutas de los hijos
      children: [
        {
          path: 'nuevo',
          name: 'Nuevo',
          component: Nuevo,
        },
        {
          path: 'nuevo',
          name: 'Nuevo',
          component: Nuevo,
        },
        {
          path: '',
          name: 'Productos',
          component: Productos,
        },
        {
          path: 'editar/:id',
          name: 'Editar',
          component: Editar,
        },
      ],
    },

  ],
});

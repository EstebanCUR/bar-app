import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./pages/client/enter-code/enter-code.module').then(m=> m.EnterCodeModule)
  },
  { path: 'menu',
    loadChildren: () => import('./pages/client/my-menu/my-menu.module').then(m=> m.MyMenuModule)
  },
  { path: 'my-order',
    loadChildren: () => import('./pages/client/my-order/my-order.module').then(m=> m.MyOrderModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './pages/console/console.component';
import { StoreComponent } from './pages/store/store.component';

const routes: Routes = [
  {
    path: 'console',
    component: ConsoleComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: '',
    redirectTo: '/console',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

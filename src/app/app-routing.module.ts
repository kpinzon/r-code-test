import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './pages/accounts/accounts.component';

const routes: Routes = [
  {
    path: 'accounts', component: AccountsComponent,
  },
  {
    path: '', redirectTo: '/accounts', pathMatch: 'full',
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

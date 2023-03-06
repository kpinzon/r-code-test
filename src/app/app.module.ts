import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AccountsComponent } from './pages/accounts/accounts.component';
import { AccountWithdrawalComponent } from './shared/widgets/account-withdrawal/account-withdrawal.component';
import { AccountDepositComponent } from './shared/widgets/account-deposit/account-deposit.component';
import { AccountViewComponent } from './shared/widgets/account-view/account-view.component';

// services
import { AccountService } from './services/account.service';

// Angular material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

const widgets = [
  AccountWithdrawalComponent,
  AccountViewComponent,
  AccountDepositComponent
];

const components = [
  AccountsComponent,
  ...widgets,
];

const services = [
  AccountService,
];

const material = [
  MatButtonModule,
  MatInputModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...material,
    ReactiveFormsModule,
  ],
  providers: [
    ...services,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

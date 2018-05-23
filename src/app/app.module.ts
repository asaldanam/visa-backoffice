import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DesktopComponent } from './components/core/desktop/desktop.component';
import { LoginComponent } from './components/core/login/login.component';
import { NavigationComponent } from './components/core/navigation/navigation.component';
import { FilterComponent } from './components/core/filter/filter.component';
import { LoadingComponent } from './components/core/loading/loading.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { OrdersComponent } from './components/orders/orders.component';
import { VisasComponent } from './components/visas/visas.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { NewOrderBreakdownComponent } from './components/new-order-breakdown/new-order-breakdown.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { VisaDetailComponent } from './components/visa-detail/visa-detail.component';
import { UsersImportComponent } from './components/users-import/users-import.component';
import { SettingsComponent } from './components/settings/settings.component';

import { MNeworderExitComponent } from './components/modals/m-neworder-exit/m-neworder-exit.component';
import { MNeworderSaveComponent } from './components/modals/m-neworder-save/m-neworder-save.component';
import { MVisaEditComponent } from './components/modals/m-visa-edit/m-visa-edit.component';
import { MBreakdownComponent } from './components/modals/m-breakdown/m-breakdown.component';
import { MCommunicationComponent } from './components/modals/m-communication/m-communication.component';

import { AgencyConfigService } from './services/agency-config.service';
import { LocationService } from './services/location.service';
import { CommunicationsComponent } from './components/core/communications/communications.component';




//Routes
const appRoutes: Routes = [
  { path: 'orders', component: OrdersComponent, data: {title: 'Pedidos'}},
  { path: 'visas', component: VisasComponent, data: {title: 'Visados'}},
  { path: 'new-order', component: NewOrderComponent, data: {title: 'Nuevo pedido'}},
  { path: 'new-order-breakdown', component: NewOrderBreakdownComponent, data: {title: 'Nuevo pedido'}},
  { path: 'order-detail', component: OrderDetailComponent, data: {title: 'PXT1113ES'}},
  { path: 'visa-detail', component: VisaDetailComponent, data: {title: 'PXT1113ES1'}},
  { path: 'users-import', component: UsersImportComponent, data: {title: 'Importar usuarios'}},
  { path: 'settings', component: SettingsComponent, data: {title: 'Ajustes'}},
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    NavigationComponent,
    NewOrderComponent,
    OrdersComponent,
    VisasComponent,
    LoadingComponent,
    FilterComponent,
    MNeworderExitComponent,
    MNeworderSaveComponent,
    MVisaEditComponent,
    MBreakdownComponent,
    NewOrderBreakdownComponent,
    OrderDetailComponent,
    VisaDetailComponent,
    MCommunicationComponent,
    UsersImportComponent,
    SettingsComponent,
    LoginComponent,
    CommunicationsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [
    AgencyConfigService,
    LocationService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

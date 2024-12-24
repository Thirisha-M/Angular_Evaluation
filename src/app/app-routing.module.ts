import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreManagementComponent } from './store-management/store-management.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'order',component:OrderComponent},
  {path:'login',component:LoginComponent},
  {path:'store',component:StoreManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

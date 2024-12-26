import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreManagementComponent } from './store-management/store-management.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { IndividualaddtocartComponent } from './individualaddtocart/individualaddtocart.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreManagementComponent,
    LoginComponent,
    HomeComponent,
    OrderComponent,
    AdminComponent,
    IndividualaddtocartComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

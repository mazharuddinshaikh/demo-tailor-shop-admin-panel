import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DtsHomeComponent } from './dts-home/dts-home.component';
import { DtsHeaderComponent } from './dts-header/dts-header.component';
import { DtsFooterComponent } from './dts-footer/dts-footer.component';
import { DtsFilterComponent } from './dts-filter/dts-filter.component';
import { DtsMainComponent } from './dts-main/dts-main.component';
import { DtsProductComponent } from './dts-product/dts-product.component';
import { DtsProductDetailComponent } from './dts-product-detail/dts-product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { DtsSigninComponent } from './dts-signin/dts-signin.component';

const routes: Routes = [
  {path: 'home', component: DtsHomeComponent},
  {path: 'productDetail', component: DtsProductDetailComponent},
  {path: '', component: DtsSigninComponent}


];

@NgModule({
  
  declarations: [
    AppComponent,
    DtsHomeComponent,
    DtsHeaderComponent,
    DtsFooterComponent,
    DtsFilterComponent,
    DtsMainComponent,
    DtsProductComponent,
    DtsProductDetailComponent,
    DtsSigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

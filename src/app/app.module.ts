import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { CommonComponentsModule } from './common-components/common-components.module';
import { MainPageComponent } from './features/main-page/main-page.component';
// import { AuthGuard} from './auth/service/auth.Guard'
@NgModule({
  declarations: [AppComponent, LoginComponent, MainPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonComponentsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

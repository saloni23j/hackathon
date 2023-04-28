import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common-components/header/header.component';
import { SidebarComponent } from './common-components/sidebar/sidebar.component';
import { LoginComponent } from './features/login/login.component';
import { MainPageComponent } from './features/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'mainpage', component:MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

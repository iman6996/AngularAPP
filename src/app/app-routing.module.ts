import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleryComponent } from './galery/galery.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'galery', component:GaleryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

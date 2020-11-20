import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleryComponent } from './galery/galery.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'galery', component:GaleryComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

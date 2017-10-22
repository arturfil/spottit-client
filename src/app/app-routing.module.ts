import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import services

//import components
import { IndexComponent } from './pages/index/index.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { SpotsListComponent } from './pages/spots-list/spots-list.component';


const routes: Routes = [
  {path: '', component: IndexComponent },
  {path: 'signup', component: SignUpComponent },
  {path: 'login', component: LoginComponent },
  {path: 'spots', component: SpotsListComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

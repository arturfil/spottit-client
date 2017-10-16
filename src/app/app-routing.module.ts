import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import services

//import components
import { IndexComponent } from './pages/index/index.component';


const routes: Routes = [
  {path: '', component: IndexComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/signup/singup.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'singup', component: SingupComponent},
  {path: '', component: HomePageComponent},
  {
    path: "coordinator",
    loadChildren: "./modules/coordinator/coordinator.module#CoordinatorModule"
  },
  {
    path: "student",
    loadChildren: "./modules/student/student.module#StudentModule"
  },
  {
    path: "supervisor",
    loadChildren: "./modules/supervisor/supervisor.module#SupervisorModule"
  },
  {
    path: "opponent",
    loadChildren: "./modules/opponent/opponent.module#OpponentModule"
  },
  {
    path: "reader",
    loadChildren: "./modules/reader/reader.module#ReaderModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

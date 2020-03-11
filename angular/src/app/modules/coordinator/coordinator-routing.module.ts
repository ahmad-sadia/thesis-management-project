import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinatorComponent } from './coordinator.component';
import { UsersComponent } from './components/users/users.component';
import {PlansComponent} from "./components/plans/plans.component";
import {DescriptionsComponent} from "./components/descriptions/descriptions.component";
import {FinalReportsComponent} from "./components/final-reports/final-reports.component";
import {RolesComponent} from "./components/roles/roles.component";
import {DeadlinesComponent} from "./components/deadlines/deadlines.component";
import {SupervisorListComponent} from "./components/supervisor-list/supervisor-list.component";
import {StudentListComponent} from "./components/supervisor-list/components/student-list/student-list.component";


const routes: Routes = [
  {
    
    path: '',
    component: CoordinatorComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'descriptions',
    component: DescriptionsComponent
  },
  {
    path: 'plans',
    component: PlansComponent
  },
  {
    path: 'finals',
    component: FinalReportsComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'deadlines',
    component: DeadlinesComponent
  },

  {
    path: 'supervisors',
    component: SupervisorListComponent
  },
  {
    path: 'supervisors/:id/students',
    component: StudentListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinatorRoutingModule { }

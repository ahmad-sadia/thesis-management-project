import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SupervisorComponent} from './supervisor.component';
import {ConfirmsComponent} from "./components/confirms/confirms.component";
import {PlansComponent} from "./components/plans/plans.component";
import {AssesmentsComponent} from "./components/assesments/assesments.component";

const routes: Routes = [
  {
    path: '',
    component: SupervisorComponent
  },
  {
    path: 'confirms',
    component: ConfirmsComponent
  },
  {
    path: 'plans',
    component: PlansComponent
  },
  {
    path: 'assessments',
    component: AssesmentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule {
}

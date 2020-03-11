import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student.component';
import {SupervisorComponent} from './components/supervisor/supervisor.component';
import {DescriptionComponent} from "./components/description/description.component";
import {PlanComponent} from "./components/plan/plan.component";
import {ReportComponent} from "./components/report/report.component";
import {FinalComponent} from "./components/final/final.component";

const routes: Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'description',
    component: DescriptionComponent
  },
  {
    path: 'final',
    component: FinalComponent
  },
  {
    path: 'plan',
    component: PlanComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'supervisor',
    component: SupervisorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}

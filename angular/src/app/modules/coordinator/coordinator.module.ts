import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoordinatorRoutingModule} from './coordinator-routing.module';
import {CoordinatorComponent} from './coordinator.component';
import {UsersComponent} from './components/users/users.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddComponent} from "./components/users/components/add/add.component";
import {SharedModule} from "../../shared.module";
import {EditComponent} from "./components/users/components/edit/edit.component";
import {DescriptionsComponent} from './components/descriptions/descriptions.component';
import {PlansComponent} from './components/plans/plans.component';
import {FinalReportsComponent} from './components/final-reports/final-reports.component';
import {DocumentService} from "../../services/document/document.service";
import {DocumentsService} from "../../services/document/documents.service";
import {GradePassComponent} from "./components/grade-pass/grade-pass.component";
import {RolesComponent} from './components/roles/roles.component';
import {GradeNumComponent} from './components/final-reports/grade-num/grade-num.component';
import {SetRolesComponent} from './components/roles/set-roles/set-roles.component';
import {DeadlinesComponent} from './components/deadlines/deadlines.component';
import {SubmissionsEditComponent} from './components/deadlines/edit/submissions-edit.component';
import {SupervisorListComponent} from './components/supervisor-list/supervisor-list.component';
import {StudentListComponent} from './components/supervisor-list/components/student-list/student-list.component';
import {SubmissionsAddComponent} from "./components/deadlines/add/submissions-add.component";


@NgModule({
  declarations: [
    CoordinatorComponent,
    UsersComponent,
    AddComponent,
    EditComponent,
    DescriptionsComponent,
    PlansComponent,
    FinalReportsComponent,
    GradePassComponent,
    RolesComponent,
    GradeNumComponent,
    SetRolesComponent,
    DeadlinesComponent,
    SubmissionsEditComponent,
    SupervisorListComponent,
    StudentListComponent,
    SubmissionsAddComponent,
  ],
  providers: [
    DocumentService,
    DocumentsService,
  ],
  imports: [
    CommonModule,
    CoordinatorRoutingModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CoordinatorModule {
}

import {NgModule} from '@angular/core';
import {StudentComponent} from './student.component';
import {DocumentSubmitComponent} from '../../components/document-submit/document-submit.component';
import {SupervisorComponent} from './components/supervisor/supervisor.component';
import {UsersService} from "../../services/user/users.service";
import {DocumentService} from "../../services/document/document.service";
import {SharedModule} from "../../shared.module";
import {StudentRoutingModule} from "./student-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {DescriptionComponent} from "./components/description/description.component";
import { PlanComponent } from './components/plan/plan.component';
import { ReportComponent } from './components/report/report.component';
import { FinalComponent } from './components/final/final.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { SupervisorService } from 'src/app/services/user/supervisor.service';

@NgModule({
  declarations: [
    StudentComponent,
    DocumentSubmitComponent,
    DescriptionComponent,
    SupervisorComponent,
    PlanComponent,
    ReportComponent,
    FinalComponent,
    FeedbacksComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MDBBootstrapModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
    StudentRoutingModule,
  ],
  providers: [
    SupervisorService,
    UsersService,
    DocumentService
  ],
  exports: [
    DocumentSubmitComponent
  ],
  bootstrap: [
    StudentComponent,
  ]
})
export class StudentModule {
}

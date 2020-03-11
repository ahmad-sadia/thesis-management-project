import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SupervisorRoutingModule} from './supervisor-routing.module';
import {SupervisorComponent} from './supervisor.component';
import {SharedModule} from "../../shared.module";
import {ButtonsModule, CardsFreeModule, MDBBootstrapModule, TableModule, WavesModule} from "angular-bootstrap-md";
import {ConfirmsComponent} from './components/confirms/confirms.component';
import {PlansComponent} from './components/plans/plans.component';
import {AssesmentsComponent} from './components/assesments/assesments.component';
import {StudentModule} from "../student/student.module";
import {SetConfirmsComponent} from './components/confirms/set-confirms/set-confirms.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FeedbackSubmitComponent} from "../../components/feedback-submit/feedback-submit.component";

@NgModule({
  declarations: [SupervisorComponent,
    ConfirmsComponent,
    PlansComponent, AssesmentsComponent,
    SetConfirmsComponent,
    FeedbackSubmitComponent,
  ],
  imports: [
    CommonModule,
    SupervisorRoutingModule,
    SharedModule,
    CardsFreeModule,
    ButtonsModule,
    WavesModule,
    TableModule,
    StudentModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
  ]
})
export class SupervisorModule {
}

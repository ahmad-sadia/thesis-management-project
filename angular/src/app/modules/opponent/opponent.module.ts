import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpponentRoutingModule } from './opponent-routing.module';
import { OpponentComponent } from './opponent.component';
import {ButtonsModule, CardsFreeModule, TableModule, WavesModule} from "angular-bootstrap-md";
import {SharedModule} from "../../shared.module";
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import {StudentModule} from "../student/student.module";

@NgModule({
  declarations: [OpponentComponent, FeedbacksComponent],
  imports: [
    CommonModule,
    OpponentRoutingModule,
    CardsFreeModule,
    ButtonsModule,
    WavesModule,
    SharedModule,
    StudentModule,
    TableModule
  ]
})
export class OpponentModule { }

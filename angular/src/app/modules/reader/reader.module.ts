import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReaderRoutingModule } from './reader-routing.module';
import { ReaderComponent } from './reader.component';
import {ButtonsModule, CardsFreeModule, MDBBootstrapModule, TableModule, WavesModule} from "angular-bootstrap-md";
import {SharedModule} from "../../shared.module";
import { BiddingsComponent } from './components/biddings/biddings.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { FinalEvaluationComponent } from './components/final-evaluation/final-evaluation.component';
import { SetBiddingComponent } from './components/biddings/set-bidding/set-bidding.component';
import {DocumentService} from "../../services/document/document.service";
import {DocumentsService} from "../../services/document/documents.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoordinatorRoutingModule} from "../coordinator/coordinator-routing.module";
import {StudentModule} from "../student/student.module";

@NgModule({
  declarations: [ReaderComponent, BiddingsComponent, FeedbacksComponent, FinalEvaluationComponent, SetBiddingComponent],
  providers: [
    DocumentService,
    DocumentsService,
  ],
  imports: [
    CommonModule,
    ReaderRoutingModule,
    CardsFreeModule,
    SharedModule,
    ButtonsModule,
    WavesModule,
    TableModule,
    ReactiveFormsModule,
    CommonModule,
    MDBBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    StudentModule
  ]
})
export class ReaderModule { }

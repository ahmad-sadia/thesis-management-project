import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReaderComponent } from './reader.component';
import {BiddingsComponent} from "./components/biddings/biddings.component";
import {FeedbacksComponent} from "./components/feedbacks/feedbacks.component";
import {FinalEvaluationComponent} from "./components/final-evaluation/final-evaluation.component";

const routes: Routes = [
  {
  path: '',
  component: ReaderComponent
},

  {
    path: 'bid',
    component: BiddingsComponent
  },
  {
    path: 'feedback',
    component: FeedbacksComponent
  },
  {
    path: 'final',
    component: FinalEvaluationComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReaderRoutingModule { }

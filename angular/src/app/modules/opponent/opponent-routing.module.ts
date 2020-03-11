import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpponentComponent } from './opponent.component';
import {FeedbacksComponent} from "./components/feedbacks/feedbacks.component";

const routes: Routes = [
  {
  path: '',
  component: OpponentComponent
},
  {
    path: 'feedback',
    component: FeedbacksComponent
  }
,];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpponentRoutingModule { }

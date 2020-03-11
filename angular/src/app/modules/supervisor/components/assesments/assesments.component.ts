import {Component, OnInit, ViewChild} from '@angular/core';
import {Document} from "../../../../models/document";
import {MdbTableDirective} from "angular-bootstrap-md";
import {FormGroup} from "@angular/forms";
import {DocumentsService} from "../../../../services/document/documents.service";
import {DocumentService} from "../../../../services/document/document.service";
import {FeedbacksService} from "../../../../services/feedbacks/feedbacks.service";

@Component({
  selector: 'app-assesments',
  templateUrl: './assesments.component.html',
  styleUrls: ['./assesments.component.scss']
})
export class AssesmentsComponent implements OnInit {

  documents: Document[] = [];

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("feedbackSubmit") feedbackSubmit;
  form: FormGroup;
  error = null;
  working = false;

  elements: any = [
    {name: 'Status', value: 'Not submitted'},
    {name: 'Deadline', value: '-'},
    {name: 'File', value: '-'},
    {name: 'Evaluation', value: '-'},
  ];

  constructor(
    private documentsService: DocumentsService,
    private feedbackService: FeedbacksService,
  ) {
  }


  ngOnInit() {
    this.get();
  }

  add(document) {
    this.documents.push(document);
  }

  get() {
    this.documentsService.get({type: 4})
      .subscribe(
        (data) => {
          this.documents = data;
        }, (error) => {

        });
  }

  grade(document) {

  }

  openFeedbackSubmitComponent(item) {
    this.feedbackSubmit.show(item);
  }

  feedbackSubmitted(document) {
    this.elements[0].value = 'Submitted';
    this.elements[2].value = document.title;
  }


}

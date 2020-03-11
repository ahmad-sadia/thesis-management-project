import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DocumentsService} from "../../../../services/document/documents.service";
import {DocumentService} from "../../../../services/document/document.service";
import {Document} from "../../../../models/document";
import {MdbTableDirective} from "angular-bootstrap-md";

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  constructor(
    private documentsService: DocumentsService,
    private documentService: DocumentService,
  ) {
  }
  documents: Document[] = [];

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("documentGrade") documentGrade;

  ngOnInit() {
    this.get();
  }

  add(document) {
    this.documents.push(document);
  }

  get() {
    this.documentsService.get({type: 2})
      .subscribe(
        (data) => {
          this.documents = data;
        }, (error) => {

        });
  }

  grade(document) {

  }

  openGradeComponent(item) {
    this.documentGrade.show(item);
  }


}

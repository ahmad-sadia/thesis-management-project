import {Component, OnInit, ViewChild} from '@angular/core';
import {Document} from "../../../../models/document";
import {MdbTableDirective} from "angular-bootstrap-md";
import {DocumentsService} from "../../../../services/document/documents.service";
import {DocumentService} from "../../../../services/document/document.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  documents: Document[] = [];

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("documentGrade") documentGrade;
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
    private documentService: DocumentService,
  ) {
  }


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

  documentSubmitted(document) {
    this.elements[0].value = 'Submitted for Evaluation';
    this.elements[2].value = document.title;
  }

}

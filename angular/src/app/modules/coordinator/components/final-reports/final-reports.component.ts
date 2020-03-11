import {Component, OnInit, ViewChild} from '@angular/core';
import {MdbTableDirective} from "angular-bootstrap-md";
import {DocumentsService} from "../../../../services/document/documents.service";
import {Document} from "../../../../models/document";
import {DocumentService} from "../../../../services/document/document.service";

@Component({
  selector: 'app-final-reports',
  templateUrl: './final-reports.component.html',
  styleUrls: ['./final-reports.component.scss']
})
export class FinalReportsComponent implements OnInit {

  documents: Document[] = [];

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("documentGrade") documentGrade;


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
    this.documentsService.get({type: 4})
      .subscribe(
        (data) => {
          this.documents = data;
        }, (error) => {

        });
  }

  grade(document) {
    const i = this.documents.map(x => x.id).indexOf(document.id);
    if (i >= 0) {
      this.documents.splice(i, 1, document);
    }
  }

  openGradeComponent(item) {
    this.documentGrade.show(item);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  form: FormGroup;
  error = null;
  working = false;

  elements: any = [
    {name: 'Status', value: 'Not submitted'},
    {name: 'Deadline', value: '-'},
    {name: 'File', value: '-'},
  ];

  constructor() {

  }

  ngOnInit() {
  }

  documentSubmitted(document) {
    this.elements[0].value = 'Submitted for approval';
    this.elements[2].value = document.title;
  }
}

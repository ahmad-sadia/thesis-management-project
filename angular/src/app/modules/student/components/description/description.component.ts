import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-submit-document',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;

  elements: any = [
    {name: 'Status', value: 'Not submitted'},
    {name: 'Deadline', value: '-'},
    {name: 'File', value: '-'},
    {name: 'Evaluation', value: '-'},
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

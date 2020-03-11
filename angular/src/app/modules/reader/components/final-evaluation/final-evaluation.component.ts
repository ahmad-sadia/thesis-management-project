import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-final-evaluation',
  templateUrl: './final-evaluation.component.html',
  styleUrls: ['./final-evaluation.component.scss']
})
export class FinalEvaluationComponent implements OnInit {

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
    this.elements[0].value = 'Submitted';
    this.elements[2].value = document.title;
  }


}

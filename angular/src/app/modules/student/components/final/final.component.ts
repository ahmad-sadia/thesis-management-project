import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  form: FormGroup;
  error = null;
  working = false;

  elements: any = [
    {name: 'Status', value: 'Not submitted'},
    {name: 'Deadline', value: '-'},
    {name: 'File', value: '-'},
    {name: 'Grade', value: '-'},
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

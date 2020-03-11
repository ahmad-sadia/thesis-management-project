import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Document} from "../../../../../models/document";
import {DocumentService} from "../../../../../services/document/document.service";

@Component({
  selector: 'app-grade-num',
  templateUrl: './grade-num.component.html',
  styleUrls: ['./grade-num.component.scss']
})
export class GradeNumComponent implements OnInit {

  form: FormGroup;
  error = null;
  working = false;
  document: Document = null;
  @Output() documentGraded = new EventEmitter<Document>();
  @ViewChild("userEditModal") modal;


  constructor(private formBuilder: FormBuilder,
              private documentService: DocumentService
  ) {
    this.form = this.formBuilder.group({
      gradeNum: ['', [Validators.required]],
    });

  }

  ngOnInit() {

  }

  show(document: Document) {
    this.document = document;
    this.form.controls.gradeNum.setValue(document.gradeNum);
    this.modal.show();
  }

  save() {
    if (!this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
      return false;
    }
    this.error = null;
    this.working = true;
    this.documentGraded.emit(new Document());
    this.modal.hide();
    console.log(this.form.value);
    this.documentService.set(this.document.id, this.form.value)
      .subscribe((next) => {
        console.log(next);
          this.documentGraded.emit(next);
          this.modal.hide();
        },
        (error) => {
          this.error = 'invalid input';
        }
      )
  }


}

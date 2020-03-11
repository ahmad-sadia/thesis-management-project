import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DocumentService} from "../../../../services/document/document.service";
import {Document} from "../../../../models/document";

@Component({
  selector: 'app-coordinator-grade',
  templateUrl: './grade-pass.component.html',
  styleUrls: ['./grade-pass.component.scss']
})
export class GradePassComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;
  document : Document = null;
  @Output() documentGraded = new EventEmitter<Document>();
  @ViewChild("userEditModal") modal;

  constructor(private documentService: DocumentService,
              private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      gradePass: ['', [Validators.required]],
    });

  }

  ngOnInit() {

  }

  show(document: Document) {
    this.document = document;
    this.form.controls.gradePass.setValue(document.gradePass);
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
    this.documentService.set( this.document.id,this.form.value)
      .subscribe((next) => {
          this.documentGraded.emit(next);
          this.modal.hide();
        },
        (error) => {
          this.error = 'invalid input';
        }
      )


  }

}

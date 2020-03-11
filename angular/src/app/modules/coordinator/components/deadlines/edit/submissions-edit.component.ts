import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Submission} from "../../../../../models/deadline";
import {SubmissionService} from "../../../../../services/deadline/submission.service";

@Component({
  selector: 'app-submissions-edit',
  templateUrl: './submissions-edit.component.html',
  styleUrls: ['./submissions-edit.component.scss']
})
export class SubmissionsEditComponent implements OnInit {
  submission: Submission = null;
  form: FormGroup;
  error = null;
  working = false;

  @Output() submissionsEdited = new EventEmitter<Submission>();
  @ViewChild("submissionEditModal") modal;

  constructor(private submissionService: SubmissionService,
              private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      deadline: ['', [Validators.required, Validators.minLength(1)]],
    });

  }

  ngOnInit() {

  }

  show(item: Submission) {
    this.submission = item;
    this.form.controls.title.setValue(item.title);
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

    this.submissionService.edit(this.submission.id, this.form.value)
      .subscribe((next) => {
          this.submissionsEdited.emit(next);
          this.modal.hide();
        },
        (error) => {
          this.error = 'invalid input';
        }
      )


  }

}

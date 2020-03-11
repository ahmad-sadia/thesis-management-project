import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../../models/user";
import {SupervisorService} from "../../../../../services/user/supervisor.service";
import {Submission} from "../../../../../models/deadline";
import {SubmissionService} from "../../../../../services/deadline/submission.service";

@Component({
  selector: 'app-submissions-add',
  templateUrl: './submissions-add.component.html',
  styleUrls: ['./submissions-add.component.scss']
})
export class SubmissionsAddComponent implements OnInit {

  form: FormGroup;
  error = null;
  working = false;

  @Output() submissionsAdded = new EventEmitter<Submission>();
  @ViewChild("submissionAddModal") modal;

  constructor(private submissionService: SubmissionService,
              private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
    });

  }

  ngOnInit() {

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

    this.submissionService.add(this.form.value)
      .subscribe((next) => {
          this.submissionsAdded.emit(next.submission);
          this.modal.hide();
        },
        (error) => {
          this.error = 'invalid input';
        }
      );
  }

}

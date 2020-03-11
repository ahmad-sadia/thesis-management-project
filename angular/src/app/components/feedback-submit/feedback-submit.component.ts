import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DocumentService} from "../../services/document/document.service";
import {AuthService} from "../../services/auth/auth.service";
import {Document} from "../../models/document";
import {Feedback} from "../../models/feedbacks";
import {FeedbacksService} from "../../services/feedbacks/feedbacks.service";

@Component({
  selector: 'app-feedback-submit',
  templateUrl: './feedback-submit.component.html',
  styleUrls: ['./feedback-submit.component.scss']
})
export class FeedbackSubmitComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;


  @Input()
  set type(value) {
    this.form.controls.type.setValue(value);
  }

  @Output() feedbackSubmitted = new EventEmitter<Feedback>();
  @ViewChild("submitFeedback") modal;

  constructor(private formBuilder: FormBuilder,
              private feedbacksService: FeedbacksService,
              private authService: AuthService) {
    this.form = this.formBuilder.group({
      file: ['', [Validators.required]],
      title: ['', [Validators.required]],
      documentId: ['', [Validators.required]],
      authorId: [this.authService.getCurrentUserId(), [Validators.required]],
    });
  }

  ngOnInit() {

  }


  show(document: Document) {
    this.form.controls.documentId.setValue(document.id);
    this.modal.show();
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('file').setValue(file);
    }
  }

  submit() {
    if (!this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
      return false;
    }
    this.working = true;

    this.feedbacksService.add(this.form.value)
      .subscribe((next) => {
        this.working = false;
        this.feedbackSubmitted.emit(next.feedback);
        this.modal.hide();
      }, (error) => {
        this.error = error.message;
        this.working = false;
      });
    return false;
  }
}

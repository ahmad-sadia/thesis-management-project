import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Document} from "../../../../../models/document";
import {SupervisorService} from "../../../../../services/user/supervisor.service";
import {Confirmation} from "../../../../../models/confirmation";

@Component({
  selector: 'app-set-confirms',
  templateUrl: './set-confirms.component.html',
  styleUrls: ['./set-confirms.component.scss']
})
export class SetConfirmsComponent implements OnInit {
  confirmation: Confirmation = null;
  form: FormGroup;
  error = null;
  working = false;

  @Output() supervisorConfirmed = new EventEmitter<Confirmation>();
  @ViewChild("userEditModal") modal;

  constructor(private supervisorService: SupervisorService,
              private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      confirmed: [0, [Validators.required]],
    });

  }

  ngOnInit() {

  }

  show(confirmation: Confirmation) {
    this.confirmation = confirmation;
    this.form.controls.confirmed.setValue(confirmation.confirmed);
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

    this.supervisorService.confirm(this.confirmation.id, this.form.value)
      .subscribe((next) => {
          this.supervisorConfirmed.emit(next);
          this.modal.hide();
        },
        (error) => {
          this.error =  error;
        }
      );

    return false;
  }

}


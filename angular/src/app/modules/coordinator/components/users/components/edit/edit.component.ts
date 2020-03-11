import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../../../models/user";
import {SupervisorService} from "../../../../../../services/user/supervisor.service";
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'app-coordinator-users-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  user : User = null;
  form: FormGroup;
  error = null;
  working = false;

  @Output() userEdited = new EventEmitter<User>();
  @ViewChild("userEditModal") modal;
  userAdded: any;
  basicModal: any;

  constructor(private SupervisorService: SupervisorService,
              private formBuilder: FormBuilder,
              private userService:UsersService
  ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
    });

  }

  ngOnInit() {

  }

  show(user: User) {
    this.user = user;
    this.form.controls.username.setValue(user.username);
    this.form.controls.firstName.setValue(user.firstName);
    this.form.controls.lastName.setValue(user.lastName);
    this.form.controls.email.setValue(user.email);
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
    this.userEdited.emit(new User());
    this.modal.hide();
    this.userService.edit(this.user.id ,this.form.value )
      .subscribe((next) => {
          this.userAdded.emit(next);
          this.basicModal.hide();
        },
        (error) => {
          this.error = 'invalid input';
        }
      );
  

  }

}

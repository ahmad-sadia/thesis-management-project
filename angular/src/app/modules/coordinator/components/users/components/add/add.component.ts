import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../../../../services/user/users.service";
import {User} from "../../../../../../models/user";

@Component({
  selector: 'app-coordinator-users-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;

  @Output() userAdded = new EventEmitter<User>();
  @ViewChild('userAdd') modal;

  constructor(private usersService: UsersService,
              private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
      roleId: [0, [Validators.required, Validators.minLength(1)]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
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

    this.usersService.add(this.form.value)
      .subscribe((next) => {
          this.userAdded.emit(next.user);
          this.modal.hide();
        },
        (error) => {
          this.error = 'invalid input';
        }
      )


  }

}

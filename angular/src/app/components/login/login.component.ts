import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error = null;
  working = false;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  ngOnInit() {

  }

  login() {
    if (!this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
      return false;
    }
    this.error = null;
    this.working = true;


    this.auth.login(this.form.value)
      .then((next) => {
        this.working = false;
        if (next.isStudent()) {
          this.router.navigate(['student']);
        } else if (next.isCoordinator()) {
          this.router.navigate(['coordinator']);
        } else if (next.isReader()) {
          this.router.navigate(['reader']);
        } else if (next.isSupervisor()) {
          this.router.navigate(['supervisor']);
        }else if (next.isOpponent()) {
          this.router.navigate(['opponent']);
        }
      })
      .catch((error) => {
        this.error = 'user not found';
      });

    return false;
  }

}

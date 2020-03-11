import {Component, OnInit, ViewChild} from '@angular/core';
import {SupervisorService} from 'src/app/services/user/supervisor.service';
import {AuthService} from 'src/app/services/auth/auth.service';
import {Confirmation} from 'src/app/models/confirmation';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirms',
  templateUrl: './confirms.component.html',
  styleUrls: ['./confirms.component.scss']
})
export class ConfirmsComponent implements OnInit {
  confirmationList: Confirmation[] = [];
  error = null;


  @ViewChild("confirm") confirmSupervision;

  constructor(private supervisorService: SupervisorService,
              private auth: AuthService,
              private router: Router,
  ) {
  }

  ngOnInit() {
    if (!this.auth.isLoggedIn()) this.router.navigate(['login']);
    else {
      this.supervisorService.getSuggestions({supervisorId: this.auth.getCurrentUserId()})
        .subscribe(
          (data) => {
            this.confirmationList = data;
          }, (error) => {
            this.error = error;
          });

    }

  }

  openConfirmComponent(item) {
    this.confirmSupervision.show((item));

  }

  setConfirm(confirmation) {
    const i = this.confirmationList.map(x => x.id).indexOf(confirmation.id);
    if (i >= 0) {
      this.confirmationList.splice(i, 1, confirmation);
    }
  }
}

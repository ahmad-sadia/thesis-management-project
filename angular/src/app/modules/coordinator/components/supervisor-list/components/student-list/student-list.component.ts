import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../../../../models/user";
import {MdbTableDirective} from "angular-bootstrap-md";
import {UsersService} from "../../../../../../services/user/users.service";
import {SupervisorService} from "../../../../../../services/user/supervisor.service";
import {AuthService} from "../../../../../../services/auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Confirmation} from "../../../../../../models/confirmation";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  supervisorId = 0;
  users: User[] = [];
  error = null;

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("userEdit") userEdit;

  constructor(private supervisorService: SupervisorService,
              private usersService: UsersService,
              private auth: AuthService,
              private activatedRoute: ActivatedRoute,
  ) {
    this.supervisorId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
  }

  ngOnInit() {

    this.usersService.get({supervisorId: this.supervisorId, roleId: 1})
      .subscribe(
        (data) => {
          this.users = data;
        }, (error) => {
          this.error = error;
        });


  }


}

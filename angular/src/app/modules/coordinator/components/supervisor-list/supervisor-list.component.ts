import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../../models/user";
import {MdbTableDirective} from "angular-bootstrap-md";
import {UsersService} from "../../../../services/user/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-supervisor-list',
  templateUrl: './supervisor-list.component.html',
  styleUrls: ['./supervisor-list.component.scss']
})
export class SupervisorListComponent implements OnInit {
  users: User[] = [];

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild("userEdit") userEdit;

  constructor(
    private usersService: UsersService,
    private router: Router,
  ) {
  }


  ngOnInit() {
    this.get();
  }


  get() {
    this.usersService.get({roleId: 3})
      .subscribe(
        (data) => {
          this.users = data;
        }, (error) => {

        });
  }


  viewStudents(element) {
    this.router.navigate(['/coordinator/supervisors/' + element.id + '/students']);
  }

}

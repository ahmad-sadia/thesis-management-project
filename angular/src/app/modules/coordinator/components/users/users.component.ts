import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from 'src/app/services/user/users.service';
import {User} from '../../../../models/user';
import {MdbTableDirective} from 'angular-bootstrap-md';


@Component({
    selector: 'user-table',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: User[] = [];

    @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
    @ViewChild('userEdit') userEdit;

    constructor(
        private usersService: UsersService
    ) {
    }


    ngOnInit() {
        this.get();
    }

    add(user) {
        this.users.push(user);
    }

    edit(user) {
        const i = this.users.map(x => x.id).indexOf(user.id);
        if (i >= 0) {
            this.users.splice(i, 1, user);
        }
    }

    get() {
        this.usersService.get()
            .subscribe(
                (data) => {
                    this.users = data;
                }, (error) => {

                });
    }

    openEditComponent(user: User) {
        this.userEdit.show(user);
    }
}

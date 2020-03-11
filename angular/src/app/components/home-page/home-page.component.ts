import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {Submission} from 'src/app/models/deadline';
import {DocumentService} from 'src/app/services/document/document.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    userName = 'noop';


    constructor(private auth: AuthService, private doc: DocumentService) {
        this.userName = this.auth.getUserName();
    }

    ngOnInit() {

    }

}

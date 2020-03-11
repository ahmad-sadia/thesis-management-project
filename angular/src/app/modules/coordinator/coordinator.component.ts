import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/services/auth/auth.service';
import {Router} from '@angular/router';

class Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  locked: boolean;
  step: number;

  constructor(title, description, icon, url) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.url = url;
  }
}


@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss']
})


export class CoordinatorComponent implements OnInit {
  items: Item[] = [];

  constructor(private auth: AuthService, private router: Router) {
    this.items.push(new Item(
      'Users', 'Add and Edit Users', 'fas fa-users', '/users'));
    this.items.push(new Item(
      'Project Description Evaluation', 'Project Description Evaluation', 'fas fa-file-alt', '/descriptions'));
    this.items.push(new Item(
      'Project Plan Evaluation', 'Project Plan Evaluation', 'fas fa-file', '/plans'));
    this.items.push(new Item(
      'Grade Final Report', 'Grade Final Report ', 'fas fa-file-pdf', '/finals'));
    this.items.push(new Item(
      'Deadlines', 'Set Deadlines', 'fas fa-clock', 'deadlines'));
    this.items.push(new Item(
      'Roles', 'Set Roles', 'fas fa-user-tag', '/roles'));

    this.items.push(new Item(
      'Supervisor student list', 'check the student list under each supervisor', 'fas fa-th-list', '/supervisors'));


  }

  ngOnInit() {
    if (!this.auth.isCoordinator() ) {
      this.router.navigate(['login']);
    }
    this.load();
  }

  navigate(item) {
    if (item.locked) {
      return;
    }
    this.router.navigate(['/coordinator/' + item.url]);
  }

  load() {

  }

}

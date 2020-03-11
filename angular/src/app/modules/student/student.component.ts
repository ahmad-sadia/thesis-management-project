import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

class Item {
  title: string;
  description: string;
  icon: string;
  url: string;
  locked: boolean;
  step: number;

  constructor(step, title, description, icon, url, locked = true) {
    this.title = title;
    this.step = step;
    this.description = description;
    this.icon = icon;
    this.url = url;
    this.locked = locked;
  }
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  items: Item[] = [];

  constructor(private authService: AuthService, private router: Router) {
    this.items.push(new Item(
      1, 'Description', 'Project description', 'fas fa-file-alt', 'description', false));
    this.items.push(new Item(
      2, 'Project Plan', 'Submit your project plan', 'fas fa-file', 'plan', false));
    this.items.push(new Item(
      3, 'Supervisor', 'Pick a supervisor', 'fas fa-user-tie', 'supervisor', false));
    this.items.push(new Item(
      4, 'Report', 'Submit your report', 'fas fa-file-alt', 'report', false));
    this.items.push(new Item(
      5, 'Final Report', 'Submit your final report', 'fas fa-file-pdf', 'final', false));
  }

  ngOnInit(): void {
    if (!this.authService.isStudent()) {
      this.router.navigate(["login"]);
      return;
    }
    this.load();
  }

  navigate(item) {
    if (item.locked) {
      return;
    }
    this.router.navigate(['/student/' + item.url]);
  }

  load() {

  }
}

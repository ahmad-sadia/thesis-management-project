import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

class Item {
  title: string;
  description: string;
  icon: string;
  url: string;


  constructor(title, description, icon, url, locked = true) {
    this.title = title;
    this.description = description;
    this.icon = icon;
    this.url = url;

  }
}


@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.scss']
})
export class OpponentComponent implements OnInit {
  items: Item[] = [];


  constructor(private auth: AuthService, private router: Router) {

    this.items.push(new Item(
      'FeedBack', 'Feedback', 'fas fa-file-alt', 'feedback'));


  }
  ngOnInit() {
    if (!this.auth.isOpponent()) {
      this.router.navigate(["login"]);
    }
    this.load();
  }

  navigate(item) {
    if (item.locked) {
      return;
    }
    this.router.navigate(['/opponent/' + item.url]);
  }

  load() {

  }


}

import {Component, OnInit, ViewChild} from '@angular/core';
import {Submission} from "../../../../models/deadline";
import {SubmissionService} from "../../../../services/deadline/submission.service";

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.scss']
})
export class DeadlinesComponent implements OnInit {
  @ViewChild("submissionsAdd") submissionsAdd;
  @ViewChild("submissionsEdit") submissionsEdit;

  elements: Submission[] = [];

  constructor(private submissionsService: SubmissionService) {
  }

  ngOnInit() {
    this.get();
  }

  openEditComponent(item: Submission) {
    this.submissionsEdit.show(item);
  }

  add(item) {
    this.elements.push(item);
  }

  edit(item) {
    const i = this.elements.map(x => x.id).indexOf(item.id);
    if (i >= 0) {
      this.elements.splice(i, 1, item);
    }
  }

  get() {
    this.submissionsService.get()
      .subscribe(
        (data) => {
          this.elements = data
        }, (error) => {

        });
  }
}

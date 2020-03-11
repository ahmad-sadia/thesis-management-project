import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Bidding } from 'src/app/models/biddings';
import { BiddingService } from 'src/app/services/bidding/bidding.service';

@Component({
  selector: 'app-set-bidding',
  templateUrl: './set-bidding.component.html',
  styleUrls: ['./set-bidding.component.scss']
})
export class SetBiddingComponent implements OnInit {

  form: FormGroup;
  error = null;
  working = false;
  bidding: Bidding = null;
  @Output() bided = new EventEmitter<Bidding>();
  @ViewChild("bidSet") modal;

  constructor(private biddingService: BiddingService,
              private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      biddingNumber: ['', [Validators.required]],
    });

  }

  ngOnInit() {

  }

  show(bidding: Bidding) {
    this.bidding = bidding;
    this.form.controls.biddingNumber.setValue(bidding.biddingNumber);
    this.modal.show();
  }

  save() {
    if (!this.form.valid) {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
      return false;
    }
    this.error = null;
    this.working = true;
    this.bided.emit(new Bidding());
    this.modal.hide();
    this.biddingService.edit(this.bidding.id, this.form.value)
      .subscribe((next) => {
          this.bided.emit(next);
          this.modal.hide();
        },
        (error) => {
          this.error = 'invalid input';
        }
      );

  }

}

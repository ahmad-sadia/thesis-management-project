import {Component, OnInit, ViewChild} from '@angular/core';
import {Document} from '../../../../models/document';
import {MdbTableDirective} from 'angular-bootstrap-md';
import {DocumentsService} from '../../../../services/document/documents.service';
import {BiddingService} from '../../../../services/bidding/bidding.service';
import {Bidding} from '../../../../models/biddings';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-biddings',
    templateUrl: './biddings.component.html',
    styleUrls: ['./biddings.component.scss']
})
export class BiddingsComponent implements OnInit {

    documents: Document[] = [];
    bids: Bidding[] = [];

    @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
    @ViewChild('bidSet') bidSet;


    constructor(
        private documentsService: DocumentsService,
        private bidingService: BiddingService
    ) {
    }

    getReportUrl(reportId) {
        return environment.serverUrl + '/api/document/download?id=' + reportId;
    }

    ngOnInit() {
        this.get();
    }

    add(bid) {
        this.bids.push(bid);
    }

    get() {
        this.bidingService.get()
            .subscribe(
                (data) => {
                    this.bids = data;
                }, (error) => {

                });
    }
    openBidComponent(item:Bidding) {
        this.bidSet.show(item);
    }
    set(bidding)
    {

    }
}


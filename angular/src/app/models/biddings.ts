export class Bidding {
    id: number;
    readerId: number;
    reportId: number;
    biddingNumber: number;
    assigned: number;

    constructor(bidding = null) {
        if (bidding != null) {
            this.fromDocument(bidding);
        }
    }

    private fromDocument(bidding) {
        this.id = bidding.id;
        this.readerId = bidding.readerId;
        this.reportId = bidding.reportId;
        this.biddingNumber = bidding.biddingNumber;
        this.assigned = bidding.assigned;

    }

    getId() {
        return this.readerId;
    }


    getReportId() {
        return this.readerId;
    }

    getReaderId() {
        return this.reportId;
    }


    getBiddingNumber() {
        return this.biddingNumber;
    }

    getAssigned() {
        if (this.assigned === 1) {
            return 'Yes';
        } else {
            return 'Available';
        }
    }
}



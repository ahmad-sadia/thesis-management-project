export class Submission {
    id: number;
    deadline: Date;
    step: number;
    title: string;

    constructor(submission = null) {
        if (submission != null) {
            this.fromDocument(submission);
        }
    }

    private fromDocument(submission) {
        this.id = submission.id;
        this.deadline = submission.deadline;
        this.step = submission.step;
        this.title = submission.title;

    }
}

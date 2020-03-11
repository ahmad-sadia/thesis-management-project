import {environment} from '../../environments/environment';

export class Document {
    authorId: number;
    title: string;
    type: number;
    opponentId: number;
    supervisorId: number;
    readerFeedbackId: number;
    opponentFeedbackId: number;
    gradeNum: number;
    gradePass: number;
    id: number;

    constructor(document = null) {
        if (document != null) {
            this.fromDocument(document);
        }
    }

    private fromDocument(document) {
        this.authorId = document.authorId;
        this.title = document.title;
        this.type = document.type;
        this.opponentId = document.opponentId;
        this.supervisorId = document.supervisorId;
        this.readerFeedbackId = document.readerFeedbackId;
        this.opponentFeedbackId = document.opponentFeedbackId;
        this.gradeNum = document.gradeNum;
        this.gradePass = document.gradePass;
        this.id = document.id;
    }

    isDescription() {
        return this.type == 1;
    }

    isFinal() {
        return this.type == 4;
    }

    isplan() {
        return this.type == 2;
    }

    isReport() {
        return this.type == 3;
    }

    getPassOrFail() {
        return this.gradePass === 0 ? '' : this.gradePass == 1 ? 'Pass' : 'Fail';
    }

    getPassNum() {
        return this.gradeNum === 0 ?
            '' : this.gradeNum == 1 ?
                'A' : this.gradeNum == 2 ?
                    'B' : this.gradeNum == 3 ?
                        'C' : this.gradeNum == 4 ?
                            'D' : this.gradeNum == 5 ?
                                'E' : 'F';
    }

    getDownloadLink() {
        return environment.serverUrl + '/api/document/download?id=' + this.id;
    }


}

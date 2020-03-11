export class Feedback {

  id:number;
 documentId:number;
  studentId:number;

  constructor(feedback = null) {
    if (feedback != null) {
      this.fromDocument(feedback);
    }
  }

  private fromDocument(feedback) {
    this.id = feedback.id;
    this.documentId = feedback.documentId;
    this.studentId = feedback.studentId;

  }
  getId(){
    return this.id
  }

  getDocumentId(){
    return this.documentId
  }

  getStudentId(){
    return this.studentId;
  }


}

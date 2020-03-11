export class DocumentType {

  toString(type) {
    switch (type) {
      case 1:
        return 'Description';
      case 2:
        return 'Plan';
      case 3:
        return 'Report';
      case 4:
        return 'Final report';
      default:
        return '';

    }
  }

}

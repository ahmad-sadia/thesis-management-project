import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Document} from 'src/app/models/document';
import {createParameters} from "../formData";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  constructor(private http: HttpClient) {
  }

  public get(args = null) {
    return this.http.get<any>(`${environment.serverUrl}/api/document/get`, {
      params: createParameters(args)
    })
      .pipe(map(actions => {
          return actions.document.map(item => {
            return new Document(item);
          });
        }
      ));
  }
}

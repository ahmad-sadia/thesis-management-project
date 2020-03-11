import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {createFormData, createParameters} from "../formData";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {Document} from "../../models/document";

@Injectable()
export class DocumentService {
  constructor(private http: HttpClient) {
  }

  public upload(data) {
    return this.http.post<any>(`${environment.serverUrl}/api/document/add`, createFormData(data));
  }

  public get(args = null) {
    return this.http.get<any>(`${environment.serverUrl}/api/document/get`, {
      params: createParameters(args)
    });
  }

  public set(id, args) {
    return this.http.post<any>(`${environment.serverUrl}/api/document/update/` + id, createFormData(args)
    ).pipe(map(actions => {
        return new Document(actions.document);
      }
    ));
  }

}

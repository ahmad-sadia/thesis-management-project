import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {createFormData, createParameters} from "../formData";
import {map} from "rxjs/operators";
import {Feedback} from "../../models/feedbacks";

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  constructor(private http: HttpClient) { }

  public get(args = null) {
    return this.http.get<any>(`${environment.serverUrl}/api/feedbacks/get`, {
      params: createParameters(args)
    })
      .pipe(map(actions => {
          return actions.Feedbacks.map(item => {
            return new Feedback(item);
          });
        }
      ));
  }
  public add(data) {
    return this.http.post<any>(`${environment.serverUrl}/api/feedbacks/add`, createFormData(data));
  }

  public edit(id, data)
  {
    return this.http.post<any>(`${environment.serverUrl}/api/feedbacks/update/` + id,
      createFormData(data)
    ).pipe(map(actions => {
        return new Feedback(actions.bid);
      }
    ));
  }
}

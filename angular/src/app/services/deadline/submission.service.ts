import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {createFormData, createParameters} from '../formData';
import {map} from 'rxjs/operators';
import {Submission} from '../../models/deadline';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {


  constructor(private http: HttpClient) {
  }

  public get(args = null) {
    return this.http.get<any>(`${environment.serverUrl}/api/submission/get`, {
      params: createParameters(args)
    })
      .pipe(map(actions => {
          return actions.submission.map(item => {
            return new Submission(item);
          });
        }
      ));
  }

  public add(data) {
    return this.http.post<any>(`${environment.serverUrl}/api/submission/add`, createFormData(data));
  }

  public edit(id, data): any {
    return this.http.post<any>(`${environment.serverUrl}/api/submission/update/` + id,
      createFormData(data)
    ).pipe(map(actions => {
        return new Submission(actions.submission);
      }
    ));
  }

}

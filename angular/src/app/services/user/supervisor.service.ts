import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {createFormData, createParameters} from "../formData";
import {map} from 'rxjs/operators';
import {Confirmation} from 'src/app/models/confirmation.js';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
  constructor(private http: HttpClient) {
  }

  public suggest(data) {
    return this.http.post(`${environment.serverUrl}/api/supervisor-confirmation/add`, createFormData(data));
  }

  public getSuggestions(args = null) {
    return this.http.get<any>(`${environment.serverUrl}/api/supervisor-confirmation/get/`, {
      params: createParameters(args)
    }).pipe(map(actions => {
        console.log(actions);
        return actions.confirmation.map(item => {
          return new Confirmation(item);
        });
      }
    ));
  }

  public confirm(id, args) {
    return this.http.post<any>(`${environment.serverUrl}/api/supervisor-confirmation/update/` + id,
      createFormData(args)
    ).pipe(map(actions => {
      return new Confirmation(actions.confirmation);
      }
    ));
  }
}

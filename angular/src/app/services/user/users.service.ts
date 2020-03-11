import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/models/user';
import config from "../../../config.json";
import {createFormData, createParameters} from "../formData";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  public get(args = null) {
    return this.http.get<any>(`${environment.serverUrl}/api/users/get`, {
      params: createParameters(args)
    })
      .pipe(map(actions => {
          return actions.users.map(item => {
            return new User(item);
          });
        }
      ));
  }

  public add(data) {
    return this.http.post<any>(`${environment.serverUrl}/api/user/add/`, createFormData(data));
  }
  public edit(id, data)
  {
    return this.http.post<any>(`${environment.serverUrl}/api/user/update/` + id,
      createFormData(data)
    ).pipe(map(actions => {
      return new User(actions.user);
      }
    ));
  }
  public editRole(id, data)
  {
    return this.http.post<any>(`${environment.serverUrl}/api/user/updateRole/` + id,
      createFormData(data)
    ).pipe(map(actions => {
      return new User(actions.user);
      }
    ));
  }

}

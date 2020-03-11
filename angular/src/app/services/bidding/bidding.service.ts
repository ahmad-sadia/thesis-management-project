import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {createFormData, createParameters} from '../formData';
import {map} from 'rxjs/operators';
import {Bidding} from '../../models/biddings';

@Injectable({
    providedIn: 'root'
})
export class BiddingService {

    constructor(private http: HttpClient) {
    }

    public get(args = null) {
        return this.http.get<any>(`${environment.serverUrl}/api/biddings/get`, {
            params: createParameters(args)
        })
            .pipe(map(actions => {
                    return actions.bidding.map(item => {
                        return new Bidding(item);
                    });
                }
            ));
    }

    public add(data) {
        return this.http.post<any>(`${environment.serverUrl}/api/biddings/add`, createFormData(data));
    }

    public edit(id, data) {
        return this.http.post<any>(`${environment.serverUrl}/api/biddings/update/` + id,
            createFormData(data)
        ).pipe(map(actions => {
                return new Bidding(actions.bid);
            }
        ));
    }
}

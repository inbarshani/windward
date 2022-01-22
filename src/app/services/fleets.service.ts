import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Fleet } from '../models/fleet';

@Injectable({
    providedIn: 'root'
})
export class FleetsService {
    constructor(private http: HttpClient) {}

    getFleets(): Observable<Fleet[]> {
        const url = '/api/fleets';
        return this.http.get<Fleet[]>(url).pipe(
            map(json => {
                if (json) {
                    return json.map(jsonItem => new Fleet(jsonItem));
                }
                return [];
            })
        );
    }
}

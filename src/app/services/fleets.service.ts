import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Fleet, FleetQuery } from '../models/fleet';
import { Vessel } from '../models/vessel';

@Injectable({
    providedIn: 'root'
})
export class FleetsService {
    constructor(private http: HttpClient) {}

    getFleets(query?: FleetQuery): Observable<Fleet[]> {
        let url = '/api/fleets';
        if (query) {
            url = url + `?filter=${JSON.stringify(query)}`;
        }
        return this.http.get<Fleet[]>(url).pipe(
            map(json => {
                if (json) {
                    return json.map(jsonItem => new Fleet(jsonItem));
                }
                return [];
            })
        );
    }

    getFleet(id: string): Observable<Fleet | null> {
        const url = `/api/fleets/${id}`;
        return this.http.get<Fleet>(url).pipe(
            map(json => {
                if (json) {
                    return new Fleet(json);
                }
                return null;
            })
        );
    }

    getFleetVessels(id: string): Observable<Vessel[]> {
        const url = `/api/fleets/${id}/vessels`;
        return this.http.get<Vessel[]>(url).pipe(
            map(json => {
                if (json) {
                    return json.map(jsonItem => new Vessel(jsonItem));
                }
                return [];
            })
        );
    }
}

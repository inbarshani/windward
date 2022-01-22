import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Fleet } from '../models/fleet';
import { Vessel } from '../models/vessely';

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

    getFleet(id: number): Observable<Fleet | null> {
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

    getFleetVessels(id: number): Observable<Vessel[]> {
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

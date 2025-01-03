import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Location } from '../models/location.model';

@Injectable({ providedIn: 'root' })
export class LocationsService {
    private http = inject(HttpClient);
    private url = 'https://api.nicobytes.store';

    getAllLocations(center: { lat: number, lng: number }) {
        const url = `${this.url}/api/v1/locations`;
        return this.http.get<Location[]>(url, {
            params: {
                origin: `${center.lat},${center.lng}`,
                size: 5
            }
        })
    }

}
// src/app/location.service.ts
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getUserLocation(): Observable<GeolocationPosition> {
    console.log('get position')
    return new Observable(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            observer.next(position);
            observer.complete();
          },
          error => observer.error(error),
          { enableHighAccuracy: true }
        );
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }
}

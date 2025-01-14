import { Component, inject, signal, viewChild, ViewChild, viewChildren } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GoogleMap, MapAdvancedMarker, MapInfoWindow } from '@angular/google-maps';

import { LocationsService } from './services/locations.service';
import { Location } from './models/location.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GoogleMap, MapAdvancedMarker, MapInfoWindow],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private locationsService = inject(LocationsService);
  infoWindowRef = viewChild.required(MapInfoWindow);
  markersRef = viewChildren(MapAdvancedMarker);

  center = signal<google.maps.LatLngLiteral>({ lat: 10.9845951, lng: -74.8179751 });
  zoom = signal(12);
  // advancedMarkerOptions = signal<google.maps.marker.AdvancedMarkerElementOptions>({ gmpDraggable: false })
  // advancedMarkerPositions = signal<google.maps.LatLngLiteral[]>([]);

  locations$ = this.locationsService.getAllLocations(this.center());
  $locations = toSignal(this.locations$, {
    initialValue: [],
  });

  openInfoWindow(location: Location, marker: MapAdvancedMarker) {
    console.log("Marker clicked", location);

    const content = `
      <h3>${location.name}</<h3>
      <p>${location.description}</p>
    `;

    this.infoWindowRef().open(marker, false, content);
  }

  selectLocation(location: Location, position: number) {
    const markers = this.markersRef();
    const markerRef = markers[position];
    this.openInfoWindow(location, markerRef)

  }

}

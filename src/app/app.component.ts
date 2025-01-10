import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { GoogleMap, MapAdvancedMarker } from '@angular/google-maps';

import { LocationsService } from './services/locations.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GoogleMap, MapAdvancedMarker],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private locationsService = inject(LocationsService);

  center = signal<google.maps.LatLngLiteral>({ lat: 10.9845951, lng: -74.8179751 });
  zoom = signal(12);
  // advancedMarkerOptions = signal<google.maps.marker.AdvancedMarkerElementOptions>({ gmpDraggable: false })
  // advancedMarkerPositions = signal<google.maps.LatLngLiteral[]>([]);

  locations$ = this.locationsService.getAllLocations(this.center());
  $locations = toSignal(this.locations$, {
    initialValue: [],
  });


}

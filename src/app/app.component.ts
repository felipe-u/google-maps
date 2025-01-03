import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { LocationsService } from './services/locations.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private locationsService = inject(LocationsService);

  locations$ = this.locationsService.getAllLocations({ lat: 10.9845951, lng: -74.8179751 });
  $locations = toSignal(this.locations$, {
    initialValue: [],
  });


}

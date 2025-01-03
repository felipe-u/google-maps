import { Component, signal } from '@angular/core';
import { Location } from './models/location.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  locations = signal<Location[]>([
    {
      id: 1,
      name: 'Location 1',
      description: 'Description 1',
      latitude: 0,
      longitude: 0
    },
    {
      id: 2,
      name: 'Location 2',
      description: 'Description 2',
      latitude: 0,
      longitude: 0
    }
  ]);

}

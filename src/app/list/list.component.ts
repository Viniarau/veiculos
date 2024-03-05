import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HttpClientModule],
  template: `
  <div class="container">
    <h2>Vehicle List</h2>
    <ul class="vehicle-list">
      @for (vehicle of vehicles; track vehicle) {
        <li class="vehicle-list-item">
          <div class="vehicle-info">
            <p class="title">Model: {{ vehicle.model }}</p>
            <p class="info">Brand: {{ vehicle.brand }}</p>
            <p class="info">Year: {{ vehicle.year }}</p>
            <p class="info">Color: {{ vehicle.color }}</p>
            <p class="info">Mileage: {{ vehicle.mileage }} km</p>
            <p class="info">Fuel Type: {{ vehicle.fuelType }}</p>
            <p class="info">Engine: {{ vehicle.engine }}</p>
            <p class="info">Transmission: {{ vehicle.transmission }}</p>
          </div>
        </li>
      }
    </ul>
    </div>
  `,
  styleUrl: './list.component.css'
})

export class ListComponent {

  vehicles: any[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/mock/vehicles.json').subscribe(
      (data) => {
        this.vehicles = data;
      },
      (error) => {
        console.error('Error loading vehicle data:', error);
      }
    );
  }
}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})
export class AsteroidsComponent implements OnInit {
  apiKey: any = localStorage.getItem('apiKey');
  firstDate: string = '';
  secondDate: string = '';
  ids: any[] = [];
  names: any[] = [];
  dates: any[] = [];
  magnitudes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.calculateDates();
    this.takeAsteroids();
  }

  calculateDates() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const eightDaysAgo = new Date(today);
    eightDaysAgo.setDate(eightDaysAgo.getDate() - 8);

    this.firstDate = this.formatDate(yesterday);
    this.secondDate = this.formatDate(eightDaysAgo);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

  takeAsteroids() {
    const apiURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.firstDate}&end_date=${this.secondDate}&api_key=${this.apiKey}`;
    this.http.get(apiURL).subscribe((response: any) => {
      const asteroidData = response.near_earth_objects;

      for (const date in asteroidData) {
        if (asteroidData.hasOwnProperty(date)) {
          const asteroids = asteroidData[date];

          for (const asteroid of asteroids) {
            this.ids.push(asteroid.id);
            this.names.push(asteroid.name);
            this.dates.push(date);
            this.magnitudes.push(asteroid.absolute_magnitude_h)
          }
        }
      }
    });
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.scss']
})
export class MarsComponent {
  apiKey: any = localStorage.getItem('apiKey');
  imgs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchMarsDates();
  }

  fetchMarsDates() {
    const apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${this.apiKey}`;

    this.http.get(apiURL).subscribe((response: any) => {
      this.imgs = response.photos;
      console.log(this.imgs);
    });
  }
}

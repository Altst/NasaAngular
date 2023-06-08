import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent {
  apiKey: any = localStorage.getItem('apiKey');
  photo: string = '';
  description: string = '';
  title: string = '';
  date: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchApodPhoto();
  }

  fetchApodPhoto() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    this.date = this.formatDate(yesterday);

    const apiUrl = `https://api.nasa.gov/planetary/apod?date=${this.date}&api_key=${this.apiKey}`;

    this.http.get(apiUrl).subscribe((response: any) => {
      this.photo = response.url;
      this.title = response.title;
      this.description = response.explanation;
    });
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
}

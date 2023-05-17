import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})
export class AsteroidsComponent {
  url: string = '';

  constructor(private http: HttpClient) {
    this.http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=U0eUl8fUD9MKgCFRp4zeaGTmysVmSh6HcWpQjfsk')
      .subscribe((data: any) => {
        this.url = data.url; // получение URL-адреса из ответа сервера
      });
  }
}

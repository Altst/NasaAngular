import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent {
  url: string = '';

  constructor(private http: HttpClient) {
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=U0eUl8fUD9MKgCFRp4zeaGTmysVmSh6HcWpQjfsk')
      .subscribe((data: any) => {
        this.url = data.url; // получение URL-адреса из ответа сервера
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent {
  apiKey: any = localStorage.getItem('apiKey');
  longtitude: number = 100;
  lattitude: number = 2;
  photo: string = "";
  msg: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.takeEarth();
  }
  takeEarth() {
    this.msg = "";
    const apiURL = `https://api.nasa.gov/planetary/earth/imagery?lon=${this.longtitude}&lat=${this.lattitude}&date=2015-01-17&dim=0.15&api_key=${this.apiKey}`;
    
    this.http.get(apiURL).subscribe(
      (response: any) => {
        
      },
      (error: any) => {
        if (error.status === 404 || error.status === 429) {
          this.photo = ""; 
          this.msg = "Error 404: Image not found";
          return;
        }
      }
    );
    this.photo = apiURL;
  }  
  btnUp(){
    this.lattitude += 1;
    this.takeEarth();
  }
  btnLeft(){
    this.longtitude -= 1;
    this.takeEarth();
  }
  btnRight(){
    this.longtitude += 1;
    this.takeEarth();
  }
  btnBot(){
    this.lattitude -= 1;
    this.takeEarth();
  }
}

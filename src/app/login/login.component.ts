import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  apiKey: any;
  display: string = "flex";
  constructor(private http: HttpClient) {

  }
  logIn() {
    const apiURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=" + this.apiKey;
    this.http.get(apiURL).subscribe(
      (response: any) => {
        localStorage.setItem('apiKey', this.apiKey);
        this.display="none";
      },
      (error: any) => {
        if (error.status === 403) {
          if (error.error?.code === "API_KEY_INVALID") {
            alert("NASA API Key Incorrect");
          } else if (error.error?.code === "API_KEY_MISSING") {
            alert("NASA API Key Missing");
          } else {
            alert("Access to the resource is forbidden");
          }
        } else {
          alert("An unexpected error occurred");
        }
      }
    );
  }
}

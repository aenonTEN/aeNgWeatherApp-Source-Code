import { Component, OnInit } from '@angular/core';
import { weatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }
  cityName: string = "Rajkot";

  weatherData!: weatherData;

  ngOnInit(): void {
  this.onSubmit();
  this.cityName = '';
    

  }

  onSubmit(){
   this.getweatherData(this.cityName);
   this.cityName = '';
    

  }

  private getweatherData(cityName: string){
  this.weatherService.getweatherData(cityName)
  .subscribe({
    next: (Response) => {
      this.weatherData = Response;
      console.log(Response)
    }
  });
}
}

import { Component, OnInit } from '@angular/core';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'app-lse018',
  templateUrl: './lse018.component.html',
  styleUrls: ['./lse018.component.css'],
})
export class Lse018Component {
  sensorData = [
    {
      title: 'Soil Temperature',
      temperature_second: '-',
    },
    {
      title: 'Soil Moisture',
      moisture_second: '-',
    },
    { title: 'Soil EC', EC_second: '-', imageUrl: 'assets/eco-energy.png' },
    {
      title: 'Battery Capacity',
      battery_second: '-',
    },
    {
      title: 'Overall Status',
      connection: 'Disconnected',
      lastUpdated: 'None'
    },
  ];

  constructor(private sensorService: SensorService) {}

  ngOnInit() {
    this.sensorService.receiveTemperatureHumidityECData().subscribe((data) => {
      const stringData = data.map((value: number) => String(value));
      const currentTime = new Date();
      this.sensorData[0].temperature_second = stringData[0]; // Soil Temperature
      this.sensorData[1].moisture_second = stringData[2]; // Soil Moisture
      this.sensorData[2].EC_second = stringData[1]; // Soil EC
      this.sensorData[3].battery_second = stringData[3] + 'V'; // Battery
      this.sensorData[4].connection = 'Connected'; //
      this.sensorData[4].lastUpdated = currentTime.toLocaleString();
      console.log('Temperature Humidity EC Sensor Data:', data);
    });
  }
}

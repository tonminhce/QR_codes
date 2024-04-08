import { Component, OnInit } from '@angular/core';
import { SensorService } from '../services/sensor.service'
@Component({
  selector: 'app-lsn50v2s31b',
  templateUrl: './lsn50v2s31b.component.html',
  styleUrls: ['./lsn50v2s31b.component.css'],
})
export class Lsn50v2s31bComponent {
  sensorData = [
    {
      title: 'Air Temperature',
      temperature_first: '-',
    },
    {
      title: 'Air Humidity',
      humidty_first: '-',
    },
    { title: 'Warning', alarm_first: '-', imageUrl: 'assets/temp_warning.png' },
    {
      title: 'Battery Capacity',
      battery_first: '-',
    },
    {
      title: 'Overall Status',
      connection: 'Disconnected',
      lastUpdated: 'None',
    },
  ];

  constructor(private sensorService: SensorService) {}

  ngOnInit() {
     this.sensorService.receiveTemperatureHumidityData().subscribe((data) => {
       const stringData = data.map((value: number) => String(value));
       const currentTime = new Date();
       this.sensorData[1].humidty_first = stringData[0]; // Air Humidity
       this.sensorData[0].temperature_first = stringData[1]; // Air Temperature
       if (stringData[2] == 'FALSE') {
         this.sensorData[2].alarm_first = 'NORMAL'; // Alarm
       } else {
         this.sensorData[2].alarm_first = 'DANGER'; // Alarm
       }
       this.sensorData[3].battery_first = stringData[3] + 'V'; // Battery
       this.sensorData[4].connection = 'Connected';
       this.sensorData[4].lastUpdated =
         currentTime.toLocaleString(); // Last Updated
       console.log('Temperature Humidity Sensor Data:', data);
     });
  }
}

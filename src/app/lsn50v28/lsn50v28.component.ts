import { Component, OnInit } from '@angular/core';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'app-lsn50v28',
  templateUrl: './lsn50v28.component.html',
  styleUrls: ['./lsn50v28.component.css'],
})
export class Lsn50v28Component implements OnInit {
  sensorData = [
    {
      title: 'Air Temperature',
      temperature_third: '-',
    },
    {
      title: 'Illuminance',
      illum_third: '-',
    },
    {
      title: 'Battery Capacity',
      battery_third: '-',
    },
    {
      title: 'Overall Status',
      status: {
        connection: 'Disconnected',
        battery: '-',
        lastUpdated: 'None',
      },
    },
    {
      title: 'lastUpdated',
      connection: 'Connected',
      lastUpdated: '-',
    },
    {},
  ];

  constructor(private sensorService: SensorService) {}

  ngOnInit() {
    this.sensorService.receiveLatestTemperature().subscribe((data) => {});
    this.sensorService.receiveTemperatureLightSensorData().subscribe((data) => {
      const stringData = data.map((value: number) => String(value));
      const currentTime = new Date();
      this.sensorData[4].lastUpdated = currentTime.toLocaleString();
      if (this.sensorData[3] && this.sensorData[3].status) {
        this.sensorData[3].status.lastUpdated = currentTime.toLocaleString(); // Last Updated

        if (stringData[2] !== undefined) {
          this.sensorData[3].status.battery = stringData[2] + 'V'; // Battery
        }
      }

      if (stringData[0] !== undefined) {
        this.sensorData[1].illum_third = stringData[0]; // Illuminance
      }

      if (stringData[1] !== undefined) {
        this.sensorData[0].temperature_third = stringData[1]; // Air Temperature
      }

      console.log('Temperature Light Sensor Data:', data);
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class WorkingHoursService {
  constructor(private readonly http: HttpClient) {}

  public getTrackedHours() {
    return of([
      { category: 'Total Worked Hours', value: 600 },
      { category: 'Total Tracked Hours', value: 400 },
    ]);
  }

  public getCumulativeHours() {
    return of([
      {
        month: 'Mar',
        avgTemp: 6.3,
        cumulativeHours: 302000,
        totalHours: 500000,
      },
      {
        month: 'May',
        avgTemp: 16.2,
        cumulativeHours: 800000,
        totalHours: 1000000,
      },
      {
        month: 'Jul',
        avgTemp: 22.8,
        cumulativeHours: 1254000,
        totalHours: 1500000,
      },
      {
        month: 'Sep',
        avgTemp: 14.5,
        cumulativeHours: 950000,
        totalHours: 1200000,
      },
      {
        month: 'Nov',
        avgTemp: 8.9,
        cumulativeHours: 200000,
        totalHours: 300000,
      },
    ]);
  }
}

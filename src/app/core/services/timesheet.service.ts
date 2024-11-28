import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimesheetSummary } from '../models/timesheet.model';

@Injectable()
export class TimesheetService {
  constructor(
    private readonly http: HttpClient
  ) { }
  
  public getSummary():Observable<TimesheetSummary[]> {
    return of([
      {
        title: 'Timesheet Expected',
        value: 500,
        status: 'up',
        percentage: 20
      },
      {
        title: 'Timesheet Created',
        value: 300,
        status: 'down',
        percentage: 20
      }
      ,{
        title: 'Timesheet Accepted',
        value: 200,
        status: 'up',
        percentage: 20
      },
      {
        title: 'Missing Timesheets',
        value: 100,
        status: 'down',
        percentage: 10
      }
    ])
  }
}
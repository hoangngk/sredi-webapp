import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeTimesheetSummary } from '../models/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  public getEmployeesTimesheetSummary(): Observable<EmployeeTimesheetSummary[]> {
    return of([
      {
        id: 1,
        name: 'Alice Johnson',
        timesheetExpected: 40,
        avatar: 'images/alice.jpg',
        unconfirmedTimesheet: 5,
        confirmedTimesheet: 35,
        missingTimesheet: 0,
      },
      {
        id: 2,
        name: 'Bob Smith',
        timesheetExpected: 38,
        avatar: 'images/jack.jpg',
        unconfirmedTimesheet: 3,
        confirmedTimesheet: 35,
        missingTimesheet: 0,
      },
      {
        id: 3,
        name: 'Carol Williams',
        timesheetExpected: 42,
        avatar: 'images/jack.jpg',
        unconfirmedTimesheet: 2,
        confirmedTimesheet: 40,
        missingTimesheet: 0,
      },
      {
        id: 4,
        name: 'David Brown',
        timesheetExpected: 36,
        avatar: 'images/jack.jpg',
        unconfirmedTimesheet: 4,
        confirmedTimesheet: 32,
        missingTimesheet: 0,
      },
      {
        id: 5,
        name: 'Eve Davis',
        timesheetExpected: 40,
        avatar: 'images/jack.jpg',
        unconfirmedTimesheet: 1,
        confirmedTimesheet: 39,
        missingTimesheet: 0,
      },
    ]);
  }
}

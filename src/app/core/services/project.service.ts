import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectHour } from '../models/project.model';

@Injectable()
export class ProjectService {
  constructor(private readonly http: HttpClient) {}

  public getHours(): Observable<ProjectHour[]> {
    return of([
      { name: 'Project A', hours: 100 },
      { name: 'Project B', hours: 200 },
      { name: 'Project C', hours: 300 },
      { name: 'Project D', hours: 400 },
      { name: 'Project E', hours: 500 },
      { name: 'Project F', hours: 600 },
      { name: 'Project G', hours: 700 },
      { name: 'Project H', hours: 800 },
      { name: 'Project I', hours: 900 },
      { name: 'Project J', hours: 1000 },
      { name: 'Project K', hours: 1100 },
      { name: 'Project L', hours: 1200 },
      { name: 'Project M', hours: 1300 },
      { name: 'Project N', hours: 1400 },
      { name: 'Project O', hours: 1500 },
    ]);
  }
}

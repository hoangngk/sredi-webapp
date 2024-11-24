import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LayoutService {
  
  private sidenavCollapse =  new Subject<boolean>();
  public sidenavCollapse$ = this.sidenavCollapse.asObservable();

  constructor() { }
  
  public showSideNav() {
    this.sidenavCollapse.next(true);
  }

  public hideSideNav() {
    this.sidenavCollapse.next(false);
  }
}
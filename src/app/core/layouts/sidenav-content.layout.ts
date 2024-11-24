import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-sidenav-content-layout',
  standalone: true,
  imports: [
    SidenavComponent,
    HeaderComponent,
    BreadcrumbComponent,
    RouterModule,
  ],
  template: ` <div><router-outlet></router-outlet></div> `,
  styles: [],
  animations: [],
})
export class SidenavContentLayout {}

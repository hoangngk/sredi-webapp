import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav-content-layout',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    HeaderComponent,
    BreadcrumbComponent,
    RouterModule,
    MatSidenavModule
  ],
  template: `
   <mat-sidenav-container class="side-nav-layout-container">
    <mat-sidenav mode="side" opened>
      <app-sidenav></app-sidenav>
    </mat-sidenav>
    <mat-sidenav-content>
      <app-header></app-header>
      <app-breadcrumb></app-breadcrumb>
      <router-outlet></router-outlet>
    </mat-sidenav-content>
  </mat-sidenav-container>`,
  styles: [],
  animations: [],
})
export class SidenavContentLayout {}

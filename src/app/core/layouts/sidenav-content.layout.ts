import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav-content-layout',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    HeaderComponent,
    RouterModule,
    MatSidenavModule,
  ],
  template: ` <mat-sidenav-container class="side-nav-layout-container">
    <mat-sidenav #sidenav mode="side" [(opened)]="opened">
      <app-sidenav></app-sidenav>
    </mat-sidenav>
    <mat-sidenav-content>
      <app-header [sidenav]="sidenav"></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </mat-sidenav-content>
  </mat-sidenav-container>`,
  styles: [
    `
      .side-nav-layout-container {
        height: 100vh;
      }

      mat-sidenav {
        width: 280px;
        background: #ffffff;
        padding: 32px 12px;
        border-right: 1px solid #e0e0e0;
        border-radius: 0;
      }

      mat-sidenav-content {
        background-color: #ffffff;
      }

      main {
        
      }
    `,
  ],
  animations: [],
})
export class SidenavContentLayout {
  public opened = true;
}

import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatDatepickerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public sidenav = input<MatSidenav>();

  public toggleSideNav() {
    this.sidenav()?.toggle();
  }
}

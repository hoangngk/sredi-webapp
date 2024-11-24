import { Component, input, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenav } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatFormFieldModule, MatDatepickerModule, MatButtonModule, MatInputModule, MatToolbarModule, MatBadgeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  public sidenav = input<MatSidenav>();

  public toggleSideNav() {
    this.sidenav()?.toggle();
  }
}

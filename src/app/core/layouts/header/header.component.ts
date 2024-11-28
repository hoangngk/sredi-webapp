import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
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
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatBadgeModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public sidenav = input<MatSidenav>();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry
      .addSvgIcon(
        'toggle-sidenav',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/toggle-sidenav.svg'
        )
      )
      .addSvgIcon(
        'mail',
        this.domSanitizer.bypassSecurityTrustResourceUrl('icons/mail.svg')
      )
      .addSvgIcon(
        'notifications',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/notifications.svg'
        )
      ).addSvgIcon(
        'calendar',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/calendar.svg'
        )
      );
  }

  public toggleSideNav() {
    this.sidenav()?.toggle();
  }
}

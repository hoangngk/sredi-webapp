import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProfileSelectionComponent } from '../../../shared/components/profile-selection/profile-selection.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatSlideToggleModule, ProfileSelectionComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  public submenu = {
    navigation02: false
  };

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry
      .addSvgIcon(
        'home',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/home.svg'
        )
      )
      .addSvgIcon(
        'store',
        this.domSanitizer.bypassSecurityTrustResourceUrl('icons/store.svg')
      )
      .addSvgIcon(
        'settings',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/settings.svg'
        )
      ).addSvgIcon(
        'help',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/help.svg'
        )
      );
  }
  public toggleSubmenu(menu: keyof typeof this.submenu) {
    this.submenu[menu] = !this.submenu[menu];
  }
}

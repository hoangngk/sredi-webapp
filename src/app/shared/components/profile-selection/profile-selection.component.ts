import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MAT_MENU_DEFAULT_OPTIONS, MatMenuModule } from '@angular/material/menu';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-selection',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule],
  templateUrl: './profile-selection.component.html',
  styleUrl: './profile-selection.component.scss',
  providers: [
    {
      provide: MAT_MENU_DEFAULT_OPTIONS,
      useValue: {
        overlayPanelClass: 'profile-selection-menu-panel',
      }
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProfileSelectionComponent {
  public options = [
    { value: 'user', label: 'User' },
    { value: 'admin', label: 'Admin' },
    { value: 'editor', label: 'Editor' },
  ];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry
      .addSvgIcon(
        'arrow-down-simple',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/arrow-down-simple.svg'
        )
      )
  }
}

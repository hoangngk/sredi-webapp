import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProfileSelectionComponent } from '../../../shared/profile-selection/profile-selection.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, MatSlideToggleModule, ProfileSelectionComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent {
  submenu = {
    navigation02: false
  };

  toggleSubmenu(menu: keyof typeof this.submenu) {
    this.submenu[menu] = !this.submenu[menu];
  }
}

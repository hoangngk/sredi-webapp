import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile-selection',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './profile-selection.component.html',
  styleUrl: './profile-selection.component.scss'
})
export class ProfileSelectionComponent {

}

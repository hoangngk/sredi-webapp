import { MatInputModule } from '@angular/material/input';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-table-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './table-card.component.html',
  styleUrl: './table-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCardComponent {
  public title = input.required<string>();

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry
      .addSvgIcon(
        'filter-list',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/filter-list.svg'
        )
      )
      .addSvgIcon(
        'download',
        this.domSanitizer.bypassSecurityTrustResourceUrl('icons/download.svg')
      )
  }
}

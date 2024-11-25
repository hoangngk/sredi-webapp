import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-simple-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './simple-card.component.html',
  styleUrl: './simple-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCardComponent {
  public title = input.required<string>();

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'drag',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'icons/drag.svg'
      )
    );
  }
}

import { Component } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-timesheet-summary',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './timesheet-summary.component.html',
  styleUrl: './timesheet-summary.component.scss'
})
export class TimesheetSummaryComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry
      .addSvgIcon(
        'arrow-green-up',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/arrow-green-up.svg'
        )
      )
      .addSvgIcon(
        'arrow-red-down',
        this.domSanitizer.bypassSecurityTrustResourceUrl('icons/arrow-red-down.svg')
      )
  }
}

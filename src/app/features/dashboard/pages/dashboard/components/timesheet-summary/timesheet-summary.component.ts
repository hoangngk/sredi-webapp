import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TimesheetService } from '../../../../../../core/services/timesheet.service';
import { TimesheetSummary } from '../../../../../../core/models/timesheet';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-timesheet-summary',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './timesheet-summary.component.html',
  styleUrl: './timesheet-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TimesheetService],
})
export class TimesheetSummaryComponent implements OnInit {
  public timesheets: TimesheetSummary[] = [];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private timesheetService: TimesheetService,
    private cdr: ChangeDetectorRef,
    private destroyRef: DestroyRef
  ) {
    this.matIconRegistry
      .addSvgIcon(
        'arrow-green-up',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/arrow-green-up.svg'
        )
      )
      .addSvgIcon(
        'arrow-red-down',
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          'icons/arrow-red-down.svg'
        )
      );
  }

  public ngOnInit(): void {
    this.timesheetService
      .getSummary()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.timesheets = data;
          this.cdr.markForCheck();
        },
      });
  }
}

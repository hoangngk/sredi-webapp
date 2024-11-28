import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
} from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';
import { WorkingHoursService } from '../../../../../../core/services/working-hours.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-overall-hours',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './overall-hours.component.html',
  styleUrl: './overall-hours.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WorkingHoursService],
})
export class OverallHoursComponent implements OnInit {
  public trackedHoursChartOptions!: AgChartOptions;
  public cumulativeHoursChartOptions!: AgChartOptions;

  constructor(
    private workingHoursService: WorkingHoursService,
    private destroyRef: DestroyRef,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.setChartOptions();
    this.setChartData();
  }

  private setChartOptions(): void {
    this.trackedHoursChartOptions = {
      data: [],
      series: [
        {
          type: 'donut',
          calloutLabelKey: 'category',
          angleKey: 'value',
          innerRadiusRatio: 0.5,
          fills: ['#091836', '#03BCF3'],
          innerLabels: [
            {
              text: 'Total Hours',
              fontWeight: 'bold',
              fontSize: 22,
            },
            {
              text: '$100,000',
              spacing: 4,
              fontSize: 22,
              color: 'green',
            },
          ],
        },
      ],
      legend: {
        position: 'bottom',
        item: {
          marker: { shape: 'circle' },
          label: {
            fontSize: 12,
            color: '#6b7280',
          },
        },
      },
      background: {
        fill: '#F7F9FB',
      },
    };

    this.cumulativeHoursChartOptions = {
      data: [],
      series: [
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'cumulativeHours',
          yName: 'Cumulative Hours',
          fill: '#091836',
        },
        {
          type: 'bar',
          xKey: 'month',
          yKey: 'totalHours',
          yName: 'Total Hours',
          fill: ' #03BCF3',
        },
      ],
      legend: {
        position: 'bottom',
        item: {
          marker: { shape: 'circle' },
          label: {
            fontSize: 12,
            color: '#6b7280',
          },
        },
      },
      background: {
        fill: '#F7F9FB',
      },
    };
  }

  private setChartData(): void {
    this.workingHoursService
      .getTrackedHours()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.trackedHoursChartOptions.data = data;
          this.cdr.markForCheck();
        },
      });
    this.workingHoursService
      .getCumulativeHours()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.cumulativeHoursChartOptions.data = data;
          this.cdr.detectChanges();
        },
      });
  }
}

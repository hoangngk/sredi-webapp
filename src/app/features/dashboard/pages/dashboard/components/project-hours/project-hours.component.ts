import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AgChartOptions } from 'ag-charts-community';
import { ProjectService } from '../../../../../../core/services/project.service';
import { AgCharts } from 'ag-charts-angular';

@Component({
  selector: 'app-project-hours',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './project-hours.component.html',
  styleUrl: './project-hours.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProjectService],
})
export class ProjectHoursComponent {
  public projectHoursChartOptions!: AgChartOptions;

  constructor(
    private projectService: ProjectService,
    private destroyRef: DestroyRef,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.setChartOptions();
    this.setChartData();
  }

  private setChartOptions(): void {
    this.projectHoursChartOptions = {
      data: [],
      series: [
        {
          type: 'bar',
          xKey: 'name',
          yKey: 'hours',
          yName: 'hours',
          fill: '#091836',
        },
      ],
      
      background: {
        fill: '#F7F9FB',
      },
    };
  }

  private setChartData(): void {
    this.projectService
      .getHours()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          this.projectHoursChartOptions.data = data;
          this.cdr.markForCheck();
        },
      });
  }
}

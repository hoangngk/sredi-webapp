import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AgCharts } from 'ag-charts-angular';
import { AgChartOptions } from 'ag-charts-community';

@Component({
  selector: 'app-overall-hours',
  standalone: true,
  imports: [AgCharts],
  templateUrl: './overall-hours.component.html',
  styleUrl: './overall-hours.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverallHoursComponent implements OnInit {
  public donutOptions!: AgChartOptions;
  public barOptions!: AgChartOptions;

  public ngOnInit(): void {
    this.donutOptions = {
      data: [
        { category: 'Total Worked Hours', value: 600 },
        { category: 'Total Tracked Hours', value: 400 },
      ],
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

    this.barOptions = {
      data: [
        {
          month: 'Mar',
          avgTemp: 6.3,
          cumulativeHours: 302000,
          totalHours: 500000,
        },
        {
          month: 'May',
          avgTemp: 16.2,
          cumulativeHours: 800000,
          totalHours: 1000000,
        },
        {
          month: 'Jul',
          avgTemp: 22.8,
          cumulativeHours: 1254000,
          totalHours: 1500000,
        },
        {
          month: 'Sep',
          avgTemp: 14.5,
          cumulativeHours: 950000,
          totalHours: 1200000,
        },
        {
          month: 'Nov',
          avgTemp: 8.9,
          cumulativeHours: 200000,
          totalHours: 300000,
        },
      ],
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
}

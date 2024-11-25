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
  public barOptions!: AgChartOptions

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
    };

    this.barOptions = {
      data: [
        { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
        { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
        { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
        { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
        { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
        { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
      ],
      series: [{ type: 'bar', xKey: 'month', yKey: 'iceCreamSales' }]
    };
  }
}

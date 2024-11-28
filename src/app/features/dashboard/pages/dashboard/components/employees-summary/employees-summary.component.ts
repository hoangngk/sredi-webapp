import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AgGridAngular } from '@ag-grid-community/angular';
import { ColDef, ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { EmployeeService } from '../../../../../../core/services/employee.service';
import { EmployeeTimesheetSummary } from '../../../../../../core/models/employee.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-employees-summary',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './employees-summary.component.html',
  styleUrl: './employees-summary.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EmployeeService],
})
export class EmployeesSummaryComponent implements OnInit {
  public rowData: EmployeeTimesheetSummary[] = [];

  public defaultColDef = {
    flex: 1,
    resizable: true,
  };

  public colDefs: ColDef[] = [
    {
      field: 'name',
      headerName: 'Employee',
      cellRenderer: (params: any) => {
        return `
          <div class="employee-name-cell">
            <img src="${params.data.avatar}" alt="${params.data.name}" class="employee-avatar" />
            <span>${params.data.name}</span>
          </div>
        `;
      },
    },
    { field: 'timesheetExpected' },
    { field: 'unconfirmedTimesheet' },
    { field: 'confirmedTimesheet' },
    {
      field: 'missingTimesheet',
      headerName: 'Missing Timesheet',
      cellRenderer: (params: any) => {
        return `
        <div class="employee-missing-timesheet-cell">
          <span>${params.data.missingTimesheet}&nbsp;</span>
          <a href="">Notify User</a>
        </div>
      `;
      },
    },
  ];

  constructor(private employeeService: EmployeeService, private cdr: ChangeDetectorRef, private destroyRef: DestroyRef) {}

  public ngOnInit(): void {
    this.getEmployeesTimesheetSummary();
  }

  private getEmployeesTimesheetSummary() {
    return this.employeeService.getEmployeesTimesheetSummary().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data: EmployeeTimesheetSummary[]) => {
        this.rowData = data;
        this.cdr.markForCheck();
      },
    });
  }
}

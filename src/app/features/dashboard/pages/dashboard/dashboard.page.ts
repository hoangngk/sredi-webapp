import { WelcomeComponent } from '../../../../shared/components/welcome/welcome.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IntegrationsComponent } from '../../../../shared/components/integrations/integrations.component';
import { OverallHoursComponent } from './components/overall-hours/overall-hours.component';
import { MatCardModule } from '@angular/material/card';
import { SimpleCardComponent } from '../../../../core/components/simple-card/simple-card.component';
import { TimesheetSummaryComponent } from "./components/timesheet-summary/timesheet-summary.component";
import { ProjectHoursComponent } from "./components/project-hours/project-hours.component";
import { TableCardComponent } from "../../../../core/components/table-card/table-card.component";
import { EmployeesSummaryComponent } from "./components/employees-summary/employees-summary.component";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    WelcomeComponent,
    IntegrationsComponent,
    OverallHoursComponent,
    SimpleCardComponent,
    MatCardModule,
    TimesheetSummaryComponent,
    ProjectHoursComponent,
    TableCardComponent,
    EmployeesSummaryComponent
],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {}

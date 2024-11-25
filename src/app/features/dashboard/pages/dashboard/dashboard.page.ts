import { WelcomeComponent } from '../../../../shared/components/welcome/welcome.component';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IntegrationsComponent } from '../../../../shared/components/integrations/integrations.component';
import { OverallHoursComponent } from '../../../../shared/components/overall-hours/overall-hours.component';
import { MatCardModule } from '@angular/material/card';
import { SimpleCardComponent } from '../../../../core/components/simple-card/simple-card.component';
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
    MatCardModule
  ],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {}

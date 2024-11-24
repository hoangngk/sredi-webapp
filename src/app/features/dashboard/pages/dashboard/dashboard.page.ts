import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss'
})
export class DashboardPage {}

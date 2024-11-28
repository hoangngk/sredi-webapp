export interface TimesheetSummary {
  title: string;
  value: number;
  status: 'up' | 'down';
  percentage: number;
}
export interface EmployeeTimesheetSummary {
  id: number;
  name: string;
  timesheetExpected: number;
  avatar: string;
  unconfirmedTimesheet: number;
  confirmedTimesheet: number;
  missingTimesheet: number;
}
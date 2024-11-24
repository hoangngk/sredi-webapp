import { Component } from "@angular/core";

@Component({
  selector: "app-content-layout",
  template: `
    <ng-content></ng-content>
  `,
})
export class ContentLayoutComponent {}
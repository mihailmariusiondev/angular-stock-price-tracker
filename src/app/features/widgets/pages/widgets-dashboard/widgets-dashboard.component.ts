import { Component } from '@angular/core';

@Component({
  selector: 'app-widgets-dashboard',
  templateUrl: './widgets-dashboard.component.html',
  styleUrls: ['./widgets-dashboard.component.scss']
})
export class WidgetsDashboardComponent {

  tabSelected = 0;
  tabsLoad: Array<number> = [this.tabSelected];

  onChangeTab(index: number) {
    this.tabSelected = index;

    if (!this.tabsLoad.includes(index)) {
      this.tabsLoad.push(index);
    }
  }
}

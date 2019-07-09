import {Component} from '@angular/core';

import {IFloatingFilter, IFloatingFilterParams, NumberFilter, NumberFilterModel} from 'ag-grid-community';
import {AgFrameworkComponent} from 'ag-grid-angular';

export interface SliderFloatingFilterParams extends IFloatingFilterParams {
  value: number;
  maxValue: number;
}

@Component({
  template: `
        <input type="range"
               min="30000" [max]="maxValue"
               data-show-value="true" data-popup-enabled="true"
               [(ngModel)]="currentValue"
               (ngModelChange)="valueChanged()"/>`
})
export class SliderFloatingFilterComponent implements IFloatingFilter, AgFrameworkComponent<SliderFloatingFilterParams> {

  private params: SliderFloatingFilterParams;

  public maxValue: number;
  public currentValue: number;

  agInit(params: SliderFloatingFilterParams): void {
    this.params = params;
    this.maxValue = this.params.maxValue;
    this.currentValue = 20000;
  }

  valueChanged() {
    const valueToUse = (this.currentValue === 20000) ? null : this.currentValue;
    this.params.parentFilterInstance( instance => {
      (instance as NumberFilter).onFloatingFilterChanged('greaterThan', valueToUse);
    });
  }

  onParentModelChanged(parentModel: NumberFilterModel): void {
    if (!parentModel) {
      this.currentValue = 0;
    } else {
      // note that the filter could be anything here, but our purposes we're assuming a greater than filter only,
      // so just read off the value and use that
      this.currentValue = parentModel.filter;
    }
  }

}

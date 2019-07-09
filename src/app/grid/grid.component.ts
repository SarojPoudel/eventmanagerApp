import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SliderFloatingFilterComponent} from './slider-floating-filter/slider-floating-filter.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  rowData: any;
  private frameworkComponents;
  private columnDefs;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {headerName: 'Make', field: 'make', sortable: true, filter: 'agTextColumnFilter'},
      {headerName: 'Model', field: 'model', sortable: true, filter: 'agTextColumnFilter'},
      {
        headerName: 'Price',
        field: 'price',
        floatingFilterComponent: 'sliderFloatingFilter',
        floatingFilterComponentParams: {
          maxValue: 72000,
          suppressFilterButton: true
        },
        filter: 'agNumberColumnFilter',
        suppressMenu: false
      }
    ];
    this.frameworkComponents = {sliderFloatingFilter: SliderFloatingFilterComponent};
  }

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
}

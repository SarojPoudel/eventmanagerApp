import { Component, OnInit } from '@angular/core';
import {FormioForm, FormioOptions} from 'angular-formio';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public form: FormioForm = { components: [] };
  public formOptions: FormioOptions = {};
  constructor() { }

  ngOnInit() {
  }
  formChanged(event: any) {
    console.log('form changed', event);
  }
}

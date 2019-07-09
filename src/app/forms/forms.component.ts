import {Component, OnInit} from '@angular/core';
import {FormioForm, FormioOptions} from 'angular-formio';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  // public form: FormioForm = { components: [] };
  public formOptions: FormioOptions = {};

  form = {
    components: [{
      input: true,
      tableView: true,
      inputType: 'text',
      inputMask: '',
      label: 'First Name',
      key: 'firstName',
      placeholder: 'Enter your first name',
      prefix: '',
      suffix: '',
      multiple: false,
      defaultValue: '',
      protected: false,
      unique: false,
      persistent: true,
      validate: {
        required: false,
        minLength: '',
        maxLength: '',
        pattern: '',
        custom: '',
        customPrivate: false
      },
      conditional: {
        show: false,
        when: null,
        eq: ''
      },
      type: 'textfield'
    }, {
      input: true,
      tableView: true,
      inputType: 'text',
      inputMask: '',
      label: 'Last Name',
      key: 'lastName',
      placeholder: 'Enter your last name',
      prefix: '',
      suffix: '',
      multiple: false,
      defaultValue: '',
      protected: false,
      unique: false,
      persistent: true,
      validate: {
        required: false,
        minLength: '',
        maxLength: '',
        pattern: '',
        custom: '',
        customPrivate: false
      },
      conditional: {
        show: false,
        when: null,
        eq: ''
      },
      type: 'textfield'
    }, {
      input: true,
      tableView: true,
      label: 'Message',
      key: 'message',
      placeholder: 'What do you think?',
      prefix: '',
      suffix: '',
      rows: 3,
      multiple: false,
      defaultValue: '',
      protected: false,
      persistent: true,
      validate: {
        required: false,
        minLength: '',
        maxLength: '',
        pattern: '',
        custom: ''
      },
      type: 'textarea',
      conditional: {
        show: false,
        when: null,
        eq: ''
      }
    }, {
      type: 'button',
      theme: 'primary',
      disableOnInvalid: true,
      action: 'submit',
      block: false,
      rightIcon: '',
      leftIcon: '',
      size: 'md',
      key: 'submit',
      tableView: false,
      label: 'Submit',
      input: true
    }]
  };

  constructor() {
  }

  ngOnInit() {
  }

  formChanged(event: any) {
    console.log('form changed', event);
  }
}

import {Component, OnInit} from '@angular/core';
import {FormioAuthService} from 'angular-formio/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;

  constructor(private auth: FormioAuthService) {
      this.name = auth.user.data.email;
  }

  ngOnInit() {
  }

}

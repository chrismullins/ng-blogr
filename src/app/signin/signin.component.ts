import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: ['input.ng-invalid.ng-touched { border: 1px solid red}']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    this.authService.emailLogin(form.value.email, form.value.password);
  }

}

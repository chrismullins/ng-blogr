import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: ['input.ng-invalid.ng-touched { border: 1px solid red}']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.authService.emailSignUp(form.value.email, form.value.password);
  }

}

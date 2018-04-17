import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: ['input.ng-invalid.ng-touched { border: 1px solid red}']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log(form);
  }

}

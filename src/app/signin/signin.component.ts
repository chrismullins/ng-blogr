import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: ['input.ng-invalid.ng-touched { border: 1px solid red}']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    console.log(form);
  }

}

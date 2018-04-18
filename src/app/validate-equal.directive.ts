import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, NgModel } from '@angular/forms';

@Directive({
  selector: '[appValidateEqual]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidateEqualDirective, multi: true}]
})
export class ValidateEqualDirective implements Validator {
  @Input() passwordElement: NgModel;

  constructor(private el: ElementRef) {}

   validate(c: AbstractControl): { [key: string]: any} {
     return this.el.nativeElement.value === this.passwordElement.value ? null : { validateEqual: false};
   }

}

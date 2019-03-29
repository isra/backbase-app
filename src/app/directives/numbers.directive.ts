import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbers]'
})
export class NumbersDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('keyup', ['$event'])
  keyup() {
    let originalValue;
    // const regexp: RegExp = new RegExp(/[^0-9a-zA-Z]/g);
    const regexp: RegExp = new RegExp(/[^0-9]/g);
    originalValue = this.el.nativeElement.value;
    const newValue = originalValue.replace(regexp, '');
    this.el.nativeElement.value = newValue;
}

}

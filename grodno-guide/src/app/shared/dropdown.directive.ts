import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const pageYOffset = window.pageYOffset;
    if (pageYOffset < 1000) {
      this.el.nativeElement.style.display = `none`;
    } else {
      this.el.nativeElement.style.display = `block`;
    }
  }


}




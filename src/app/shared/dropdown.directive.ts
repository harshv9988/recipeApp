import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  //   @HostBinding('class.open') classL: boolean = false;  //another small method by Max
  //   @HostListener('click') toggleOpen(){
  //       this.classL = !this.classL;
  //   }
  open: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  //   @HostListener('click') toggleOpen(eventdata: Event) {
  //     if (this.open) {
  //       this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //       this.open = false;
  //     } else {
  //       this.renderer.addClass(this.elRef.nativeElement, 'open');
  //       this.open = true;
  //     }
  //   }

  @HostListener('document:click', ['$event']) toggleOpen2(event: Event) {
    if (this.elRef.nativeElement.contains(event.target)) {
      if (this.open) {
        this.renderer.removeClass(this.elRef.nativeElement, 'open');
        this.open = false;
      } else {
        this.renderer.addClass(this.elRef.nativeElement, 'open');
        this.open = true;
      }
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.open = false;
    }
  }
}

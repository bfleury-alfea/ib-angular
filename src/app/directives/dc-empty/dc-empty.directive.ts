import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDCEmpty]'
})
export class DCEmptyDirective {

  constructor(
    private element: ElementRef,
    private renderer2: Renderer2,
  ) {
  }

  @HostListener('dblclick')
  onDoubleClick() {
    this.renderer2.setProperty(this.element.nativeElement, 'value', '');
  }
}

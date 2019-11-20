import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBg]'
})
export class BgDirective implements OnInit {
  @Input('appBg') color: string;

  constructor(
    private element: ElementRef,
    private renderer2: Renderer2,
  ) {
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  changeBG(event) {
    this.renderer2.setStyle(this.element.nativeElement, 'background-color', (event.type === 'mouseenter' ? this.color : null));
  }
}

import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Optional, Renderer2} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {
  @Input() appTest: string;
  @HostBinding('style.color') color: string;

  constructor(
    private element: ElementRef,
    private renderer2: Renderer2,
    @Optional() private control: NgControl
  ) {
  }

  @HostBinding('class.is-valid')
  get isValid() {
    if (null === this.control) {
      return false;
    }

    return this.control.valid;
  }

  ngOnInit() {
    this.renderer2.setStyle(this.element.nativeElement, 'font-weight', 'bold');
    this.renderer2.setProperty(this.element.nativeElement, 'innerHTML', 'Eh bah non, pas de lorem !!');
    this.color = 'red';
  }

  @HostListener('click')
  listen() {
    console.log('A cliqué');
  }

  @HostListener('window:scroll', ['$event'])
  scroll(event) {
    console.log('Scroll');
    console.log(event.currentTarget.scrollY);
  }

  @HostListener('window:resize', ['$event'])
  resize(event) {
    console.log('Resize');
    console.log(event);
  }
}

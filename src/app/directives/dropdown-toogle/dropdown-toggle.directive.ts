import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective implements OnInit {

  constructor(
    private element: ElementRef,
    private renderer2: Renderer2,
  ) {
  }

  ngOnInit() {
  }

  @HostListener('click')
  toggleDropdown() {
    const menu = this.element.nativeElement.nextElementSibling;
    const parent = this.element.nativeElement.parentNode;

    if (menu.classList.contains('show')) {
      this.renderer2.removeClass(menu, 'show');
      this.renderer2.removeClass(parent, 'show');
    } else {
      this.renderer2.addClass(menu, 'show');
      this.renderer2.addClass(parent, 'show');
    }
  }
}

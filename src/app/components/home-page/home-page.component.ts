import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  color: string;
  @ViewChild('search', { static: false }) search: NgModel;

  constructor() {
  }

  ngOnInit() {
    this.color = 'blue';
  }

  ngAfterViewInit() {
    console.log(this.search);
  }
}

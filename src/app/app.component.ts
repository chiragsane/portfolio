import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'pf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  nextSlide() {
    console.log('next');
  }
  prevSlide() {
    console.log('prev');
  }
}

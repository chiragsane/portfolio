import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'pf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentView = 0;
  constructor() { }
  ngOnInit() {
  }
  nextSlide() {
    document.getElementById(`view-${this.currentView}`).classList.remove('this');
    document.getElementById(`view-${this.currentView}`).classList.add('prev');
    this.currentView++;
    document.getElementById(`view-${this.currentView}`).classList.remove('next');
    document.getElementById(`view-${this.currentView}`).classList.add('this');
  }
  prevSlide() {
    document.getElementById(`view-${this.currentView}`).classList.remove('this');
    document.getElementById(`view-${this.currentView}`).classList.add('next');
    this.currentView--;
    document.getElementById(`view-${this.currentView}`).classList.remove('prev');
    document.getElementById(`view-${this.currentView}`).classList.add('this');
  }
  scrolled(e) {
    console.log(e);
  }
}

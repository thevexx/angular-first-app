import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myBoolean = false;

  myArray = [
    { name: 'Note8', price: 3000 },
    { name: 'Note5', price: 400 },
    { name: 'Note7', price: 1200 }
  ];

  constructor() { }

  ngOnInit() {
  }

  hideBtnClick() {
    this.myBoolean = !this.myBoolean;
  }

}

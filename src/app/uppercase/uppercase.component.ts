import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent implements OnInit {

  textToUppercase: string;
  lowCaseChars = 'abcdefghijklmnopqrstuvwxyz';

  constructor() { }



  ngOnInit() {
  }

  textChanged(event) {
    // console.log(this.textToUppercase.charAt(this.textToUppercase.length - 1));
    const last_c = this.textToUppercase.charAt(this.textToUppercase.length - 1);
    if (this.lowCaseChars.includes(last_c)) {
        const c_code = last_c.charCodeAt(0);
        let s = '';
        s = String.fromCharCode(c_code - 32);
        console.log(s);
        this.textToUppercase = this.textToUppercase.substring(0, this.textToUppercase.length - 1) + s;
    }
  }
}


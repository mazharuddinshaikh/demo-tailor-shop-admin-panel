import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dts-main',
  templateUrl: './dts-main.component.html',
  styleUrls: ['./dts-main.component.css']
})
export class DtsMainComponent implements OnInit {
  // public childFilterItem: string;
  constructor() { }

  ngOnInit(): void {
  }

  // dressTypeClicked(dressType: string) {
  //   this.childFilterItem = dressType;
  //   console.log('event clicked from main' + dressType)
  // }

}

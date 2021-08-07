import { Component, Input, OnInit } from '@angular/core';
import { Dress } from '../model/dress';

@Component({
  selector: 'app-dts-product-detail',
  templateUrl: './dts-product-detail.component.html',
  styleUrls: ['./dts-product-detail.component.css']
})
export class DtsProductDetailComponent implements OnInit {
  @Input() inputDress: Dress;
  constructor() { 

  }

  ngOnInit(): void {
    console.log('From product details');
  if(this.inputDress){
    console.log('got dress - dress details' + this.inputDress);
  } else {
    console.log('Null - dress details' + this.inputDress);
  }
  }

  closeProductDetail(){
    if(this.inputDress){
      // this.inputDress = null;
    }
    console.log('close dress details')
  }

}

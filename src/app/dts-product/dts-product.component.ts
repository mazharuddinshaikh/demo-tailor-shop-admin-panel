import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dress } from '../model/dress';
import { DtsProductService } from '../service/dts-product.service';
import { MeasurementService } from '../service/measurement.service';

@Component({
  selector: 'app-dts-product',
  templateUrl: './dts-product.component.html',
  styleUrls: ['./dts-product.component.css']
})
export class DtsProductComponent implements OnInit {
  transferDress: Dress;
  dressList: Dress[];
  // @Input() filterInput: string;



  constructor(private dtsProductService: DtsProductService, private measurementService: MeasurementService) {
    console.log('constructor product compoennt')
    this.showDressList('all');
    // this.dressList = this.getDressList(0);
    // if (this.filterInput === null) {
    //   console.log('product component null' + this.filterInput)
    // }  else {
    //   console.log('product component not null' + this.filterInput)
    // }

  }

  ngOnInit(): void {
    console.log('on init fom product');
    this.dtsProductService.notifyDressListObservable.subscribe(result => {
      if (result) {
        // this.dressList = this.getDressList(result);
        this.showDressList(result);
      }
    });
  }


  showDressList(dressType: string): void {
    this.dtsProductService.getProductList(dressType).subscribe(data => {
      console.log('dress api called' + data)
      this.dressList = data;
    });

  }

  showProductDetail(dress: Dress): void {
    console.log('productdetailsc called ' + dress.dressTypeId)
    this.measurementService.getMeasurementDetails(dress.dressId).subscribe(measurements => {
      dress.measurements = measurements;
      this.transferDress = dress;
    });
  }


}

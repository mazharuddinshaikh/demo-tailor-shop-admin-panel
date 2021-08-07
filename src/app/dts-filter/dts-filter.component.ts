import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { DressType } from '../model/dress-type';
import { DtsDressTypeService } from '../service/dts-dress-type.service';
import { DtsProductService } from '../service/dts-product.service';

@Component({
  selector: 'app-dts-filter',
  templateUrl: './dts-filter.component.html',
  styleUrls: ['./dts-filter.component.css']
})
export class DtsFilterComponent implements OnInit {
  dressTypeList: DressType[];

  // @Output() dressTypeClickedOutputEvent = new EventEmitter<string>();

  constructor(private filterService: DtsDressTypeService, private dtsProductService: DtsProductService) {
    this.getDressTypeList();
    // this.dressTypeClickedOutputEvent.emit('Kurta');
  }

  ngOnInit(): void {
  }
  getDressTypeList(): void {
    console.log("hello world serveice");
    this.filterService.getDressTypesList().subscribe(data => {
      this.dressTypeList = data;
    })
    console.log(this.dressTypeList);
  }

  updateDressList(dressType: string): void {
    console.log('clicked from filter component' + dressType);
    this.dtsProductService.notifyOther(dressType);
    // this.dressTypeClickedOutputEvent.emit(filterItem);
  }

}

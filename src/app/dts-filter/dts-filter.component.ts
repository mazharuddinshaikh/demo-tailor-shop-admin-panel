import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { DressType } from '../model/dress-type';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';
import { DtsDressTypeService } from '../service/dts-dress-type.service';
import { DtsProductService } from '../service/dts-product.service';

@Component({
  selector: 'app-dts-filter',
  templateUrl: './dts-filter.component.html',
  styleUrls: ['./dts-filter.component.css']
})
export class DtsFilterComponent implements OnInit {
  dressTypeList: DressType[];
  // public user: User;
  // public authToken: string;

  // @Output() dressTypeClickedOutputEvent = new EventEmitter<string>();

  constructor(private filterService: DtsDressTypeService, private dtsProductService: DtsProductService, private authService: AuthenticationService) {
    // this.dressTypeClickedOutputEvent.emit('Kurta');
    let authToken = authService.getAuthToken();
    // redirect to login if aut token is empty
    if (authToken) {

    }
    // get dress type 
    this.getDressTypeList(authToken);
  }

  ngOnInit(): void {
  }

  getDressTypeList(authToken: string): void {
    this.filterService.getDressTypesList(authToken).subscribe(data => {
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

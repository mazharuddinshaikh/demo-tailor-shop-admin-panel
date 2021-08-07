import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Dress } from '../model/dress';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DtsProductService {
  public notifyDressList = new BehaviorSubject<string>('');
  notifyDressListObservable = this.notifyDressList.asObservable();

  constructor(private httpClient: HttpClient) { }

  public notifyOther(dressType: string) {
    console.log('notify other called' + dressType);
    if (dressType) {
      this.notifyDressList.next(dressType);
    }
  }

  // public getProductList(dressType: string): Dress[] {
  //   console.log('From service' + dressType)
  //   let dresses: Dress[] = [
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'shirt.jpeg', dressType: 'shirt'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'pant.jpeg', dressType: 'pant'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'kurta.jpg', dressType: 'kurta'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'pathani.jpg', dressType: 'pathani'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'safari.jpg', dressType: 'safari'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'dress.jpg', dressType: 'dress'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'shirt.jpeg', dressType: 'shirt'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'pant.jpeg', dressType: 'pant'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'kurta.jpg', dressType: 'kurta'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'pathani.jpg', dressType: 'pathani'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'safari.jpg', dressType: 'safari'
  //     },
  //     {
  //       dressId: 1, orderDate: '09/june/2021', deliverydate: '10/june/2021', dressImage: 'dress.jpg', dressType: 'dress'
  //     }
  //   ];
  //   if(dressType !== 'all'){
  //     dresses = dresses.filter(dress => dress.dressType === dressType);
  //   }

  //   return dresses;

  // }

  public getProductList(dressType: string): Observable<Dress[]> {

    console.log('From service' + dressType)
    if(dressType === 'all'){
      return this.httpClient.get<Dress[]>(`${environment.baseUri}api/v1/dress/allDress`);
    } else {
      return this.httpClient.get<Dress[]>(`${environment.baseUri}api/v1/dress/allDress/${dressType}`);
    }
    
  }
}

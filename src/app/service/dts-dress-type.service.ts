import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DressType } from '../model/dress-type';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DtsDressTypeService {

  constructor(private httpClient: HttpClient) { }
  // public getDressTypeList(): DressType[] {
  //   let dressTypes: DressType[] = [
  //     {
  //       typeId: 1, typeName: 'shirt'
  //     },
  //     {
  //       typeId: 2, typeName: 'pant'
  //     },
  //     {
  //       typeId: 3, typeName: 'kurta'
  //     },
  //     {
  //       typeId: 4, typeName: 'pathani'
  //     },
  //     {
  //       typeId: 5, typeName: 'safari', typeDescription: '(Shirt, Pant)'
  //     },
  //     {
  //       typeId: 5, typeName: 'dress', typeDescription: '(Shirt, Pant)'
  //     }

  //   ]
  //   return dressTypes;
  // }

  public getDressTypesList(): Observable<DressType[]> {
    return this.httpClient.get<DressType[]>(environment.baseUri + "api/v1/dressTypes/allDressTypes");
  }
}

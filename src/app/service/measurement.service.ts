import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Measurement } from '../model/measurement';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private httpClient: HttpClient) { }

  // http://localhost:8081/api/v1/measurements/measurement?dressId=1000

  public getMeasurementDetails(dressId: number): Observable<Measurement[]> {
    
    let params = new HttpParams();
    params.set('dressId', String(dressId));
    return this.httpClient.get<Measurement[]>(`${environment.baseUri}api/v1/measurements/measurement`,
      { params: params }
    );
  }
}

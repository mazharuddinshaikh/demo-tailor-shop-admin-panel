import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Measurement } from '../model/measurement';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  // http://localhost:8081/api/v1/measurements/measurement?dressId=1000

  public getMeasurementDetails(dressId: number): Observable<Measurement[]> {
    console.log(' Measuremetn Service open measuremetn details')
    let params = new HttpParams();
    let authToken: string = this.authService.getAuthToken();
    params.set('dressId', String(dressId));
    return this.httpClient.get<Measurement[]>(`${environment.baseUri}/api/v1/measurements/measurement`,
      {
        params: params,
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }
    );
  }
}

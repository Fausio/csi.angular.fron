import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { householdPage } from '../interface/HouseholdPage';

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.apiBaseUrl;

  public read(): Observable<householdPage> {
    return this.http.get<householdPage>(`${this.baseUrl}/household`);
  }

  public paging(pageNumber: number): Observable<householdPage> {
    return this.http.get<householdPage>(`${this.baseUrl}/household?PageNumber=`+pageNumber );
}
 // ?PageNumber=1
}

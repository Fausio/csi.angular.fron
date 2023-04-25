import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { householdPage } from '../../interface/household/householdPage';
import { dropdown } from 'src/app/interface/dto/dropdown';
import { householdDTO } from 'src/app/interface/household/household.model';

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.apiBaseUrl;



  public read(): Observable<householdPage> {
    return this.http.get<householdPage>(`${this.baseUrl}/household`);
  }

  public readById(id: number): Observable<householdDTO> {
    return this.http.get<householdDTO>(`${this.baseUrl}/household/` + id);
  }


  public create(model: any): Observable<householdDTO> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }


    return this.http.post<householdDTO>(`${this.baseUrl}/household`, model, httpOptions);
  }


  public update(model: any): Observable<householdDTO> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
 
    return this.http.put<householdDTO>(`${this.baseUrl}/household`, model, httpOptions);
  }


  public paging(pageNumber: number): Observable<householdPage> {
    return this.http.get<householdPage>(`${this.baseUrl}/household?PageNumber=` + pageNumber);
  }
  public search(searchTxt: string): Observable<householdPage> {
    return this.http.get<householdPage>(`${this.baseUrl}/Household/search?search=` + searchTxt);
  }


  public readFamilyHead(): Observable<dropdown[]> {
    return this.http.get<dropdown[]>(`${this.baseUrl}/Household/ReadFamilyHead`);
  }

  public readFamilyOriginRef(): Observable<dropdown[]> {
    return this.http.get<dropdown[]>(`${this.baseUrl}/Household/ReadFamilyOriginRef`);
  }

  public readPartners(): Observable<dropdown[]> {
    return this.http.get<dropdown[]>(`${this.baseUrl}/Household/ReadPartners`);
  }



}

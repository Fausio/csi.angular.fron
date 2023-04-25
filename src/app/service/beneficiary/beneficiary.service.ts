import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { beneficiaryPage } from 'src/app/interface/beneficiary/beneficiaryPage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
 
  constructor(private http: HttpClient) { }

  private baseUrl = environment.apiBaseUrl;



  public read(): Observable<beneficiaryPage> {
    return this.http.get<beneficiaryPage>(`${this.baseUrl}/beneficiary`);
  }

  public paging(pageNumber: number): Observable<beneficiaryPage> {
    return this.http.get<beneficiaryPage>(`${this.baseUrl}/beneficiary?PageNumber=` + pageNumber);
  }

  public search(searchTxt: string): Observable<beneficiaryPage> {
    return this.http.get<beneficiaryPage>(`${this.baseUrl}/beneficiary/search?search=` + searchTxt);
  }

    public getByHouseholdId(householdId: number): Observable<beneficiaryPage> {
    return this.http.get<beneficiaryPage>(`${this.baseUrl}/Beneficiary/getByHouseholdId?householdID=`+ householdId);
  }  
}

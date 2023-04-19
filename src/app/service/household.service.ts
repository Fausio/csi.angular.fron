import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { householdDTO } from '../interface/household.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.apiBaseUrl;

  public read(): Observable<householdDTO[]> {
    return this.http.get<householdDTO[]>(`${this.baseUrl}/household`);
  }

/*   public ReadById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.backEndServerUrl}/employee/read/` + id)
} */

}

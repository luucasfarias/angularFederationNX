import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './nx-welcome.component';

const API_ROUTER = 'http://app.anymarket.com.br/rest';
const API_URL = 'api/seller/profile';

// const PATH = '/apps/catalog-team/src/app/remote-entry/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http: HttpClient) { }

  // getDate(): Observable<any> {
  //   return this.http.get<any>(`${API_ROUTER}/${API_URL}/getOptions`);
  // }

  // getCategories(): Observable<Category[]> {
  //   return this.values;
  // }
}

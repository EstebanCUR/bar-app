import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8002/api/Products/AllProducts';

  constructor(private http: HttpClient) { }

  getProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.apiUrl)
  }
}

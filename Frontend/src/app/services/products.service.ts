import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  changeAmountProducts = new BehaviorSubject<IProduct[]>([])
}

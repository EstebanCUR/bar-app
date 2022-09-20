import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class AddProductsService {

  total = new BehaviorSubject<number>(0)

  newArrayProductsService: IProduct[] = []

  confirmProducts = new BehaviorSubject<IProduct[]>([])

  constructor() { }

  addAmount(add:IProduct){
    if(!this.newArrayProductsService.includes(add)){
      this.newArrayProductsService.push(add)
    }
  }

  removeAmount(remove:IProduct){
    if(this.newArrayProductsService.includes(remove)){
      let deleteArray = this.newArrayProductsService.indexOf(remove)
      this.newArrayProductsService.splice(deleteArray, 1)
      this.newArrayProductsService.push(remove)
    }
  }
}

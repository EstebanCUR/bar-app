import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/models/products.interface';
import { AddProductsService } from 'src/app/services/add-products.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  total: number = 0
  count: number = 0



  listSelected: IProduct[] = []

  selectedProductsAdded: IProduct[] = []

  constructor(private _productsService: ProductsService, private _addProducts: AddProductsService) {

    this._productsService.changeAmountProducts.subscribe(productAdd =>{
      this.listSelected = productAdd
      return this.listSelected
    })
  }

  ngOnInit(): void {
  }

  saveAmountAdded(product: IProduct){
    this.selectedProductsAdded.push(product)
    console.log('Almacenado papu: ',this.selectedProductsAdded)
    this.total += product.price
    this._addProducts.total.next(this.total)
  }

  saveAmountRemoved(product: IProduct){
    if(this.selectedProductsAdded.includes(product)){
      let deleteArray = this.selectedProductsAdded.indexOf(product)
      this.selectedProductsAdded.splice(deleteArray, 1)
      this.total -= product.price
      this._addProducts.total.next(this.total)
    }
  }
}

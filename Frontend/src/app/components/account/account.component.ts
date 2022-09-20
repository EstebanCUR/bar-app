import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/products.interface';
import { AddProductsService } from 'src/app/services/add-products.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  total: number = 0

  showProductsAdded: IProduct[] = []

  constructor(private _addProducts: AddProductsService) {
    this._addProducts.total.subscribe(totalStorage =>{
      this.total = totalStorage
    })

    this._addProducts.newArrayProductsService.forEach(products =>{
      this.showProductsAdded.push(products)
      console.log('Estoy recibiendo: ', this.showProductsAdded)
    })
  }

  ngOnInit(): void {
  }

  removeClick(product: IProduct){
    if(this.showProductsAdded.includes(product)){
      let deleteArray = this.showProductsAdded.indexOf(product)
      this.showProductsAdded.splice(deleteArray, 1)
      this.total -= product.price * product.cantidad.value
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/products.interface';
import { AddProductsService } from 'src/app/services/add-products.service';

@Component({
  selector: 'app-confirm-products',
  templateUrl: './confirm-products.component.html',
  styleUrls: ['./confirm-products.component.scss']
})
export class ConfirmProductsComponent implements OnInit {

  totalPrev: number = 0
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
    /* this._addProducts.confirmProducts.subscribe(products =>{
      this.showProductsAdded = products
      console.log('Estoy recibiendo: ', this.showProductsAdded)
    }) */
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

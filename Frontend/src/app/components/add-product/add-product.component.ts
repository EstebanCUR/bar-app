import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IProduct } from 'src/app/models/products.interface';
import { AddProductsService } from 'src/app/services/add-products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  count: number = 0

  newArrayProducts: IProduct[] = []

  @Input('myProduct')  product: IProduct = {product:"", category: "",price:0, status:false , checkbox: new FormControl(false), cantidad: new FormControl(0) }

  @Output() addedProduct = new EventEmitter<IProduct>();
  @Output() removedProduct = new EventEmitter<IProduct>();
  constructor(private _addProducts: AddProductsService) { }

  ngOnInit(): void {
  }

  addAmount(){
    this.count += 1
    this.product.cantidad.setValue(this.count)
    this.addedProduct.emit(this.product)
    if(!this.newArrayProducts.includes(this.product)){
      this.newArrayProducts.push(this.product)
      this._addProducts.addAmount(this.product)
    }
    /* this._addProducts.confirmProducts.next(this.newArrayProducts) */

    console.log('Enviando: ',this.newArrayProducts)
  }

  removeAmount(){
    if(this.product.cantidad.value > 0){
      this.count -= 1
      this.product.cantidad.setValue(this.count)
      this.removedProduct.emit(this.product)
      if(this.newArrayProducts.includes(this.product)){
        let deleteArray = this.newArrayProducts.indexOf(this.product)
        this.newArrayProducts.splice(deleteArray, 1)
        this.newArrayProducts.push(this.product)
        this._addProducts.removeAmount(this.product)
        /* this._addProducts.confirmProducts.next(this.newArrayProducts) */
      }
    }
  }

}

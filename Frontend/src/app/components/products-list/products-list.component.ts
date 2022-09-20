import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IProduct } from 'src/app/models/products.interface';
import { ApiService } from 'src/app/services/api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  listProducts: IProduct[] = [];

  selectedProductsTotal: IProduct[] = []

  constructor(private _consumoServ: ApiService, private _productsService: ProductsService) { }

  ngOnInit(): void {
    this._consumoServ.getProducts().subscribe(
      data => this.listProducts = data.map((product)=>{
        product.checkbox = new FormControl(false)
        product.cantidad = new FormControl(0)
        return product
      })
    );
  }

  selectedProduct(listProductsSelect: IProduct, event: any){
    if(event.target.checked === true){
      this.selectedProductsTotal.push(listProductsSelect)
    }else if(event.target.checked === false && this.selectedProductsTotal.includes(listProductsSelect)){
      let deleteArray = this.selectedProductsTotal.indexOf( listProductsSelect)
      this.selectedProductsTotal.splice( deleteArray ,1)
    }
  }

  submitSelection(){
    this._productsService.changeAmountProducts.next(this.selectedProductsTotal)
  }

}

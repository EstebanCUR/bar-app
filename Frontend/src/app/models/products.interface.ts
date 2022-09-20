import { FormControl } from "@angular/forms";

export interface IProduct{
  product: string,
  category: string,
  price: number,
  status: boolean,
  checkbox: FormControl,
  cantidad: FormControl
}

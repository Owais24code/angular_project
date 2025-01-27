import { Injectable, signal } from '@angular/core';
import { IProduct } from '../models/product-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<IProduct[]>([]);

  addToCart(product: IProduct){
    this.cart.set([...this.cart(), product]);
  }
}

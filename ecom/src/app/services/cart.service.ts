import { Injectable, signal } from '@angular/core';
import { IProduct } from '../models/product-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<IProduct[]>([
    {
      id: 2,
      name: "Stainless Steel Water Bottle",
      price: 19.99,
      description: "Eco-friendly stainless steel water bottle with 1L capacity premium product in demand.",
      imageUrl: "https://via.placeholder.com/150",
      quantity: 500,
      category: "Home & Kitchen",
    },
    {
      id: 3,
      name: "Organic Cotton T-shirt",
      price: 14.99,
      description: "Soft and breathable organic cotton T-shirt available in various sizes.",
      imageUrl: "https://via.placeholder.com/150",
      quantity: 200,
      category: "Clothing",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 29.99,
      description: "Ergonomic gaming mouse with adjustable DPI and RGB lighting.",
      imageUrl: "https://via.placeholder.com/150",
      quantity: 80,
      category: "Electronics",
    },
  ]);

  addToCart(product: IProduct){
    this.cart.set([...this.cart(), product]);
  }
}

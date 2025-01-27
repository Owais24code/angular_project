import { Component, signal } from '@angular/core';
import { IProduct } from '../../models/product-list';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, PrimaryButtonComponent],
  template: `
    <div class="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-100">
      @for (product of products(); track product.id){
       <div class="bg-white shadow-lg rounded-lg p-4 border-2 ">
          <img src="{{product.imageUrl}}" alt="{{product.name}}" class="w-full h-48 object-cover object-center">
          <div class="mt-4 flex flex-col justify-between">
            <h2 class="text-lg font-semibold">{{product.name}}</h2>
            <span class="text-gray-600">{{product.description}}</span>
            <span class="text-gray-800 font-semibold mt-2">{{product.price | currency}}</span>
            <span class="text-sm font-bold" [ngClass]="{'text-green-500': product.quantity, 'text-red-500': !product.quantity}">
              @if (product.quantity) {
                In stock: {{product.quantity}}  
              } 
              @else {
                Out of stock
              } 
            </span>
            <app-primary-button label="Add to Cart" class="mt-3"/>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {
    products = signal<IProduct[]>([
      {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 49.99,
        description: "High-quality over-ear wireless Bluetooth headphones with noise cancellation.",
        imageUrl: "https://via.placeholder.com/150",
        quantity: 120,
        category: "Electronics",
      },
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
      {
        id: 5,
        name: "Yoga Mat",
        price: 24.99,
        description: "Non-slip yoga mat made from eco-friendly materials, perfect for workouts.",
        imageUrl: "https://via.placeholder.com/150",
        quantity: 150,
        category: "Fitness",
      },
      {
        id: 6,
        name: "Leather Backpack",
        price: 89.99,
        description: "Premium leather backpack with multiple compartments for laptops and travel.",
        imageUrl: "https://via.placeholder.com/150",
        quantity: 50,
        category: "Accessories",
      },
      {
        id: 7,
        name: "Portable Power Bank",
        price: 39.99,
        description: "Fast-charging portable power bank with 20,000mAh capacity.",
        imageUrl: "https://via.placeholder.com/150",
        quantity: 300,
        category: "Electronics",
      },
      {
        id: 8,
        name: "Ceramic Coffee Mug",
        price: 9.99,
        description: "Handcrafted ceramic coffee mug with a unique design.",
        imageUrl: "https://via.placeholder.com/150",
        quantity: 600,
        category: "Home & Kitchen",
      },
      {
        id: 9,
        name: "Running Shoes",
        price: 74.99,
        description: "Lightweight and durable running shoes for all terrains.",
        imageUrl: "https://via.placeholder.com/150",
        quantity: 120,
        category: "Footwear",
      },
      {
        id: 10,
        name: "Wireless Earbuds",
        price: 59.99,
        description: "Compact wireless earbuds with high-quality sound and long battery life.",
        imageUrl: "https://via.placeholder.com/150",
        category: "Electronics",
      },
    ]);
}

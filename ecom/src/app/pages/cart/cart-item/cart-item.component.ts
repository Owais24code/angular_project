import { Component, input } from '@angular/core';
import { IProduct } from '../../../models/product-list';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: `
    <div class="bg-slate-100 p-4 shadow-lg shadow-slate-400 flex justify-between items-center">
    <img [src]="item().imageUrl" [alt]="item().name" class="w-16 h-16 object-cover ">
    <div class="flex flex-col gap-2">
      <h3 class="text-lg">{{item().name}}</h3>
      <span class="text-gray-600">{{item().description}}</span>
      <span class="text-gray-800 font-semibold">{{item().price }}</span>
      <span class="text-gray-800 font-semibold">Quantity: 1</span>
      <button class=""(click)="removeItem">remove </button>
    </div>
    
    </div>
  `,
  styles: ``
})
export class CartItemComponent {
    item =input.required<IProduct>()

    removeItem(){
      this.item().remove();
    }
}

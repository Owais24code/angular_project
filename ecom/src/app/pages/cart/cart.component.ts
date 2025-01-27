import { Component, inject } from '@angular/core';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from '../../services/cart.service';


@Component ({
  selector: 'app-cart',
  imports: [CartItemComponent],
  template: `
    <div class="flex flex-col items-center p-6 gap-4">
      <h2 class="text-xl">Your Cart</h2>
      @for(item of CartService.cart();track item.id){
        <app-cart-item [item]="item"></app-cart-item>
      }
    </div> 
  `,

  styles: ``,

})

export class CartComponent {
  CartService = inject(CartService);
}


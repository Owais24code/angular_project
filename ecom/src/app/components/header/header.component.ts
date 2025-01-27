import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="bg-slate-200 px-4 py-3 shadow-lg shadow-slate-400 flex justify-between items-center">
          <span class="text-xl">My Store</span>
          <app-primary-button [label]="'Cart(' + CartService.cart().length +')'"/>
        </div>
  `,
  styles: ``
})
export class HeaderComponent {

  CartService =inject(CartService);
}

import { Component, inject } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
  <div class="bg-slate-200 px-4 py-3 shadow-lg shadow-slate-400 flex justify-between items-center">
          <button class="text-xl" routerLink="/">My Store</button>
          <app-primary-button [label]="'Cart(' + CartService.cart().length +')'"
          routerLink="/cart"/>
        </div>
  `,
  styles: ``
})
export class HeaderComponent {

  CartService =inject(CartService);
}

import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="bg-slate-200 px-4 py-3 shadow-lg shadow-slate-400 flex justify-between items-center">
          <span class="text-xl">My Store</span>
          <app-primary-button label="Cart" (btnClicked)="showButtonClicked()"/>
        </div>
  `,
  styles: ``
})
export class HeaderComponent {
  showButtonClicked() {
    alert('Button clicked');
  }
}

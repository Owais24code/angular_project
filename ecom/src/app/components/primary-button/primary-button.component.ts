import { Component, input, output} from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 shadow-lg px-5 py-2 w-full rounded-[15px] hover:bg-opacity-80 " (click)="btnClicked.emit()">
      {{label()}}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
    label=input('');

    btnClicked=output();
   
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
    firstName: string ="owais";
    lastName: string ="khan ";
    dob:Date= new Date();
    input: string= "button";
    selectedstate: string = "";

    showsomemesaage (){
    alert('Hello '+ this.firstName + ' ' + this.lastName + ' ' + this.dob);
    }

    showinput(){
        alert('You clicked on ' + this.input);
    }

    showgratitude(message: string){
        alert(message);
    }
}

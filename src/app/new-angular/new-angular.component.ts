import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-new-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-angular.component.html',
  styleUrl: './new-angular.component.css'
  
})
export class NewAngularComponent {
  users = ['Virat kohli', 'Rohit shrma', 'Hardik pandya'];

}

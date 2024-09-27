import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewAngularComponent } from './new-angular/new-angular.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  imports: [RouterOutlet, NewAngularComponent], // Only one 'imports' property
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed 'styleUrls' typo
})
export class AppComponent {
  title = 'angularProject';
}

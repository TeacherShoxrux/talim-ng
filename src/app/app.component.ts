import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'talim-front-ng';
}

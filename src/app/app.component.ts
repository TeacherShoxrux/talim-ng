import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SpinnerComponent} from './components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'talim-front-ng';
}

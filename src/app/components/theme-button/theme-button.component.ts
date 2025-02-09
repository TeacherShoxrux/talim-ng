import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-theme-button',
  imports: [],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.css'
})
export class ThemeButtonComponent {
  @Input()
  buttonName: string | undefined;
  clicked = false;
  click(){
    this.clicked = true;
  }
}

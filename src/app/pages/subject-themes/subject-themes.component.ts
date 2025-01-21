import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {RouterLink} from '@angular/router';
import {ThemeButtonComponent} from '../../components/theme-button/theme-button.component';

@Component({
  selector: 'app-subject-themes',
  imports: [
    HeaderComponent,
    FooterComponent,
    ThemeButtonComponent
  ],
  templateUrl: './subject-themes.component.html',
  styleUrl: './subject-themes.component.css'
})
export class SubjectThemesComponent {

}

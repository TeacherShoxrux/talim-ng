import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-subject-theme-add',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './subject-theme-add.component.html',
  styleUrl: './subject-theme-add.component.css'
})
export class SubjectThemeAddComponent {

}

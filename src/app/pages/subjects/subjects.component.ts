import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-subjects',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent {

}

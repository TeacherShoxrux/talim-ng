import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {BackButtonComponent} from '../../components/back-button/back-button.component';

@Component({
  selector: 'app-subject-add',
  imports: [
    FooterComponent,
    HeaderComponent,
    BackButtonComponent
  ],
  templateUrl: './subject-add.component.html',
  styleUrl: './subject-add.component.css'
})
export class SubjectAddComponent  implements OnInit {
  route: ActivatedRoute= inject(ActivatedRoute);
  educationTypeId: number = 1;
  ngOnInit(): void {

  }

}

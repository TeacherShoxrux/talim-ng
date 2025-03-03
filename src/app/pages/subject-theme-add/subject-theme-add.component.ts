import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {SubjectThemesService} from '../../services/subject-themes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subject-theme-add',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './subject-theme-add.component.html',
  styleUrl: './subject-theme-add.component.css'
})
export class SubjectThemeAddComponent implements OnInit{
  route: ActivatedRoute=inject(ActivatedRoute);
  subjectThemesService: SubjectThemesService=inject(SubjectThemesService);
  subjectId=this.route.snapshot.params['id'];

  ngOnInit(): void {
  }
}

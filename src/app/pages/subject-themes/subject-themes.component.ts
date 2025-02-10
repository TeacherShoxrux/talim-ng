import { ThemeModel } from '../../models/theme.model';
import { Component, inject, OnInit } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ThemeButtonComponent} from '../../components/theme-button/theme-button.component';
import { SubjectThemesService } from '../../services/subject-themes.service';
import { DataModel } from '../../models/data.model';
import {NgForOf} from '@angular/common';
import {ContentThemeModel} from '../../models/content-theme.model';


@Component({
  selector: 'app-subject-themes',
  imports: [
    HeaderComponent,
    FooterComponent,
    ThemeButtonComponent,
    RouterLink,
    NgForOf
  ],
  templateUrl: './subject-themes.component.html',
  styleUrl: './subject-themes.component.css'
})
export class SubjectThemesComponent implements OnInit{
  subjectThemesService: SubjectThemesService=inject(SubjectThemesService);
  themes:ThemeModel[]=[];
  route: ActivatedRoute=inject(ActivatedRoute);
  subjectId=this.route.snapshot.params['id'];
  content: ContentThemeModel|undefined;


  ngOnInit(): void {
    this.subjectThemesService.getThemesListBySubjectId<DataModel<ThemeModel[]>>(this.subjectId).
    subscribe(
      data =>{
        console.log(data);
        this.themes=data.data;
      },
    )
  }

  onClickTheme(id: number) {
    this.subjectThemesService.getThemeContentById<DataModel<ContentThemeModel>>(id).
    subscribe(
      data=>{
        console.log(data);
        this.content=data.data;
      },
      error =>
      {
        console.log(error);
      }
    )
  }
}

import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {SubjectThemesService} from '../../services/subject-themes.service';
import {ActivatedRoute} from '@angular/router';
import {DataModel} from '../../models/data.model';
import {SubjectTheme} from '../../models/subject-theme';
import {ThemeContentUpdate} from '../../models/theme-content-update';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import { marked } from 'marked';


@Component({
  selector: 'app-subject-theme-add',
  imports: [
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './subject-theme-add.component.html',
  styleUrl: './subject-theme-add.component.css'
})
export class SubjectThemeAddComponent implements OnInit{

  articleForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  router: ActivatedRoute=inject(ActivatedRoute);
  subjectThemesService: SubjectThemesService=inject(SubjectThemesService);
  subjectId=this.router.snapshot.params['id'];
  data:DataModel<SubjectTheme>|undefined ;
  ngOnInit(): void {
  this.subjectThemesService.createThemeBySubjectId<DataModel<SubjectTheme>>(this.subjectId).subscribe(
    data => {
      this.data=data;
    }
  )}

  uploadContent(theme:ThemeContentUpdate){
    this.subjectThemesService.updateThemeContent<DataModel<any>>(theme).subscribe(
      data => {
        console.log(data);
      }
    )
  }
  onSubmit() {
    if (this.articleForm.valid) {
      console.log('Maqola yuborildi:', this.articleForm.value);
      let titleValue = this.articleForm.get('title')?.value;
      let contentValue = this.articleForm.get('content')?.value;

      // Agar backendga jo‘natmoqchi bo‘lsangiz:
      // this.http.post('API_URL', this.articleForm.value).subscribe(response => {
      //   console.log('Serverdan javob:', response);
      // });

    this.uploadContent({
        themeId: this.data?.data.id!,
        contentId: this.data?.data.themeContent.id!,
        name: titleValue,
        contentText: contentValue});
    console.log('Maqola yuborildi:', this.articleForm.value);
      // Formani tozalash:
      // this.articleForm.reset();
    } else {
      console.log('Forma noto‘g‘ri to‘ldirilgan');
      this.articleForm.markAllAsTouched(); // Xatolarni ko‘rsatish uchun
    }
    // // 🔹 Orqaga qaytish
    // this.router.navigate(['..']);
  }
  getHtmlContent() {
    return marked(this.articleForm.get('content')?.value);
  }
}

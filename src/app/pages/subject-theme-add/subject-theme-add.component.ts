import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {SubjectThemesService} from '../../services/subject-themes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DataModel} from '../../models/data.model';
import {SubjectTheme} from '../../models/subject-theme';
import {ThemeContentUpdate} from '../../models/theme-content-update';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import { marked } from 'marked';
import {ImageModel} from '../../models/image-model';
import { Location } from '@angular/common';

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
  constructor(private fb: FormBuilder,private location: Location) {
    this.articleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  route: ActivatedRoute=inject(ActivatedRoute);
  subjectThemesService: SubjectThemesService=inject(SubjectThemesService);
  subjectId=this.route.snapshot.params['id'];
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

    this.uploadContent({
        themeId: this.data?.data.id!,
        contentId: this.data?.data.themeContent.id!,
        name: titleValue,
        contentText: contentValue});
      // // 🔹 Orqaga qaytish
    console.log('Maqola yuborildi:', this.articleForm.value);
    this.articleForm.reset();
    this.location.back();

    } else {
      console.log('Forma noto‘g‘ri to‘ldirilgan');
      this.articleForm.markAllAsTouched(); // Xatolarni ko‘rsatish uchun
    }


  }
  getHtmlContent() {
    return marked(this.articleForm.get('content')?.value);
  }
  @ViewChild('editor') editor!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('preview') preview!: ElementRef<HTMLDivElement>;
  syncScroll(event: Event, target: 'editor' | 'preview') {
    const source = event.target as HTMLElement;
    const targetElement = target === 'editor' ? this.editor?.nativeElement : this.preview?.nativeElement;

    if (targetElement) {
      targetElement.scrollTop = source.scrollTop;
    }
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.subjectThemesService.uploadImageByContentId<DataModel<ImageModel>>(this.data?.data.themeContent.id!,formData).subscribe(
        data => {
          if (data.data['path']) {
            const currentContent = this.articleForm.get('content')?.value || '-';
            this.articleForm.patchValue({
              content: `${currentContent}\n\n![Rasm tavsifi](http://localhost:5187/files/${data.data.path})\n\n`
            });
          }
        },
      (error) => console.error('Rasm yuklashda xatolik:', error)
      )
    }
  }
}

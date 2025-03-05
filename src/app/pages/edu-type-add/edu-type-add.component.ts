import {Component, inject} from '@angular/core';
import {BackButtonComponent} from '../../components/back-button/back-button.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SubjectService} from '../../services/subject.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edu-type-add',
  imports: [
    BackButtonComponent,
    FooterComponent,
    HeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './edu-type-add.component.html',
  styleUrl: './edu-type-add.component.css'
})
export class EduTypeAddComponent {
  subjectService= inject(SubjectService);
  eduTypeForm: FormGroup;
  constructor(private fb: FormBuilder,private location: Location) {
    this.eduTypeForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['',[] ]
    });
  }


  onSubmit(){
    let title = this.eduTypeForm.get('title')?.value;
    let description = this.eduTypeForm.get('description')?.value;
    console.log(title);
    console.log(description);
    console.log("-----------")
    if(this.eduTypeForm.valid){
      this.subjectService.addEduType({
        description:description,
        name:title,
      }).subscribe(
        data => {
          console.log(data);
          console.log("Muvaffaqiyyatli qo'shildi ok");
          this.eduTypeForm.reset();
          this.location.back();
        }
      )
    }else {
      console.log('Forma noto‘g‘ri to‘ldirilgan');
      this.eduTypeForm.markAllAsTouched();
    }
  }
}

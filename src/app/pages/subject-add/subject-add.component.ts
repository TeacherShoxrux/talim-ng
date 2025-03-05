import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {BackButtonComponent} from '../../components/back-button/back-button.component';
import {SubjectService} from '../../services/subject.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Location} from '@angular/common';

@Component({
  selector: 'app-subject-add',
  imports: [
    FooterComponent,
    HeaderComponent,
    BackButtonComponent,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './subject-add.component.html',
  styleUrl: './subject-add.component.css'
})
export class SubjectAddComponent  implements OnInit {
  route: ActivatedRoute=inject(ActivatedRoute);
  eduDirectionId=this.route.snapshot.params['id'];
  subjectService= inject(SubjectService);
  subjectForm: FormGroup;


  constructor(private fb: FormBuilder,private location: Location) {
    this.subjectForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['',[] ]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(form: FormGroup){
    let title = form.get('title')?.value;
    let description = form.get('description')?.value;
    console.log(title);
    console.log(description);
    console.log(this.eduDirectionId)
    console.log("-----------")
    if(form.valid){

    this.subjectService.addSubject({
      educationDirectionId:this.eduDirectionId,
      description:description,
      name:title,
      image:"",
    }).subscribe(
      data => {
        console.log(data);
        console.log("Muvaffaqiyyatli qo'shildi ok");
        this.subjectForm.reset();
        this.location.back();
      }
    )
    }else {
      console.log('Forma noto‘g‘ri to‘ldirilgan');
      form.markAllAsTouched();
    }
  }
}

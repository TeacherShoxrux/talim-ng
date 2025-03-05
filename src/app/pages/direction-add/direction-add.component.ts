import {Component, inject, OnInit} from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {BackButtonComponent} from "../../components/back-button/back-button.component";
import {NgIf} from '@angular/common';
import {Location} from '@angular/common';
import {SubjectService} from '../../services/subject.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-direction-add',
  imports: [
    FooterComponent,
    HeaderComponent,
    BackButtonComponent,
    ReactiveFormsModule
  ],
  templateUrl: './direction-add.component.html',
  styleUrl: './direction-add.component.css'
})
export class DirectionAddComponent {
  route: ActivatedRoute=inject(ActivatedRoute);
  eduTypeId=this.route.snapshot.params['id'];
  subjectService= inject(SubjectService);
  eduForm: FormGroup;
  constructor(private fb: FormBuilder,private location: Location) {
    this.eduForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['',[] ]
    });
  }


  onSubmit(form: FormGroup){
    let title = form.get('title')?.value;
    let description = form.get('description')?.value;
    console.log(title);
    console.log(description);
    console.log(this.eduTypeId)
    console.log("-----------")
    if(form.valid){
      this.subjectService.addEduDirection({
        educationTypeId:this.eduTypeId,
        description:description,
        name:title,
        image:"",
      }).subscribe(
        data => {
          console.log(data);
          console.log("Muvaffaqiyyatli qo'shildi ok");
          this.eduForm.reset();
          this.location.back();


        }
      )
    }else {
      console.log('Forma noto‘g‘ri to‘ldirilgan');
      form.markAllAsTouched();
    }
  }
}

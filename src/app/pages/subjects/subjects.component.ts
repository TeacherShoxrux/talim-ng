import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {SubjectService} from '../../services/subject.service';
import {DataModel} from '../../models/data.model';
import {SubjectModel} from '../../models/subject.model';
import {EducationDirModel} from '../../models/education-dir.model';

@Component({
  selector: 'app-subjects',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage,
    RouterLink,
    NgForOf,
    NgClass
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent implements OnInit {
  route: ActivatedRoute= inject(ActivatedRoute);
  eduTypeId: number=1;
  eduDirections: EducationDirModel[] =[];
  eduDirectionSubjects: SubjectModel[] =[];
  selectedEduDir: EducationDirModel | undefined;
  constructor(public  subjectService: SubjectService) {
  }

  ngOnInit(): void {
    this.eduTypeId = Number(this.route.snapshot.params['id']);
    this.getEduDrectionsByTypeId(this.eduTypeId);
    }
    getEduDrectionsByTypeId(id: number){
      console.log(this.eduTypeId);
      this.subjectService.getEduDirectionsByTypeId<DataModel<EducationDirModel[]>>(id).
      subscribe(
        data => {
          this.eduDirections = data.data;
          console.log(data.data);
        }
      )
    }
    getSubjectsByDirId(id: number){
      console.log(this.eduTypeId);
      this.subjectService.getSubjectsByEduDirectionId<DataModel<SubjectModel[]>>(id).
      subscribe(
        data => {
          this.eduDirectionSubjects = data.data;
          console.log(data.data);
        }
      )
    }
    onClickEduDirection(educationDirModel: EducationDirModel){
    this.selectedEduDir = educationDirModel;
    this.getSubjectsByDirId(educationDirModel.id);
    }
}

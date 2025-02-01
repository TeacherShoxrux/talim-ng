import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {SubjectService} from '../../services/subject.service';
import {DataModel} from '../../models/data.model';
import {SubjectModel} from '../../models/subject.model';

@Component({
  selector: 'app-subjects',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent implements OnInit {
  route: ActivatedRoute= inject(ActivatedRoute);
  eduTypeId: number=1;
  constructor(public  subjectService: SubjectService) {
  }

  ngOnInit(): void {
    const housingLocationId = Number(this.route.snapshot.params['id']);
        this.subjectService.getSubjectsByEduDirectionId<DataModel<SubjectModel[]>>(5).
        subscribe(
          data => {

          }
        )
    }
}

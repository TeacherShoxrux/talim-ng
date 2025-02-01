import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-subject-add',
  imports: [],
  templateUrl: './subject-add.component.html',
  styleUrl: './subject-add.component.css'
})
export class SubjectAddComponent  implements OnInit {
  route: ActivatedRoute= inject(ActivatedRoute);
  educationTypeId: number = 1;
  ngOnInit(): void {

  }

}

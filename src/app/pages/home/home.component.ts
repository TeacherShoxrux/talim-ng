import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {HeaderComponent} from '../../components/header/header.component';
import {HomeService} from '../../services/home.service';
import {DataModel} from '../../models/data.model';
import {EducationDirectionModel} from '../../models/education-direction.model';
import {NgForOf} from '@angular/common';
import {SubjectModel} from '../../models/subject.model';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, NgForOf, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit  {
constructor(public homeService: HomeService) {

}
  public educationTypes: any;
  public topSubjects: any;

  ngOnInit(): void {
    this.homeService.getEducationTypes<DataModel<EducationDirectionModel[]>>().subscribe(
      data => {
        this.educationTypes=data.data;
        console.log(this.educationTypes);
      },
      error => console.log(error),);
    this.topSubjects = this.homeService.getTopSubjects<DataModel<SubjectModel[]>>().subscribe(
      data => {
        this.topSubjects=data.data;
        console.log(this.topSubjects);
      }
    );
  }
}

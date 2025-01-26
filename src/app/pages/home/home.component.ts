import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../../components/footer/footer.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {HeaderComponent} from '../../components/header/header.component';
import {ApiServiceService} from '../../services/api-service.service';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
 constructor(public  service: ApiServiceService) {
 }

  ngOnInit(): void {
        this.service.getEducationTypes();
    }

}

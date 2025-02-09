import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {BackButtonComponent} from "../../components/back-button/back-button.component";

@Component({
  selector: 'app-direction-add',
    imports: [
        FooterComponent,
        HeaderComponent,
        BackButtonComponent
    ],
  templateUrl: './direction-add.component.html',
  styleUrl: './direction-add.component.css'
})
export class DirectionAddComponent {

}

import { Component } from '@angular/core';

import {SpinnerService} from '../../services/spinner.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  imports: [
    NgIf
  ],
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  constructor(public loader: SpinnerService) { }
}

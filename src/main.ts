import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import routesConfig from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers:[provideRouter(routesConfig)]}
).catch(err => console.error(err));

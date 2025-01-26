import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import routesConfig from './app/app.routes';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers:[
    provideRouter(routesConfig),
    provideHttpClient(),
  ]}
).catch(err => console.error(err));
